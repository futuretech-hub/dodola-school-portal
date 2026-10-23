'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-between">
      {/* Top Header / Navigation Bar */}
      <header className="bg-emerald-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Top Left: Logo & School Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white text-emerald-900 flex items-center justify-center font-black text-lg border-2 border-emerald-400 shadow-sm">
              DIB
            </div>
            <div>
              <h1 className="font-bold text-sm md:text-base leading-tight">
                Dodola Ifa Boru
              </h1>
              <p className="text-[10px] md:text-xs text-emerald-300 font-medium tracking-wide">
                Special Boarding School
              </p>
            </div>
          </div>

          {/* Desktop & Mobile Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold">
            <button 
              onClick={() => setActiveTab('home')} 
              className={`hover:text-emerald-300 transition ${activeTab === 'home' ? 'text-emerald-300 underline underline-offset-4' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('about')} 
              className={`hover:text-emerald-300 transition ${activeTab === 'about' ? 'text-emerald-300 underline underline-offset-4' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('academics')} 
              className={`hover:text-emerald-300 transition ${activeTab === 'academics' ? 'text-emerald-300 underline underline-offset-4' : ''}`}
            >
              Academics
            </button>
            <button 
              onClick={() => setActiveTab('achievements')} 
              className={`hover:text-emerald-300 transition ${activeTab === 'achievements' ? 'text-emerald-300 underline underline-offset-4' : ''}`}
            >
              Achievements
            </button>
          </nav>

          {/* Right Action: Login Button */}
          <div>
            <a
              href="/login"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition inline-block"
            >
              Portal Login
            </a>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden justify-around bg-emerald-950 py-2 border-t border-emerald-800 text-[11px] font-medium text-emerald-200">
          <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-white font-bold' : ''}>Home</button>
          <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'text-white font-bold' : ''}>About</button>
          <button onClick={() => setActiveTab('academics')} className={activeTab === 'academics' ? 'text-white font-bold' : ''}>Academics</button>
          <button onClick={() => setActiveTab('achievements')} className={activeTab === 'achievements' ? 'text-white font-bold' : ''}>Achievements</button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* HERO BANNER */}
        <section className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white py-12 md:py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="bg-emerald-700/50 text-emerald-200 text-[11px] px-3.5 py-1 rounded-full font-semibold border border-emerald-500/30">
              Grades 9–12 Boarding Excellence
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-snug">
              Nurturing Future Leaders & STEM Scholars
            </h2>
            <p className="text-xs md:text-sm text-emerald-100 max-w-xl mx-auto leading-relaxed">
              Official online portal for students, teachers, parents, and boarding residence staff at Dodola Ifa Boru Special Boarding School.
            </p>
            <div className="pt-2">
              <a
                href="/login"
                className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs md:text-sm px-6 py-3 rounded-xl shadow-lg transition inline-block"
              >
                Access Student & Staff Portal
              </a>
            </div>
          </div>
        </section>

        {/* TAB CONTENT SECTIONS */}
        <section className="max-w-5xl mx-auto p-4 md:p-8">
          {/* ABOUT SECTION */}
          {(activeTab === 'home' || activeTab === 'about') && (
            <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <h3 className="text-lg font-bold text-emerald-900 border-b pb-2">
                About Dodola Ifa Boru
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Dodola Ifa Boru Special Boarding School is dedicated to delivering high-caliber secondary education for Grades 9 through 12. Our institution combines academic rigor with structured boarding residence management to support holistic student growth.
              </p>
            </div>
          )}

          {/* ACADEMICS SECTION */}
          {(activeTab === 'home' || activeTab === 'academics') && (
            <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-bold text-emerald-900 border-b pb-2">
                Academic Curriculum & Streams
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 mb-1">Natural Sciences</h4>
                  <p className="text-gray-600">Advanced Physics, Chemistry, Biology, and Mathematics preparation.</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 mb-1">Social Sciences</h4>
                  <p className="text-gray-600">Comprehensive study of Economics, Geography, History, and Civics.</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 mb-1">Boarding Residence</h4>
                  <p className="text-gray-600">Structured residence care, meal plans, and digital exeat management.</p>
                </div>
              </div>
            </div>
          )}

          {/* ACHIEVEMENTS SECTION */}
          {(activeTab === 'home' || activeTab === 'achievements') && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <h3 className="text-lg font-bold text-emerald-900 border-b pb-2">
                School Achievements & Highlights
              </h3>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2">
                <li>High national examination pass rates across Grades 10 and 12.</li>
                <li>Fully integrated digital student ID, exeat pass, and gate security portal.</li>
                <li>Active STEM clubs, academic competitions, and community leadership programs.</li>
              </ul>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-[11px] text-center py-6 border-t border-gray-800">
        <p>Dodola Ifa Boru Special Boarding School &copy; 2026. All rights reserved.</p>
      </footer>
    </div>
  );
}
