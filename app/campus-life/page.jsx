import React from 'react';
import Navbar from '../../components/Navbar';

export default function CampusLifePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl w-full bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
          <div>
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Student Life & Boarding
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Life at Dodola Ifa Boru</h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
              Our residential campus offers a safe, disciplined, and nurturing environment where students live, study, and grow together as a community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-slate-950/60 space-y-2">
              <div className="text-emerald-400 font-extrabold text-base flex items-center gap-2">
                🏠 Dormitory Facilities
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structured residence halls with dedicated block wardens, study halls, and 24/7 security oversight to ensure student wellbeing.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-slate-950/60 space-y-2">
              <div className="text-emerald-400 font-extrabold text-base flex items-center gap-2">
                🍲 Dining & Nutrition
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Balanced meal plans served in our central cafeteria, tailored to support healthy, active growing minds.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-slate-950/60 space-y-2">
              <div className="text-emerald-400 font-extrabold text-base flex items-center gap-2">
                ⚽ Sports & Recreation
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Outdoor fields and sports facilities for football, volleyball, athletics, and physical fitness during recreational hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-slate-950/60 space-y-2">
              <div className="text-emerald-400 font-extrabold text-base flex items-center gap-2">
                🧪 Clubs & STEM Activities
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active science clubs, robotics groups, debating societies, and peer mentoring sessions held outside standard class hours.
              </p>
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
