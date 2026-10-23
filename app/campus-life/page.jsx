import React from 'react';

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between">
      {/* Header Bar */}
      <header className="bg-emerald-950 text-white p-4 shadow-md flex justify-between items-center">
        <a href="/" className="font-bold text-xs sm:text-sm text-emerald-400">← Back to Portal Home</a>
        <a href="/login" className="text-xs bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg font-bold">Portal Login</a>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-6 w-full flex-grow">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Student Life & Boarding
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">Life at Dodola Ifa Boru</h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
              Our residential campus offers a safe, disciplined, and nurturing environment where students live, study, and grow together as a community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-2">
              <div className="text-emerald-700 font-extrabold text-base flex items-center gap-2">
                🏠 Dormitory Facilities
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured residence halls with dedicated block wardens, study halls, and 24/7 security oversight to ensure student wellbeing.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-2">
              <div className="text-emerald-700 font-extrabold text-base flex items-center gap-2">
                🍲 Dining & Nutrition
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Balanced meal plans served in our central cafeteria, tailored to support healthy, active growing minds.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-2">
              <div className="text-emerald-700 font-extrabold text-base flex items-center gap-2">
                ⚽ Sports & Recreation
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Outdoor fields and sports facilities for football, volleyball, athletics, and physical fitness during recreational hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-2">
              <div className="text-emerald-700 font-extrabold text-base flex items-center gap-2">
                🧪 Clubs & STEM Activities
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active science clubs, robotics groups, debating societies, and peer mentoring sessions held outside standard class hours.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        Dodola Ifa Boru Special Boarding School &copy; 2026
      </footer>
    </div>
  );
}
