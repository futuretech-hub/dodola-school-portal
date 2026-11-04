'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { supabase } from '../../lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // 1. Sign in with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setErrorMsg(authError.message);
      setLoading(false);
      return;
    }

    // 2. Fetch user role from public.profiles table
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', authData.user.id)
      .single();

    if (profileError || !profileData) {
      setErrorMsg('User profile not found. Please contact admin.');
      setLoading(false);
      return;
    }

    // 3. Redirect based on user role
    const userRole = profileData.role;
    if (userRole === 'admin') {
      window.location.href = '/dashboard/admin';
    } else if (userRole === 'teacher') {
      window.location.href = '/dashboard/teacher';
    } else if (userRole === 'student') {
      window.location.href = '/dashboard/student';
    } else if (userRole === 'parent') {
      window.location.href = '/dashboard/parent';
    } else {
      window.location.href = '/dashboard/student';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950">
        <div className="max-w-md w-full bg-slate-900/90 border border-emerald-500/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/40 rounded-2xl mx-auto flex items-center justify-center text-emerald-400 text-2xl font-black shadow-inner">
              🔒
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">Portal Access</h1>
            <p className="text-xs text-slate-400">
              Sign in to access your dashboard, grades, and exeat requests.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400 text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@dodolaschool.edu.et" 
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 mt-2 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In to Portal'}
            </button>
          </form>

          <div className="text-center pt-2">
            <a href="/" className="text-xs text-emerald-400 hover:underline">
              ← Return to Home Landing Page
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-slate-950/75 backdrop-blur-md border-t border-white/10 py-6 px-4 text-center text-xs text-slate-300">
        <p className="font-medium">
          &copy; 2026 Dodola Ifa Boru Special Boarding School &middot; All rights reserved
        </p>
      </footer>
    </div>
  );
}
