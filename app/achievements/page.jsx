import React from 'react';
import Navbar from '../../components/Navbar';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl w-full bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
          <div>
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Honors & Achievements
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Recognitions & Benchmarks</h1>
          </div>
          
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2">
            <li className="flex items-start gap-3 bg-slate-950/60 p-4 rounded-2xl border border-emerald-500/20">
              <span className="text-emerald-400 font-bold text-lg">🏆</span>
              <div>
                <strong className="block text-white text-sm">National Matric Examination Distinction</strong>
                <span className="text-xs text-slate-400">Maintaining high pass and placement rates into top national university programs.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 bg-slate-950/60 p-4 rounded-2xl border border-emerald-500/20">
              <span className="text-emerald-400 font-bold text-lg">🌐</span>
              <div>
                <strong className="block text-white text-sm">Smart Boarding Management Pioneer</strong>
                <span className="text-xs text-slate-400">Integrated automated QR digital ID cards and exeat workflows for seamless student governance.</span>
              </div>
            </li>
          </ul>
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
