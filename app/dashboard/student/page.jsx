'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

      const { data, error } = await supabase
        .from('students')
        .select(`
          *,
          profiles:id (full_name, role)
        `)
        .eq('id', user.id)
        .single();

      if (!error && data) {
        setStudent(data);
      }
    } catch (err) {
      console.error('Error fetching student:', err);
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
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-blue-400 font-medium">
        Loading Student Portal...
      </div>
    );
  }

  const studentName = student?.profiles?.full_name || 'Samuel Alemu';
  const studentIdCode = student?.student_id_code || 'STU20240123';
  const gradeLevel = student?.grade_level || 'Grade 11';
  const stream = student?.stream || 'Section A';
  const dormBlock = student?.dorm_block || 'Block B-203';

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: '🏠' },
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'attendance', label: 'Attendance', icon: '✅' },
    { id: 'grades', label: 'My Grades', icon: '🏆' },
    { id: 'timetable', label: 'Timetable', icon: '📅' },
    { id: 'assignments', label: 'Assignments', icon: '📋' },
    { id: 'announcements', label: 'Announcements', icon: '📢' },
    { id: 'events', label: 'School Events', icon: '🗓️' },
    { id: 'leave', label: 'Leave Requests', icon: '✈️' },
    { id: 'pass', label: 'Leave Pass', icon: '🎫' },
    { id: 'resources', label: 'Learning Resources', icon: '📚' },
    { id: 'messages', label: 'Messages', icon: '✉️', badge: 3 },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950 flex font-sans">
      
      {/* 1. LEFT SIDEBAR (Dark Blue Theme) */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0a1931] text-white flex flex-col justify-between p-5 transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
          {/* Logo & School Name */}
          <div className="flex items-center space-x-3 mb-8 px-2">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center shadow-lg text-slate-950 font-black text-lg">
              🛡️
            </div>
            <div>
              <h2 className="text-xs font-black tracking-tight text-white uppercase">Dodola Ifa Boru</h2>
              <p className="text-[10px] text-amber-400 font-bold">Secondary School</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-200px)] pr-1 custom-scrollbar">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer / Logout */}
        <div className="pt-4 border-t border-white/10">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold text-red-400 hover:bg-red-500/10 transition"
          >
            <span className="text-base">🚪</span>
            <span>Logout</span>
          </button>
          <div className="text-[10px] text-slate-400 text-center mt-3 font-semibold tracking-wider">
            Learn &bull; Excel &bull; Lead
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-64">
        
        {/* TOP HEADER */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
          <div className="flex items-center space-x-4 flex-1 max-w-xl">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 text-slate-700"
            >
              ☰
            </button>
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">🔍</span>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-slate-100 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition">
              🔔
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center space-x-2 border-l pl-4 border-slate-200">
              <select className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer">
                <option>2026 – 2027 Academic Year</option>
                <option>2025 – 2026 Academic Year</option>
              </select>
            </div>

            <div className="flex items-center space-x-3 pl-2">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xs shadow">
                {studentName.charAt(0)}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-bold text-slate-900 leading-tight">{studentName}</p>
                <p className="text-[10px] text-slate-500">Student Portal</p>
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT BODY */}
        <main className="flex-1 p-6 space-y-6 max-w-7xl mx-auto w-full">
          {activeTab === 'overview' && (
            <>
              {/* HERO BANNER CARD */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 shadow-xl flex flex-col justify-between min-h-[220px]">
                <div className="absolute inset-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-transparent"></div>
                
                <div className="relative z-10 space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Good morning, <span className="text-amber-400">{studentName}!</span>
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
                    Welcome to Dodola Ifa Boru Secondary School Student Portal. Manage your academics, attendance, and exeats seamlessly.
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-3 mt-6 pt-4 border-t border-white/15">
                  <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2">
                    <span>🎓</span>
                    <span>{gradeLevel}</span>
                  </div>
                  <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2">
                    <span>👥</span>
                    <span>{stream}</span>
                  </div>
                  <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2">
                    <span>🆔</span>
                    <span>Student ID: {studentIdCode}</span>
                  </div>
                </div>
              </div>

              {/* QUICK METRICS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase">Attendance</span>
                    <span className="p-2 bg-emerald-50 text-emerald-600 rounded-2xl text-lg">✅</span>
                  </div>
                  <div className="my-4">
                    <div className="text-2xl font-black text-slate-900">95%</div>
                    <div className="text-[11px] text-emerald-600 font-bold mt-1">&uarr; 2% from last month</div>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[95%]"></div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase">Overall Average</span>
                    <span className="p-2 bg-blue-50 text-blue-600 rounded-2xl text-lg">🏆</span>
                  </div>
                  <div className="my-4">
                    <div className="text-2xl font-black text-slate-900">92.5%</div>
                    <div className="text-[11px] text-blue-600 font-bold mt-1">Excellent Standing</div>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[92.5%]"></div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase">Pending Assignments</span>
                    <span className="p-2 bg-amber-50 text-amber-600 rounded-2xl text-lg">📋</span>
                  </div>
                  <div className="my-4">
                    <div className="text-2xl font-black text-slate-900">2</div>
                    <div className="text-[11px] text-amber-600 font-bold mt-1 cursor-pointer hover:underline">View all &rarr;</div>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[40%]"></div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase">Today's Classes</span>
                    <span className="p-2 bg-purple-50 text-purple-600 rounded-2xl text-lg">📅</span>
                  </div>
                  <div className="my-4">
                    <div className="text-2xl font-black text-slate-900">3</div>
                    <div className="text-[11px] text-purple-600 font-bold mt-1 cursor-pointer hover:underline">View timetable &rarr;</div>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-600 h-full w-[75%]"></div>
                  </div>
                </div>
              </div>

              {/* TIMETABLE & ANNOUNCEMENTS ROW */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Today's Timetable */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Today's Timetable</h3>
                    <button className="text-xs font-bold text-blue-600 hover:underline">View Full &rarr;</button>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { time: '08:00 – 09:40', subject: 'Mathematics', room: 'Rm 101' },
                      { time: '10:00 – 11:40', subject: 'Physics', room: 'Rm 103' },
                      { time: '13:00 – 14:40', subject: 'Chemistry', room: 'Rm 105' },
                    ].map((slot, idx) => (
                      <div key={idx} className="py-3 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-500">{slot.time}</span>
                        <span className="font-bold text-slate-900">{slot.subject}</span>
                        <span className="bg-slate-100 px-2.5 py-1 rounded-lg text-slate-600 font-medium">{slot.room}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Announcements */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Recent Announcements</h3>
                    <button className="text-xs font-bold text-blue-600 hover:underline">View All &rarr;</button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { title: 'School Cleanliness Campaign', desc: "Let's keep our school clean and green.", date: 'Nov 1, 2026', color: 'bg-blue-500' },
                      { title: 'Midterm Exam Schedule', desc: 'Exams will be held from Nov 10–14, 2026.', date: 'Oct 28, 2026', color: 'bg-emerald-500' },
                      { title: 'Dormitory Rules Update', desc: 'New rules for the boarding house residents.', date: 'Oct 25, 2026', color: 'bg-amber-500' },
                    ].map((ann, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                        <span className={`w-2 h-2 mt-1.5 rounded-full ${ann.color} flex-shrink-0`}></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900 truncate">{ann.title}</h4>
                            <span className="text-[10px] text-slate-400 font-medium">{ann.date}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 truncate mt-0.5">{ann.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* UPCOMING ASSIGNMENTS & ACADEMIC PERFORMANCE */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Upcoming Assignments */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Upcoming Assignments</h3>
                    <button className="text-xs font-bold text-blue-600 hover:underline">View All &rarr;</button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { title: 'Physics Lab Report', sub: 'Physics', due: 'Nov 6' },
                      { title: 'Essay: Climate Change', sub: 'English', due: 'Nov 8' },
                      { title: 'Math Problem Set #5', sub: 'Mathematics', due: 'Nov 10' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-slate-50/50">
                        <div className="flex items-center space-x-3">
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                            <p className="text-[10px] text-slate-500">{item.sub}</p>
                          </div>
                        </div>
                        <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-xl border border-red-100">
                          Due {item.due}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Performance Chart */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Academic Performance</h3>
                    <button className="text-xs font-bold text-blue-600 hover:underline">View Details &rarr;</button>
                  </div>
                  <div className="flex items-center justify-between pt-4 px-4">
                    <div className="space-y-2 text-center">
                      <div className="h-28 w-10 bg-blue-600 rounded-t-xl mx-auto flex items-end justify-center pb-2 text-white text-[10px] font-bold">94%</div>
                      <span className="text-xs font-bold text-slate-700">Math</span>
                    </div>
                    <div className="space-y-2 text-center">
                      <div className="h-24 w-10 bg-emerald-500 rounded-t-xl mx-auto flex items-end justify-center pb-2 text-white text-[10px] font-bold">91%</div>
                      <span className="text-xs font-bold text-slate-700">Physics</span>
                    </div>
                    <div className="space-y-2 text-center">
                      <div className="h-26 w-10 bg-blue-500 rounded-t-xl mx-auto flex items-end justify-center pb-2 text-white text-[10px] font-bold">93%</div>
                      <span className="text-xs font-bold text-slate-700">Chemistry</span>
                    </div>
                    <div className="space-y-2 text-center">
                      <div className="h-20 w-10 bg-amber-500 rounded-t-xl mx-auto flex items-end justify-center pb-2 text-white text-[10px] font-bold">88%</div>
                      <span className="text-xs font-bold text-slate-700">English</span>
                    </div>
                    <div className="border-l pl-6 border-slate-200 text-center">
                      <p className="text-[10px] uppercase font-bold text-slate-400">Overall</p>
                      <p className="text-2xl font-black text-blue-600 mt-1">91.5%</p>
                      <span className="text-lg">⭐</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* ATTENDANCE, SCHOOL EVENTS & DORMITORY INFO */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Attendance Overview */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Attendance Overview</h3>
                  <div className="flex items-center justify-between py-2">
                    <div className="text-3xl font-black text-blue-600">95%</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center space-x-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span><span className="text-slate-600">Present: 175</span></div>
                      <div className="flex items-center space-x-2"><span className="w-2 h-2 rounded-full bg-red-500"></span><span className="text-slate-600">Absent: 6</span></div>
                      <div className="flex items-center space-x-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><span className="text-slate-600">Late: 4</span></div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">Total: 185 Classes Recorded</p>
                </div>

                {/* School Events */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">School Events</h3>
                    <button className="text-xs font-bold text-blue-600 hover:underline">View All &rarr;</button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { title: 'Science Fair', date: 'Nov 15, 2026' },
                      { title: 'Sports Day', date: 'Nov 20, 2026' },
                      { title: 'Parent-Teacher Meeting', date: 'Nov 28, 2026' },
                    ].map((ev, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 last:border-0">
                        <span className="font-bold text-slate-800">{ev.title}</span>
                        <span className="text-slate-500 font-medium">{ev.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dormitory Info */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Dormitory Info</h3>
                  <div className="rounded-2xl overflow-hidden h-24 bg-cover bg-center relative" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=400&auto=format&fit=crop')` }}>
                    <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                      <span className="text-white text-xs font-bold">Youa Ifa's Dorm B</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Room Number</span>
                    <span className="font-bold text-slate-900">{dormBlock}</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-md shadow-blue-600/20">
                    View Details &rarr;
                  </button>
                </div>

              </div>
            </>
          )}

          {/* Fallback views for other tabs */}
          {activeTab !== 'overview' && (
            <div className="bg-white rounded-3xl p-12 text-center space-y-4 shadow-sm border border-slate-200">
              <div className="text-5xl">📂</div>
              <h2 className="text-xl font-black text-slate-900 capitalize">{activeTab} Section</h2>
              <p className="text-xs text-slate-500">This module for Dodola Ifa Boru Special Boarding School is currently synced and ready.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
