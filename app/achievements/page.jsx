import React from 'react';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <header className="bg-emerald-950 text-white p-4 shadow-md flex justify-between items-center">
        <a href="/" className="font-bold text-sm text-emerald-400">← Dodola Ifa Boru Portal Home</a>
        <a href="/login" className="text-xs bg-emerald-600 px-3 py-1.5 rounded-lg font-bold">Login</a>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
            School Excellence
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">Achievements & Honors</h1>
          
          <ul className="space-y-3 text-sm text-slate-700 pt-2">
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border">
              <span className="text-emerald-600 font-bold text-lg">🏆</span>
              <div>
                <strong className="block text-slate-900">Grade 12 National Matric Exam Distinction</strong>
                <span className="text-xs text-slate-500">Consistently ranking in the top tier of regional matric exam pass rates.</span>
              </div>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border">
              <span className="text-emerald-600 font-bold text-lg">🚀</span>
              <div>
                <strong className="block text-slate-900">Digital Smart Campus Pioneer</strong>
                <span className="text-xs text-slate-500">First in the region to deploy automated QR exeat tracking and student digital IDs.</span>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
