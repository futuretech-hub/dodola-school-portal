'use client';

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      let targetEmail = identifier.trim();

      if (!targetEmail.includes('@')) {
        const { data: userLookup, error: lookupErr } = await supabase
          .rpc('get_user_email_by_identifier', { identifier_input: targetEmail });

        if (lookupErr || !userLookup || userLookup.length === 0) {
          throw new Error('Student ID not found. Please check your ID code.');
        }

        targetEmail = userLookup[0].email;
      }

      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: targetEmail,
        password: password,
      });

      if (authError) throw authError;

      const userId = authData.user.id;
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();

      const userRole = profile?.role || 'student';

      if (userRole === 'student') {
        window.location.href = '/dashboard/student';
      } else if (userRole === 'teacher') {
        window.location.href = '/dashboard/teacher';
      } else if (userRole === 'warden') {
        window.location.href = '/dashboard/warden';
      } else if (userRole === 'security_guard') {
        window.location.href = '/dashboard/security';
      } else {
        window.location.href = '/dashboard/admin';
      }

    } catch (err) {
      setErrorMsg(err.message || 'Login failed. Check your ID/Password.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-emerald-800">
            Dodola Ifa Boru
          </h1>
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mt-1">
            Special Boarding School Portal
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Student ID / Email
            </label>
            <input
              type="text"
              required
              placeholder="e.g. DIB-2026-0901"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-800 transition disabled:opacity-50 text-sm"
          >
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          Grade 9–12 Boarding Management System
        </div>
      </div>
    </div>
  );
}
