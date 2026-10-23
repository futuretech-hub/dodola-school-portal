import React from 'react';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6 space-y-6 w-full flex-grow">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            About Our School
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Dodola Ifa Boru Special Boarding School</h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Dodola Ifa Boru is a premier special boarding institution focused on providing high-achieving Grade 9 to 12 students with advanced academic preparation, leadership skills, and residential discipline.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">Grades 9–12</div>
              <div className="text-xs text-slate-600 font-semibold mt-1">High School Program</div>
            </div>
            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">100% Boarding</div>
              <div className="text-xs text-slate-600 font-semibold mt-1">Full Campus Residence</div>
            </div>
            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">Smart Campus</div>
              <div className="text-xs text-slate-600 font-semibold mt-1">Digital IDs & Exeats</div>
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
