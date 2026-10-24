import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      {/* Hero / Landing Section with Campus Background */}
      <section className="relative flex-grow flex flex-col items-center justify-center px-4 py-12 sm:py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform transition-transform duration-1000"
          style={{ backgroundImage: `url('/campus-hero.jpg')` }}
        />
        
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-emerald-950/60 z-10" />

        {/* Main Transparent Content Container */}
        <div className="max-w-5xl w-full mx-auto text-center relative z-20 bg-slate-950/35 backdrop-blur-sm border border-amber-400/30 p-6 sm:p-12 rounded-3xl shadow-2xl space-y-8">
          
          {/* Top 8-Point Shiny Star with Lines Disappearing to Sides */}
          <div className="flex items-center justify-center space-x-3 -mt-2">
            <span className="h-px bg-gradient-to-r from-transparent via-amber-400/80 to-amber-400 w-24 sm:w-48"></span>
            
            {/* 8-Point Shiny Star SVG (4 large tips, 4 small tips) */}
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0L13.8 8.2L20.5 3.5L15.8 10.2L24 12L15.8 13.8L20.5 20.5L13.8 15.8L12 24L10.2 15.8L3.5 20.5L8.2 13.8L0 12L8.2 10.2L3.5 3.5L10.2 8.2L12 0Z" />
            </svg>

            <span className="h-px bg-gradient-to-l from-transparent via-amber-400/80 to-amber-400 w-24 sm:w-48"></span>
          </div>

          {/* Heading Section */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-5xl font-black tracking-wide leading-tight text-white uppercase font-serif drop-shadow-md">
              Welcome to Dodola Ifa Boru Special Boarding School
            </h1>
            
            {/* Sub-divider with Stars */}
            <div className="flex items-center justify-center space-x-4 pt-2">
              <span className="h-px bg-gradient-to-r from-transparent to-amber-400/60 w-16 sm:w-32"></span>
              <span className="text-amber-400 text-sm">✦</span>
              <span className="text-amber-300 font-semibold text-xs sm:text-sm tracking-wider uppercase">
                The Official Center of the Fountain of Stars
              </span>
              <span className="text-amber-400 text-sm">✦</span>
              <span className="h-px bg-gradient-to-l from-transparent to-amber-400/60 w-16 sm:w-32"></span>
            </div>

            <p className="text-sm sm:text-lg text-amber-100/90 italic font-serif pt-1">
              Where Every Mind Shines and Every Future Begins
            </p>
          </div>

          {/* Core School Statement Paragraph */}
          <p className="text-xs sm:text-sm text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-sm">
            We believe every student possesses a unique light, exceptional talents, and the potential to achieve greatness. At Dodola Ifa Boru Special Boarding School, we provide a formal, supportive, and inspiring learning environment where students gain knowledge, develop character, discover their abilities, and prepare confidently for the future. Through academic excellence, creativity, discipline, and dedicated guidance, we cultivate a community of bright minds and strong values. Together, we prepare tomorrow&apos;s leaders, innovators, and achievers to make a meaningful difference in the world.
          </p>

          {/* Bottom Merged Line with Center Star */}
          <div className="pt-4 flex items-center justify-center space-x-3">
            <span className="h-px bg-gradient-to-r from-transparent to-amber-400 w-24 sm:w-48"></span>
            <span className="text-amber-400 text-xs">✦</span>
            <span className="text-amber-300 font-serif italic text-xs sm:text-sm tracking-widest">
              Shine. Serve. Succeed.
            </span>
            <span className="text-amber-400 text-xs">✦</span>
            <span className="h-px bg-gradient-to-l from-transparent to-amber-400 w-24 sm:w-48"></span>
          </div>

        </div>

        {/* Separated Feature Pillars Below Container */}
        <div className="max-w-5xl w-full mx-auto relative z-20 mt-8 grid grid-cols-1 sm:grid-cols-4 gap-4 text-left">
          <div className="bg-slate-950/40 border border-amber-400/25 p-4 rounded-2xl backdrop-blur-md space-y-1 hover:border-amber-400/50 transition">
            <div className="text-amber-400 text-sm font-bold flex items-center gap-2">
              <span>★</span> Academic Excellence
            </div>
            <p className="text-[11px] text-slate-300">Rigorous. Inspiring. Future-Focused.</p>
          </div>

          <div className="bg-slate-950/40 border border-amber-400/25 p-4 rounded-2xl backdrop-blur-md space-y-1 hover:border-amber-400/50 transition">
            <div className="text-amber-400 text-sm font-bold flex items-center gap-2">
              <span>🏛️</span> Character & Values
            </div>
            <p className="text-[11px] text-slate-300">Integrity. Respect. Leadership.</p>
          </div>

          <div className="bg-slate-950/40 border border-amber-400/25 p-4 rounded-2xl backdrop-blur-md space-y-1 hover:border-amber-400/50 transition">
            <div className="text-amber-400 text-sm font-bold flex items-center gap-2">
              <span>🌱</span> Personal Growth
            </div>
            <p className="text-[11px] text-slate-300">Discover. Develop. Achieve.</p>
          </div>

          <div className="bg-slate-950/40 border border-amber-400/25 p-4 rounded-2xl backdrop-blur-md space-y-1 hover:border-amber-400/50 transition">
            <div className="text-amber-400 text-sm font-bold flex items-center gap-2">
              <span>👥</span> Global Impact
            </div>
            <p className="text-[11px] text-slate-300">Prepared to Lead. Inspired to Serve.</p>
          </div>
        </div>
      </section>

      {/* Footer (Copyright Only) */}
      <footer className="bg-slate-950/75 backdrop-blur-md border-t border-white/10 py-6 px-4 text-center text-xs text-slate-300 relative z-20">
        <p className="font-medium">
          &copy; 2026 Dodola Ifa Boru Special Boarding School &middot; All rights reserved
        </p>
      </footer>
    </div>
  );
}
