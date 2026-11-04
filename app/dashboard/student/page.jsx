'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/login';
        return;
      }

      // Fetch profile and student details together
      const { data, error } = await supabase
        .from('students')
        .select(`
          *,
          profiles:id (full_name, role)
        `)
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching student:', error);
      } else {
        setStudent(data);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setLoading(false);
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-emerald-400 font-medium">
        Loading student portal...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row font-sans">
      
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-emerald-500/20 flex flex-col justify-between p-6">
        <div>
          {/* School Brand */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/40 rounded-xl flex items-center justify-center text-emerald-400 font-bold">
              🏫
            </div>
            <div>
              <h2 className="text-sm font-black tracking-wider text-white uppercase">Dodola Ifa Boru</h2>
              <p className="text-xs text-emerald-400 font-semibold">Student Portal</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Dashboard', icon: '📊' },
              { id: 'assignments', label: 'Assignments', icon: '📚' },
              { id: 'grades', label: 'Academic Grades', icon: '🏆' },
              { id: 'exeat', label: 'Exeat Requests', icon: '🚪' },
              { id: 'profile', label: 'My Profile', icon: '👤' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sign Out Button at bottom of sidebar */}
        <div className="pt-6 border-t border-slate-800">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold text-red-400 hover:bg-red-500/10 transition border border-red-500/20"
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA (No box containers, full screen flow) */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header Bar */}
        <header className="bg-slate-900/50 backdrop-blur-md border-b border-white/10 px-8 py-5 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-lg md:text-xl font-black text-white capitalize">
              {activeTab === 'overview' ? 'Student Dashboard' : activeTab}
            </h1>
            <p className="text-xs text-slate-400">Welcome back, {student?.profiles?.full_name || 'Student'}</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-emerald-400">{student?.student_id_code || 'DIB/----/26'}</p>
              <p className="text-[10px] text-slate-400">{student?.grade_level || 'Grade 9-12'} &middot; {student?.stream || 'General'}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold text-sm">
              {student?.profiles?.full_name ? student.profiles.full_name.charAt(0) : 'S'}
            </div>
          </div>
        </header>

        {/* Dynamic Tab Content */}
        <div className="p-8 space-y-8">
          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Grade Level', value: student?.grade_level || 'Grade 11', sub: student?.stream || 'Natural Sciences', icon: '🎓' },
                  { title: 'Dormitory Block', value: student?.dorm_block || 'Not Assigned', sub: 'Special Boarding Quarters', icon: '🏠' },
                  { title: 'Active Exeats', value: '0 Pending', sub: 'Gate Pass Status', icon: '🚪' },
                  { title: 'Overall GPA', value: '3.85', sub: 'Top 5% in class', icon: '⭐' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-900/80 border border-emerald-500/20 rounded-2xl p-5 shadow-xl relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.title}</span>
                      <span className="text-xl p-2 bg-emerald-500/10 rounded-xl">{stat.icon}</span>
                    </div>
                    <div className="text-xl font-extrabold text-white">{stat.value}</div>
                    <div className="text-[11px] text-emerald-400 mt-1">{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* Announcement / Notice Section */}
              <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">📢</span>
                  <h3 className="text-base font-extrabold text-emerald-400">Boarding Announcement</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Welcome to the Dodola Ifa Boru Special Boarding School portal. Ensure all exeat requests are submitted 48 hours prior to departure. Mid-semester academic evaluations begin next week.
                </p>
              </div>
            </>
          )}

          {activeTab === 'assignments' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
              <div className="text-4xl">📚</div>
              <h3 className="text-lg font-bold text-white">No Pending Assignments</h3>
              <p className="text-xs text-slate-400">All homework assignments have been successfully submitted.</p>
            </div>
          )}

          {activeTab === 'grades' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
              <div className="text-4xl">🏆</div>
              <h3 className="text-lg font-bold text-white">Academic Grade Records</h3>
              <p className="text-xs text-slate-400">Grade reports will be published here by your subject teachers.</p>
            </div>
          )}

          {activeTab === 'exeat' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
              <div className="text-4xl">🚪</div>
              <h3 className="text-lg font-bold text-white">Gate Pass & Exeat System</h3>
              <p className="text-xs text-slate-400">You have no active weekend or emergency exeat requests.</p>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="bg-slate-900 border border-emerald-500/20 rounded-3xl p-8 max-w-xl space-y-6">
              <h3 className="text-lg font-bold text-emerald-400">Student Profile Information</h3>
              <div className="space-y-4 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Full Name</span>
                  <span className="font-bold text-white">{student?.profiles?.full_name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Student ID</span>
                  <span className="font-bold text-emerald-400">{student?.student_id_code}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Grade & Stream</span>
                  <span className="font-bold text-white">{student?.grade_level} - {student?.stream}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Dormitory Block</span>
                  <span className="font-bold text-white">{student?.dorm_block}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
