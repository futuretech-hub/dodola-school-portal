import React from 'react';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-white font-sans relative overflow-x-hidden">
      
      {/* Top Shared Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-between">
        
        {/* 1. HERO BANNER SECTION (Clear Red-Roof Building Image) */}
        <section className="relative py-16 sm:py-24 px-4 text-center overflow-hidden border-b border-amber-400/30">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform transition-transform duration-1000"
            style={{ backgroundImage: `url('/about-hero.jpg')` }}
          />
          {/* Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-emerald-950/30 z-10" />

          {/* Hero Text Content */}
          <div className="relative z-20 max-w-5xl mx-auto space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wide leading-tight text-white uppercase font-serif drop-shadow-lg">
              Dodola Ifa Boru Special Boarding School
            </h1>

            <div className="flex items-center justify-center space-x-3 pt-1">
              <span className="h-px bg-gradient-to-r from-transparent to-amber-400/60 w-12 sm:w-28"></span>
              <span className="text-amber-400 text-xs sm:text-sm">✦</span>
              <span className="text-amber-300 font-semibold text-[11px] sm:text-sm tracking-wider uppercase">
                The Center of the Fountain of Stars
              </span>
              <span className="text-amber-400 text-xs sm:text-sm">✦</span>
              <span className="h-px bg-gradient-to-l from-transparent to-amber-400/60 w-12 sm:w-28"></span>
            </div>

            <p className="text-xs sm:text-base md:text-lg text-amber-100/90 italic font-serif">
              Nurturing Exceptional Scholars, Building Resilient Leaders, and Inspiring Futures.
            </p>
          </div>
        </section>

        {/* 2. LOWER BODY SECTION (Unified Paragraph Narrative + Classroom Image) */}
        <section className="relative z-20 bg-gradient-to-b from-slate-950 via-emerald-950/80 to-slate-950 py-12 px-4 flex-grow">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Story, Mission & Vision Narrative Paragraphs */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-300 font-serif tracking-wide">
                  Our Story, Mission &amp; Vision
                </h2>
                
                <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal drop-shadow-md">
                  Dodola Ifa Boru Special Boarding School was established to provide an exceptional residential learning experience for high-achieving Grade 9 to 12 students. By merging rigorous academic preparation with a structured boarding environment, we cultivate discipline, curiosity, and mutual respect among scholars from diverse backgrounds.
                </p>

                <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal drop-shadow-md">
                  Our mission is to deliver high-caliber, holistic secondary education that empowers talented youth through academic mastery, technological literacy, personal responsibility, and leadership development.
                </p>

                <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal drop-shadow-md">
                  Looking ahead, our vision is to stand as a premier educational beacon in Ethiopia and beyond, producing ethical, innovative leaders capable of solving complex global challenges.
                </p>
              </div>

              {/* Classroom Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl group">
                <img 
                  src="/about-classroom.jpg" 
                  alt="Classroom learning at Dodola Ifa Boru" 
                  className="w-full h-60 sm:h-80 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

            </div>

          </div>
        </section>
      </main>

      {/* 3. BOTTOM SECTION: 4 FEATURE PILLARS & FOOTER */}
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
