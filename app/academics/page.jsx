import React from 'react';
import Navbar from '../../components/Navbar';

export default function AcademicsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl w-full bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
          <div>
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Academic Excellence
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Curriculum & Streams</h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
              Our specialized academic framework prepares students for top university entrances and national examinations through intensive coursework in both Natural and Social Sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-950/60 space-y-2">
              <h3 className="font-bold text-emerald-400 text-sm mb-1">Natural Sciences Stream</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Advanced Mathematics, Physics, Chemistry, Biology, Computer Science, and Technical Drawing.</p>
            </div>
            <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-950/60 space-y-2">
              <h3 className="font-bold text-teal-400 text-sm mb-1">Social Sciences Stream</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Economics, Geography, History, English Literature, and Civics.</p>
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
