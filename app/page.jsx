import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 px-4 py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Grade 9 – 12 STEM & Boarding Excellence
          </span>
          
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Empowering the Next Generation of Innovators & Leaders
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Welcome to the official portal of Dodola Ifa Boru Special Boarding School. Access real-time academic records, residence exeat tracking, and secure digital student IDs.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/login" 
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl transition"
            >
              Access Student & Staff Portal →
            </a>
            <a 
              href="/about" 
              className="bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-8 py-4 rounded-2xl border border-white/20 transition"
            >
              Explore Our Campus
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 text-left">
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="text-emerald-400 text-lg font-bold mb-1">🎓 Academic Hub</div>
              <p className="text-xs text-slate-300">Gradebook access, continuous assessment tracking, and report cards.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="text-emerald-400 text-lg font-bold mb-1">🏡 Residence & Exeats</div>
              <p className="text-xs text-slate-300">Automated leave requests, warden approvals, and residence logs.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="text-emerald-400 text-lg font-bold mb-1">🛡️ Digital Gate Security</div>
              <p className="text-xs text-slate-300">QR-code encrypted student badges for instant gate verification.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-white/10 py-6 px-4 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto space-y-2">
          <p className="font-semibold text-slate-200">Dodola Ifa Boru Special Boarding School</p>
          <p className="text-slate-500">Official Student & Staff Portal &copy; 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
