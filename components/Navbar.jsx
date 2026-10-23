'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // All navigation items including Login
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Campus', href: '/campus-life' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Login', href: '/login', isLogin: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-emerald-950/95 backdrop-blur-md border-b border-emerald-800/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Non-Clickable Official School Logo & Name */}
        <div className="flex items-center space-x-3 select-none">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-emerald-500/60 shadow-md flex-shrink-0 bg-emerald-900 flex items-center justify-center">
            <img 
              src="/school-logo.png" 
              alt="Ifa Boru Emblem" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-snug">
              Ifa Boru Boarding
            </h1>
            <p className="text-[9px] sm:text-[10px] text-emerald-300 font-medium tracking-wide uppercase">
              Dodola Secondary School
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.isLogin) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm px-5 py-2 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 ml-2"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition py-1 relative ${
                  isActive
                    ? 'text-sky-400 font-bold border-b-2 border-sky-400 pb-1'
                    : 'text-emerald-100 hover:text-emerald-300'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-emerald-900/60 text-emerald-200 hover:text-white focus:outline-none border border-emerald-700/50 shadow-md"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-emerald-950/98 backdrop-blur-xl border-b border-emerald-800/60 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.isLogin) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-center mt-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-sm py-3 rounded-xl shadow-lg"
                >
                  {link.name} →
                </a>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  isActive
                    ? 'bg-emerald-900/80 text-sky-400 font-bold border-l-4 border-sky-400'
                    : 'text-emerald-100 hover:bg-emerald-900/40 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
