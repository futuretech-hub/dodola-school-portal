import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-white font-sans relative overflow-x-hidden">
      
      {/* Background Image & Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0 scale-105 transform transition-transform duration-1000"
        style={{ backgroundImage: `url('/campus-hero.jpg')` }}
      />
      <div className="fixed inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-emerald-950/60 z-10" />

      {/* Top Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main Content (Directly on Page without Container Box) */}
      <main className="relative z-20 max-w-5xl mx-auto text-center px-4 py-8 sm:py-12 my-auto space-y-6">
        
        {/* Top 8-Point Shiny Star with Lines Disappearing to Sides */}
        <div className="flex items-center justify-center space-x-3">
          <span className="h-px bg-gradient-to-r from-transparent via-amber-400/80 to-amber-400 w-20 sm:w-40"></span>
          
          <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 0L13.8 8.2L20.5 3.5L15.8 10.2L24 12L15.8 13.8L20.5 20.5L13.8 15.8L12 24L10.2 15.8L3.5 20.5L8.2 13.8L0 12L8.2 10.2L3.5 3.5L10.2 8.2L12 0Z" />
          </svg>

          <span className="h-px bg-gradient-to-l from-transparent via-amber-400/80 to-amber-400 w-20 sm:w-40"></span>
        </div>

        {/* Heading Section */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wide leading-tight text-white uppercase font-serif drop-shadow-lg">
            Welcome to Dodola Ifa Boru Special Boarding School
          </h1>
          
          {/* Sub-divider with Stars */}
          <div className="flex items-center justify-center space-x-3 pt-1">
            <span className="h-px bg-gradient-to-r from-transparent to-amber-400/60 w-12 sm:w-28"></span>
            <span className="text-amber-400 text-xs sm:text-sm">✦</span>
            <span className="text-amber-300 font-semibold text-[11px] sm:text-sm tracking-wider uppercase">
              The Official Center of the Fountain of Stars
            </span>
            <span className="text-amber-400 text-xs sm:text-sm">✦</span>
            <span className="h-px bg-gradient-to-l from-transparent to-amber-400/60 w-12 sm:w-28"></span>
          </div>

          <p className="text-xs sm:text-base md:text-lg text-amber-100/90 italic font-serif pt-1">
            Where Every Mind Shines and Every Future Begins
          </p>
        </div>

        {/* Small Diamond Accent */}
        <div className="flex items-center justify-center space-x-2 py-1">
          <span className="h-px bg-gradient-to-r from-transparent to-amber-400/70 w-10 sm:w-16"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]"></span>
          <span className="h-px bg-gradient-to-l from-transparent to-amber-400/70 w-10 sm:w-16"></span>
        </div>

        {/* Core School Statement Paragraph */}
        <p className="text-xs sm:text-sm md:text-base text-slate-100 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-md px-2">
          We believe every student possesses a unique light, exceptional talents, and the potential to achieve greatness. At Dodola Ifa Boru Special Boarding School, we provide a formal, supportive, and inspiring learning environment where students gain knowledge, develop character, discover their abilities, and prepare confidently for the future. Through academic excellence, creativity, discipline, and dedicated guidance, we cultivate a community of bright minds and strong values. Together, we prepare tomorrow&apos;s leaders, innovators, and achievers to make a meaningful difference in the world.
        </p>

        {/* Custom Ornamental Divider (Matching Reference Image) */}
        <div className="pt-4 flex items-center justify-center space-x-2 text-amber-400/80">
          <div className="h-px w-24 sm:w-44 bg-gradient-to-r from-transparent to-amber-400/60"></div>
          
          {/* Flourish Accent SVG */}
          <div className="flex items-center space-x-1">
            <svg className="w-8 h-3 text-amber-400" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 6 C10 0, 20 12, 40 6" />
            </svg>
            
            {/* 8-Point Star Centerpiece */}
            <svg className="w-5 h-5 text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L13.8 8.2L20.5 3.5L15.8 10.2L24 12L15.8 13.8L20.5 20.5L13.8 15.8L12 24L10.2 15.8L3.5 20.5L8.2 13.8L0 12L8.2 10.2L3.5 3.5L10.2 8.2L12 0Z" />
            </svg>

            <svg className="w-8 h-3 text-amber-400" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 6 C20 0, 30 12, 40 6" />
            </svg>
          </div>

          <div className="h-px w-24 sm:w-44 bg-gradient-to-l from-transparent to-amber-400/60"></div>
        </div>

      </main>

      {/* Bottom Section: 4 Feature Pillars & Footer */}
      <div className="relative z-20 w-full">
        
        {/* 4 Feature Pillars Bar */}
        <div className="max-w-6xl w-full mx-auto px-4 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 py-3 border-t border-amber-400/30 items-center">
            
            {/* Academic Excellence */}
            <div className="flex items-center justify-center md:justify-start gap-3 px-2 md:border-r border-amber-400/30">
              <span className="text-amber-400 text-xl sm:text-2xl shrink-0">★</span>
              <div>
                <h3 className="text-[11px] sm:text-xs font-bold text-amber-100 tracking-wider uppercase font-serif">
                  Academic Excellence
                </h3>
                <p className="text-[9px] sm:text-[10px] text-slate-300/90 leading-tight">
                  Rigorous. Inspiring. Future-Focused.
                </p>
              </div>
            </div>

            {/* Character & Values */}
            <div className="flex items-center justify-center md:justify-start gap-3 px-2 md:border-r border-amber-400/30">
              <span className="text-amber-400 text-xl sm:text-2xl shrink-0">🏛️</span>
              <div>
                <h3 className="text-[11px] sm:text-xs font-bold text-amber-100 tracking-wider uppercase font-serif">
                  Character &amp; Values
                </h3>
                <p className="text-[9px] sm:text-[10px] text-slate-300/90 leading-tight">
                  Integrity. Respect. Leadership.
                </p>
              </div>
            </div>

            {/* Personal Growth */}
            <div className="flex items-center justify-center md:justify-start gap-3 px-2 md:border-r border-amber-400/30">
              <span className="text-amber-400 text-xl sm:text-2xl shrink-0">🌱</span>
              <div>
                <h3 className="text-[11px] sm:text-xs font-bold text-amber-100 tracking-wider uppercase font-serif">
                  Personal Growth
                </h3>
                <p className="text-[9px] sm:text-[10px] text-slate-300/90 leading-tight">
                  Discover. Develop. Achieve.
                </p>
              </div>
            </div>

            {/* Global Impact */}
            <div className="flex items-center justify-center md:justify-start gap-3 px-2">
              <span className="text-amber-400 text-xl sm:text-2xl shrink-0">👥</span>
              <div>
                <h3 className="text-[11px] sm:text-xs font-bold text-amber-100 tracking-wider uppercase font-serif">
                  Global Impact
                </h3>
                <p className="text-[9px] sm:text-[10px] text-slate-300/90 leading-tight">
                  Prepared to Lead. Inspired to Serve.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-950/85 backdrop-blur-md border-t border-amber-400/30 py-4 px-4 text-center text-[11px] sm:text-xs text-slate-300">
          <p className="font-medium">
            &copy; 2026 Dodola Ifa Boru Special Boarding School &middot; All rights reserved
          </p>
        </footer>

      </div>
    </div>
  );
}
