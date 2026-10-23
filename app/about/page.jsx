import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <header className="bg-emerald-950 text-white p-4 shadow-md flex justify-between items-center">
        <a href="/" className="font-bold text-sm text-emerald-400">← Dodola Ifa Boru Portal Home</a>
        <a href="/login" className="text-xs bg-emerald-600 px-3 py-1.5 rounded-lg font-bold">Login</a>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
            About Our Institution
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">Dodola Ifa Boru Special Boarding School</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Dodola Ifa Boru is a high-performing special boarding school designed to foster academic excellence, character, and innovation for students in Grades 9 through 12. 
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">Grades 9–12</div>
              <div className="text-xs text-emerald-700 font-semibold mt-1">Special Boarding Curriculum</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">100% Boarding</div>
              <div className="text-xs text-emerald-700 font-semibold mt-1">Full Residential Facilities</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">Smart Campus</div>
              <div className="text-xs text-emerald-700 font-semibold mt-1">QR ID & Digital Management</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
