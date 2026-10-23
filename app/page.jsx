'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-50 bg-emerald-950/95 backdrop-blur-md text-white border-b border-emerald-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Far-Left Top: School Logo & Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-md flex-shrink-0">
              <div className="w-full h-full bg-emerald-950 rounded-[14px] flex items-center justify-center font-black text-emerald-400 text-lg border border-emerald-500/30">
                DIB
              </div>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug">
                Dodola Ifa Boru
              </h1>
              <p className="text-[11px] text-emerald-300 font-medium tracking-wide uppercase">
                Special Boarding School
              </p>
            </div>
          </div>

          {/* Desktop & Mobile Navigation Links */}
          <nav className="flex items-center space-x-1 sm:space-x-6">
            <a href="#about" onClick={() => setActiveTab('about')} className="text-xs sm:text-sm font-semibold text-emerald-100 hover:text-white transition px-2 py-1">
              About
            </a>
            <a href="#academics" onClick={() => setActiveTab('academics')} className="text-xs sm:text-sm font-semibold text-emerald-100 hover:text-white transition px-2 py-1">
              Academics
            </a>
            <a href="#achievements" onClick={() => setActiveTab('achievements')} className="text-xs sm:text-sm font-semibold text-emerald-100 hover:text-white transition px-2 py-1">
              Achievements
            </a>
            <a 
              href="/login" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md hover:shadow-emerald-900/50 transition border border-emerald-400/30 ml-2"
            >
              Portal Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-900 text-white py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Grade 9 – 12 STEM & Boarding Excellence
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Empowering the Next Generation of Innovators & Leaders
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Welcome to the official portal of Dodola Ifa Boru Special Boarding School. Access real-time academic records, residence exeat tracking, and secure digital student IDs.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a 
              href="/login" 
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm px-8 py-3.5 rounded-2xl shadow-xl transition"
            >
              Access Student & Staff Portal →
            </a>
          </div>
        </div>
      </section>

      {/* Dynamic Tab Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 w-full flex-grow">
        <div className="flex justify-center space-x-2 border-b border-slate-200 pb-4 mb-8">
          <button 
            onClick={() => setActiveTab('about')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${activeTab === 'about' ? 'bg-emerald-800 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            About School
          </button>
          <button 
            onClick={() => setActiveTab('academics')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${activeTab === 'academics' ? 'bg-emerald-800 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            Academics
          </button>
          <button 
            onClick={() => setActiveTab('achievements')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${activeTab === 'achievements' ? 'bg-emerald-800 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            Achievements
          </button>
        </div>

        {/* Tab 1: About */}
        {activeTab === 'about' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-xl font-extrabold text-slate-900">About Dodola Ifa Boru Special Boarding School</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dodola Ifa Boru is a premier special boarding school dedicated to high-achieving Grade 9 to Grade 12 students. Our campus provides a structured, modern learning environment focused on academic excellence, personal integrity, and leadership development.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-2xl border text-center">
                <div className="text-2xl font-black text-emerald-800">Grades 9-12</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">High School Curriculum</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border text-center">
                <div className="text-2xl font-black text-emerald-800">100% Residence</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Full Boarding Facility</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border text-center">
                <div className="text-2xl font-black text-emerald-800">Smart Campus</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">QR ID & Digital Portal</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Academics */}
        {activeTab === 'academics' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-xl font-extrabold text-slate-900">Academic Programs & Streams</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We offer rigorous natural and social science programs designed to prepare students for national examinations and top university admissions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl border border-emerald-100 bg-emerald-50/50">
                <h4 className="font-bold text-emerald-900 text-sm">Natural Sciences Stream</h4>
                <p className="text-xs text-slate-600 mt-1">Physics, Chemistry, Biology, Advanced Mathematics, and Computer Science.</p>
              </div>
              <div className="p-4 rounded-2xl border border-teal-100 bg-teal-50/50">
                <h4 className="font-bold text-teal-900 text-sm">Social Sciences Stream</h4>
                <p className="text-xs text-slate-600 mt-1">Economics, Geography, History, English Literature, and Civics.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Achievements */}
        {activeTab === 'achievements' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-xl font-extrabold text-slate-900">Excellence & Achievements</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dodola Ifa Boru consistently maintains top national exam passing rates and regional science fair honors.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> Top regional performance in Grade 12 national matric exams.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> State-of-the-art digital boarding & exeat management system.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> 100% transition rate to higher education institutions.
              </li>
            </ul>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800 text-center text-xs">
        <div className="max-w-5xl mx-auto space-y-2">
          <p className="font-semibold text-slate-300">Dodola Ifa Boru Special Boarding School</p>
          <p className="text-slate-500">Official Student & Staff Portal &copy; 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
                                                                                         }
