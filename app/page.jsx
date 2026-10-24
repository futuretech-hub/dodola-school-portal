import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      {/* Hero / Landing Section with Full-Width Campus Background */}
      <section className="relative flex-grow flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform transition-transform duration-1000"
          style={{ backgroundImage: `url('/campus-hero.jpg')` }}
        />
        
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-emerald-950/70 z-10" />

        {/* Main Content Card Container with Gold Border */}
        <div className="max-w-5xl mx-auto text-center relative z-20 bg-slate-950/60 backdrop-blur-md border border-amber-400/40 p-6 sm:p-12 rounded-3xl shadow-2xl space-y-8">
          
          {/* Top Star Accent */}
          <div className="flex justify-center -mb-4">
            <span className="text-amber-400 text-2xl">✦</span>
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
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            We believe every student possesses a unique light, exceptional talents, and the potential to achieve greatness. At Dodola Ifa Boru Special Boarding School, we provide a formal, supportive, and inspiring learning environment where students gain knowledge, develop character, discover their abilities, and prepare confidently for the future. Through academic excellence, creativity, discipline, and dedicated guidance, we cultivate a community of bright minds and strong values. Together, we prepare tomorrow&apos;s leaders, innovators, and achievers to make a meaningful difference in the world.
          </p>

          {/* Portal Access Button */}
          <div className="pt-2">
            <a 
              href="/login" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-sm px-8 py-3.5 rounded-2xl shadow-xl transition transform hover:-translate-y-0.5"
            >
              <span>🔒</span> Access Portal Login →
            </a>
          </div>

          {/* 4 Feature Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-6 border-t border-amber-400/20 text-left">
            <div className="bg-slate-900/80 border border-amber-400/20 p-4 rounded-2xl backdrop-blur-sm space-y-1">
              <div className="text-amber-400 text-base font-bold flex items-center gap-2">
                <span>★</span> Academic Excellence
              </div>
              <p className="text-[11px] text-slate-300">Rigorous. Inspiring. Future-Focused.</p>
            </div>

            <div className="bg-slate-900/80 border border-amber-400/20 p-4 rounded-2xl backdrop-blur-sm space-y-1">
              <div className="text-amber-400 text-base font-bold flex items-center gap-2">
                <span>🏛️</span> Character & Values
              </div>
              <p className="text-[11px] text-slate-300">Integrity. Respect. Leadership.</p>
            </div>

            <div className="bg-slate-900/80 border border-amber-400/20 p-4 rounded-2xl backdrop-blur-sm space-y-1">
              <div className="text-amber-400 text-base font-bold flex items-center gap-2">
                <span>🌱</span> Personal Growth
              </div>
              <p className="text-[11px] text-slate-300">Discover. Develop. Achieve.</p>
            </div>

            <div className="bg-slate-900/80 border border-amber-400/20 p-4 rounded-2xl backdrop-blur-sm space-y-1">
              <div className="text-amber-400 text-base font-bold flex items-center gap-2">
                <span>👥</span> Global Impact
              </div>
              <p className="text-[11px] text-slate-300">Prepared to Lead. Inspired to Serve.</p>
            </div>
          </div>

          {/* Bottom Merged Line with Center Star */}
          <div className="pt-6 flex items-center justify-center space-x-3">
            <span className="h-px bg-gradient-to-r from-transparent to-amber-400 w-24 sm:w-48"></span>
            <span className="text-amber-400 text-xs">✦</span>
            <span className="text-amber-300 font-serif italic text-xs sm:text-sm tracking-widest">
              Shine. Serve. Succeed.
            </span>
            <span className="text-amber-400 text-xs">✦</span>
            <span className="h-px bg-gradient-to-l from-transparent to-amber-400 w-24 sm:w-48"></span>
          </div>

        </div>
      </section>

      {/* Footer (Copyright Only, No Privacy/Terms) */}
      <footer className="bg-slate-950/75 backdrop-blur-md border-t border-white/10 py-6 px-4 text-center text-xs text-slate-300 relative z-20">
        <p className="font-medium">
          &copy; 2026 Dodola Ifa Boru Special Boarding School &middot; All rights reserved
        </p>
      </footer>
    </div>
  );
}
