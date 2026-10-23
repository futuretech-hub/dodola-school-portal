import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      {/* Hero Section with Full-Width Campus Background & Gradient Overlay */}
      <section className="relative flex-grow flex items-center justify-center px-4 py-20 sm:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform transition-transform duration-1000"
          style={{ backgroundImage: `url('/campus-hero.jpg')` }}
        />
        
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-emerald-950/60 z-10" />

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-20">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
            Grade 9 – 12 STEM & Boarding Excellence
          </span>
          
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
            Empowering the Next Generation of Innovators & Leaders
          </h1>
          
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
            Welcome to the official portal of Dodola Ifa Boru Special Boarding School. Access real-time academic records, residence exeat tracking, and secure digital student IDs.
          </p>

          <div className="pt-4 flex flex-col items-center space-y-3">
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <a 
                href="/login" 
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl transition transform hover:-translate-y-0.5"
              >
                Access Student & Staff Portal →
              </a>
              <a 
                href="/about" 
                className="bg-slate-900/60 hover:bg-slate-900/80 text-white font-bold text-sm px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-md transition"
              >
                Explore Our Campus
              </a>
            </div>
            
            {/* Optional Subtitle Text */}
            <p className="text-xs text-emerald-300 font-medium tracking-wide pt-1">
              Real-time grades &bull; Exeat tracking &bull; Digital student IDs
            </p>
          </div>

          {/* Elevated Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 text-left">
            <div className="bg-slate-900/80 border border-white/15 p-5 rounded-2xl backdrop-blur-md shadow-xl hover:border-emerald-500/50 transition">
              <div className="text-emerald-400 text-lg font-bold mb-1">🎓 Academic Hub</div>
              <p className="text-xs text-slate-300">Gradebook access, continuous assessment tracking, and report cards.</p>
            </div>
            <div className="bg-slate-900/80 border border-white/15 p-5 rounded-2xl backdrop-blur-md shadow-xl hover:border-emerald-500/50 transition">
              <div className="text-emerald-400 text-lg font-bold mb-1">🏡 Residence & Exeats</div>
              <p className="text-xs text-slate-300">Automated leave requests, warden approvals, and residence logs.</p>
            </div>
            <div className="bg-slate-900/80 border border-white/15 p-5 rounded-2xl backdrop-blur-md shadow-xl hover:border-emerald-500/50 transition">
              <div className="text-emerald-400 text-lg font-bold mb-1">🛡️ Digital Gate Security</div>
              <p className="text-xs text-slate-300">QR-code encrypted student badges for instant gate verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-6 px-4 text-center text-xs text-slate-400 relative z-20">
        <div className="max-w-5xl mx-auto space-y-2">
          <p className="font-semibold text-slate-200">Dodola Ifa Boru Special Boarding School</p>
          <p className="text-slate-500">Official Student & Staff Portal &copy; 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
