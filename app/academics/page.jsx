import React from 'react';

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <header className="bg-emerald-950 text-white p-4 shadow-md flex justify-between items-center">
        <a href="/" className="font-bold text-sm text-emerald-400">← Dodola Ifa Boru Portal Home</a>
        <a href="/login" className="text-xs bg-emerald-600 px-3 py-1.5 rounded-lg font-bold">Login</a>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
            Academic Programs
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">Curriculum & Streams</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our curriculum equips Grade 9–12 students with top-tier STEM and Social Science foundation skills for national exams and university entry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50">
              <h3 className="font-bold text-emerald-900 text-base mb-1">Natural Sciences Stream</h3>
              <p className="text-xs text-slate-600">Physics, Chemistry, Biology, Advanced Mathematics, ICT, and Technical Drawing.</p>
            </div>
            <div className="p-5 rounded-2xl border border-teal-200 bg-teal-50/50">
              <h3 className="font-bold text-teal-900 text-base mb-1">Social Sciences Stream</h3>
              <p className="text-xs text-slate-600">Economics, Geography, History, English Literature, and Civics.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
