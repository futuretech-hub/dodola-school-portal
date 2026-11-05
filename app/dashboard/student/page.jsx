'use client';

import React, { useState } from 'react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Realistic Sample Student Data
  const student = {
    name: 'Samuel Alemu',
    grade: 'Grade 11',
    section: 'Section A',
    studentId: 'STU2026-089',
    academicYear: '2026 – 2027',
    avatar: 'SA',
    overallGpa: '91.5%',
    attendanceRate: 96,
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'timetable', label: 'Timetable', icon: '📅' },
    { id: 'subjects', label: 'Subjects', icon: '📚' },
    { id: 'assignments', label: 'Assignments', icon: '📝', badge: 3 },
    { id: 'grades', label: 'Grades', icon: '📊' },
    { id: 'attendance', label: 'Attendance', icon: '✅' },
    { id: 'announcements', label: 'Announcements', icon: '📢', badge: 2 },
    { id: 'leave', label: 'Leave & Passes', icon: '🚪' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'events', label: 'School Events', icon: '🏫' },
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const todayClasses = [
    { time: '08:00 — 09:30', subject: 'Mathematics', teacher: 'Mr. Abebe K.', room: 'Room 3', isCurrent: false },
    { time: '09:45 — 11:15', subject: 'Physics', teacher: 'Ms. Bethlehem T.', room: 'Physics Lab 2', isCurrent: true },
    { time: '11:30 — 13:00', subject: 'English Language', teacher: 'Mr. David M.', room: 'Room 5', isCurrent: false },
    { time: '14:00 — 15:30', subject: 'Chemistry', teacher: 'Dr. Solomon G.', room: 'Chemistry Lab', isCurrent: false },
  ];

  const assignments = [
    { title: 'Electromagnetism Lab Report', subject: 'Physics', teacher: 'Ms. Bethlehem T.', due: 'Today, 23:59', status: 'Due Soon', statusColor: 'bg-amber-100 text-amber-800 border-amber-200' },
    { title: 'Quadratic Functions Problem Set', subject: 'Mathematics', teacher: 'Mr. Abebe K.', due: 'Nov 8, 2026', status: 'Pending', statusColor: 'bg-blue-100 text-blue-800 border-blue-200' },
    { title: 'Persuasive Essay Draft', subject: 'English', teacher: 'Mr. David M.', due: 'Nov 12, 2026', status: 'Submitted', statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  ];

  const announcements = [
    { title: 'Mid-Term Examination Schedule Released', date: 'Nov 4, 2026', type: 'Exam Info', important: true, text: 'Exams will commence on Nov 18. Please check the portal schedule.' },
    { title: 'Weekend Boarding Leave Policy Reminder', date: 'Nov 2, 2026', type: 'Dormitory Notice', important: false, text: 'All leave requests for the upcoming weekend must be logged by Thursday 17:00.' },
  ];

  const leavePasses = [
    { type: 'Weekend Home Leave', date: 'Nov 14 — Nov 16', status: 'Approved', statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200', passCode: 'PASS-8921' },
    { type: 'Town Medical Exit', date: 'Nov 09, 2026', status: 'Pending Approval', statusBg: 'bg-amber-50 text-amber-700 border-amber-200', passCode: 'Req #402' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col md:flex-row">
      
      {/* 1. DESKTOP SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-slate-200 border-r border-slate-800 sticky top-0 h-screen p-4 justify-between">
        <div className="space-y-6">
          {/* School Brand Header */}
          <div className="flex items-center space-x-3 px-2 py-1">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-lg shadow-md">
              🏫
            </div>
            <div className="min-w-0">
              <h1 className="text-xs font-bold uppercase tracking-wider text-slate-400">Boarding Portal</h1>
              <p className="text-sm font-black text-white truncate">Dodola Ifa Boru</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === item.id
                    ? 'bg-emerald-600 text-white shadow-sm font-bold'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-emerald-500 text-slate-950 text-[10px] px-2 py-0.5 rounded-full font-black">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* User Info Sidebar Bottom */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between px-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-slate-700 text-emerald-400 font-bold flex items-center justify-center text-xs border border-slate-600">
              {student.avatar}
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-200 leading-tight">{student.name}</p>
              <p className="text-[10px] text-slate-400">{student.grade}</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-red-400 text-xs font-semibold">
            🚪
          </button>
        </div>
      </aside>

      {/* 2. MOBILE TOP NAVIGATION & DRAWER */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between sticky top-0 z-50 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-sm font-bold">🏫</div>
          <div>
            <h1 className="text-xs font-black">Dodola Boarding School</h1>
            <p className="text-[10px] text-slate-400">{student.name} • {student.grade}</p>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-200 text-lg"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-slate-900/95 backdrop-blur-md z-40 p-4 overflow-y-auto space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold ${
                activeTab === item.id ? 'bg-emerald-600 text-white' : 'text-slate-300 bg-slate-800/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              {item.badge && <span className="bg-emerald-500 text-slate-950 text-xs px-2 py-0.5 rounded-full font-bold">{item.badge}</span>}
            </button>
          ))}
        </div>
      )}

      {/* 3. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* TOP DESKTOP HEADER */}
        <header className="hidden md:flex bg-white border-b border-slate-200 px-8 py-4 items-center justify-between sticky top-0 z-30 shadow-xs">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic Portal</span>
            <h2 className="text-lg font-black text-slate-900">Student Overview</h2>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-right border-r pr-6 border-slate-200">
              <span className="text-xs font-bold text-slate-600 block">{student.academicYear}</span>
              <span className="text-[10px] font-semibold text-slate-400">ID: {student.studentId}</span>
            </div>

            <button className="relative p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition">
              🔔
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs border border-emerald-200">
                {student.avatar}
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-slate-900">{student.name}</p>
                <p className="text-[10px] text-slate-500">{student.grade} &bull; {student.section}</p>
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
          
          {/* WELCOME BANNER & QUICK ACTIONS */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-500/30">
                <span>🏫 Dodola Ifa Boru Boarding School</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                Good morning, {student.name.split(' ')[0]} 👋
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                {student.grade} &bull; {student.section} &bull; Student ID: {student.studentId}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
              {[
                { label: 'View Timetable', icon: '📅' },
                { label: 'Submit Assignment', icon: '📝' },
                { label: 'Request Leave', icon: '🚪' },
                { label: 'View Grades', icon: '📊' },
              ].map((btn, idx) => (
                <button
                  key={idx}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl border border-white/15 backdrop-blur-md transition flex items-center justify-center space-x-2"
                >
                  <span>{btn.icon}</span>
                  <span>{btn.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4 OVERVIEW METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-xs font-bold uppercase tracking-wider">Today's Classes</span>
                <span className="text-lg">📚</span>
              </div>
              <div className="my-3">
                <div className="text-2xl font-black text-slate-900">4 Classes</div>
                <p className="text-xs text-emerald-600 font-semibold mt-1">Next: Physics Lab (09:45)</p>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[50%]"></div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-xs font-bold uppercase tracking-wider">Attendance Rate</span>
                <span className="text-lg">✅</span>
              </div>
              <div className="my-3">
                <div className="text-2xl font-black text-slate-900">{student.attendanceRate}%</div>
                <p className="text-xs text-slate-500 font-medium mt-1">175 Present / 6 Absent</p>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[96%]"></div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-xs font-bold uppercase tracking-wider">Assignments Due</span>
                <span className="text-lg">📝</span>
              </div>
              <div className="my-3">
                <div className="text-2xl font-black text-slate-900">2 Pending</div>
                <p className="text-xs text-amber-600 font-semibold mt-1">Physics Lab Report Due Today</p>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[65%]"></div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-xs font-bold uppercase tracking-wider">Academic Average</span>
                <span className="text-lg">🏆</span>
              </div>
              <div className="my-3">
                <div className="text-2xl font-black text-slate-900">{student.overallGpa}</div>
                <p className="text-xs text-emerald-600 font-semibold mt-1">Top 5% in Grade 11</p>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[91%]"></div>
              </div>
            </div>
          </div>

          {/* MAIN GRID CONTENT: TIMETABLE & ANNOUNCEMENTS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* TODAY'S TIMETABLE (2 Columns on Large Screens) */}
            <div className="lg:col-span-2 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Today's Timetable</h3>
                  <p className="text-xs text-slate-500">Thursday, Semester 1 Schedule</p>
                </div>
                <button className="text-xs font-bold text-emerald-600 hover:underline">Full Schedule &rarr;</button>
              </div>

              <div className="space-y-3">
                {todayClasses.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                      item.isCurrent
                        ? 'bg-emerald-50/80 border-emerald-300 ring-1 ring-emerald-400/50'
                        : 'bg-slate-50/50 border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-10 rounded-full ${item.isCurrent ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-extrabold text-slate-900">{item.subject}</h4>
                          {item.isCurrent && (
                            <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                              Current Class
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500">{item.teacher}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end space-x-4 text-xs font-semibold text-slate-600">
                      <span className="bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">{item.room}</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BOARDING LEAVE & PASSES (1 Column) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Leave & Pass Status</h3>
                    <p className="text-xs text-slate-500">Boarding House Authorizations</p>
                  </div>
                  <span className="text-xl">🚪</span>
                </div>

                <div className="space-y-3">
                  {leavePasses.map((pass, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">{pass.type}</span>
                        <span className={`px-2 py-0.5 rounded-full font-bold border text-[10px] ${pass.statusBg}`}>
                          {pass.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span>{pass.date}</span>
                        <span className="font-mono text-slate-400">{pass.passCode}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition shadow-sm mt-4">
                + Request New Exit Pass
              </button>
            </div>
          </div>

          {/* SECONDARY GRID CONTENT: ASSIGNMENTS & ANNOUNCEMENTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* ASSIGNMENTS SECTION */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Pending Assignments</h3>
                  <p className="text-xs text-slate-500">Grade 11 Coursework</p>
                </div>
                <button className="text-xs font-bold text-emerald-600 hover:underline">View All &rarr;</button>
              </div>

              <div className="space-y-3">
                {assignments.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">{item.subject} &bull; {item.teacher}</p>
                      <p className="text-[11px] text-slate-400 font-medium">Due: {item.due}</p>
                    </div>

                    <button className="self-start sm:self-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-2xs">
                      Submit Work
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* ANNOUNCEMENTS SECTION */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Boarding & School Notices</h3>
                  <p className="text-xs text-slate-500">Official Bulletin</p>
                </div>
                <button className="text-xs font-bold text-emerald-600 hover:underline">Archive &rarr;</button>
              </div>

              <div className="space-y-3">
                {announcements.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border space-y-2 ${
                      item.important
                        ? 'bg-amber-50/40 border-amber-200/80'
                        : 'bg-slate-50/50 border-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {item.important && <span className="text-amber-600 text-xs font-bold">⚠️</span>}
                        <span className="text-xs font-extrabold text-slate-900">{item.title}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400">{item.date}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.text}</p>
                    <div className="inline-block bg-slate-200/60 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">
                      {item.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ACADEMIC PROGRESS SUMMARY BAR */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Subject Performance Overview</h3>
                <p className="text-xs text-slate-500">Continuous Assessment Progress</p>
              </div>
              <button className="text-xs font-bold text-emerald-600 hover:underline">Detailed Report &rarr;</button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { subject: 'Mathematics', score: '94%', progress: 'w-[94%]', color: 'bg-emerald-500' },
                { subject: 'Physics', score: '91%', progress: 'w-[91%]', color: 'bg-blue-600' },
                { subject: 'Chemistry', score: '93%', progress: 'w-[93%]', color: 'bg-teal-500' },
                { subject: 'English', score: '88%', progress: 'w-[88%]', color: 'bg-indigo-500' },
              ].map((sub, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-700">{sub.subject}</span>
                    <span className="font-black text-slate-900">{sub.score}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className={`${sub.color} ${sub.progress} h-full rounded-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
