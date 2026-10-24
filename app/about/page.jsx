import React from 'react';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl w-full bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
          <div>
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              About Our School
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Dodola Ifa Boru Special Boarding School</h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
              Dodola Ifa Boru is a premier special boarding institution focused on providing high-achieving Grade 9 to 12 students with advanced academic preparation, leadership skills, and residential discipline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-950/60 border border-emerald-500/20 p-5 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">Grades 9–12</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">High School Program</div>
            </div>
            <div className="bg-slate-950/60 border border-emerald-500/20 p-5 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">100% Boarding</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Full Campus Residence</div>
            </div>
            <div className="bg-slate-950/60 border border-emerald-500/20 p-5 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">Smart Campus</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Digital IDs & Exeats</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-950/75 backdrop-blur-md border-t border-white/10 py-6 px-4 text-center text-xs text-slate-300 flex flex-col items-center space-y-1">
        <p className="font-medium">
          &copy; 2026 Dodola Ifa Boru Special Boarding School &middot; All rights reserved
        </p>
        <p className="text-[11px] text-slate-400 space-x-2">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition">Terms of Use</a>
        </p>
      </footer>
    </div>
  );
}
