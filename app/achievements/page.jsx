import React from 'react';
import Navbar from '../../components/Navbar';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6 space-y-6 w-full flex-grow">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Honors & Achievements
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Recognitions & Benchmarks</h1>
          
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pt-2">
            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border">
              <span className="text-emerald-600 font-bold text-lg">🏆</span>
              <div>
                <strong className="block text-slate-900 text-sm">National Matric Examination Distinction</strong>
                <span className="text-xs text-slate-500">Maintaining high pass and placement rates into top national university programs.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border">
              <span className="text-emerald-600 font-bold text-lg">🌐</span>
              <div>
                <strong className="block text-slate-900 text-sm">Smart Boarding Management Pioneer</strong>
                <span className="text-xs text-slate-500">Integrated automated QR digital ID cards and exeat workflows for seamless student governance.</span>
              </div>
            </li>
          </ul>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        Dodola Ifa Boru Special Boarding School &copy; 2026
      </footer>
    </div>
  );
}
