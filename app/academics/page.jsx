import React from 'react';
import Navbar from '../../components/Navbar';

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6 space-y-6 w-full flex-grow">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Academic Excellence
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Curriculum & Streams</h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our specialized academic framework prepares students for top university entrances and national examinations through intensive coursework in both Natural and Social Sciences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50">
              <h3 className="font-bold text-emerald-950 text-sm mb-1">Natural Sciences Stream</h3>
              <p className="text-xs text-slate-600">Advanced Mathematics, Physics, Chemistry, Biology, Computer Science, and Technical Drawing.</p>
            </div>
            <div className="p-5 rounded-2xl border border-teal-200 bg-teal-50/50">
              <h3 className="font-bold text-teal-950 text-sm mb-1">Social Sciences Stream</h3>
              <p className="text-xs text-slate-600">Economics, Geography, History, English Literature, and Civics.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        Dodola Ifa Boru Special Boarding School &copy; 2026
      </footer>
    </div>
  );
}
