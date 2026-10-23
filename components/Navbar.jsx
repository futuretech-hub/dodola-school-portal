'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Achievements', href: '/achievements' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-emerald-950/95 backdrop-blur-md border-b border-emerald-800/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Non-Clickable Official School Logo & Name */}
        <div className="flex items-center space-x-3 select-none">
          <img 
            src="/school-logo.png" 
            alt="Ifa Boru Logo" 
            className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/50 shadow-md flex-shrink-0" 
          />
          <div>
            <h1 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-snug">
              Ifa Boru Boarding
            </h1>
            <p className="text-[10px] text-emerald-300 font-medium tracking-wide uppercase">
              Dodola Secondary School
            </p>
          </div>
        </div>

        {/* Navigation Links with Active Underline State */}
        <nav className="flex items-center space-x-1 sm:space-x-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-sm font-semibold transition px-2 py-1.5 relative ${
                  isActive
                    ? 'text-sky-400 font-bold border-b-2 border-sky-400 pb-1'
                    : 'text-emerald-100 hover:text-emerald-300'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href="/login"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md transition ml-2"
          >
            Portal Login
          </a>
        </nav>
      </div>
    </header>
  );
}
