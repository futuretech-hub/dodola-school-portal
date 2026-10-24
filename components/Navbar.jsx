'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Portal', href: '/login', isLogin: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-emerald-950/95 backdrop-blur-md border-b border-emerald-800/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Logo & School Name */}
        <div className="flex items-center space-x-3 select-none shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/60 shadow-md flex-shrink-0 bg-emerald-900 flex items-center justify-center">
            <img 
              src="/school-logo.png" 
              alt="Ifa Boru Emblem" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <div>
            <h1 className="text-sm sm:text-base lg:text-lg font-black text-white tracking-tight leading-snug">
              Dodola Ifa Boru
            </h1>
            <p className="text-[9px] sm:text-[10px] text-emerald-300 font-semibold tracking-wider uppercase">
              Boarding Secondary School
            </p>
          </div>
        </div>

        {/* Desktop & Tablet Navigation Links with Balanced Responsive Spacing */}
        <nav className="hidden md:flex items-center justify-end flex-grow max-w-2xl space-x-7 lg:space-x-11 xl:space-x-11">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.isLogin) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs lg:text-sm font-semibold transition py-1 relative whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'text-sky-400 font-bold border-b-2 border-sky-400 pb-1'
                      : 'text-emerald-100 hover:text-emerald-300'
                  }`}
                >
                  {/* Lock Icon */}
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {link.name}
                </a>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs lg:text-sm font-semibold transition py-1 relative whitespace-nowrap ${
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
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'bg-emerald-900/80 text-sky-400 font-bold border-l-4 border-sky-400'
                      : 'text-emerald-100 hover:bg-emerald-900/40 hover:text-white'
                  }`}
                >
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {link.name}
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
