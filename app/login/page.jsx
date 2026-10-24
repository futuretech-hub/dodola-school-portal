import React from 'react';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      {/* Login Form Section */}
      <main className="flex-grow flex items-center justify-center p-4 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950">
        <div className="max-w-md w-full bg-slate-900/90 border border-emerald-500/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/40 rounded-2xl mx-auto flex items-center justify-center text-emerald-400 text-2xl font-black shadow-inner">
              🔒
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">Portal Access</h1>
            <p className="text-xs text-slate-400">
              Sign in to access your grades, exeat requests, and digital ID.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Student ID / Staff Email</label>
              <input 
                type="text" 
                placeholder="e.g. DIB/1042/26" 
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 mt-2"
            >
              Sign In to Portal
            </button>
          </form>

          <div className="text-center pt-2">
            <a href="/" className="text-xs text-emerald-400 hover:underline">
              ← Return to Home Landing Page
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950/75 backdrop-blur-md border-t border-white/10 py-6 px-4 text-center text-xs text-slate-300 flex flex-col items-center space-y-1">
        <p className="font-medium">
          &copy; 2026 Dodola Ifa Boru Special Boarding School &middot; All rights reserved
        </p>
        <p className="text-[11px] text-slate-400 space-x-2">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition">Terms of Use</a>
        </p>
      </footer>
    </div>
  );
}
