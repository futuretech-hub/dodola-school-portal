'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import PublicFooter from '../../components/PublicFooter';
import Icon from '../../components/Icon';
import { isSupabaseConfigured, supabase } from '../../lib/supabaseClient';

const roleRoutes = { super_admin: '/dashboard/admin', admin: '/dashboard/admin', teacher: '/dashboard/teacher', warden: '/dashboard/warden', security_guard: '/dashboard/security', student: '/dashboard/student', parent: '/dashboard/parent', cafeteria_staff: '/dashboard/cafeteria' };

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleLogin(event) {
    event.preventDefault(); setErrorMsg('');
    if (!isSupabaseConfigured || !supabase) { setErrorMsg('Supabase is not configured yet. Use the preview link below or add the project environment variables.'); return; }
    setLoading(true);
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) { setErrorMsg(authError.message); setLoading(false); return; }
    const { data: profileData, error: profileError } = await supabase.from('profiles').select('role').eq('id', authData.user.id).maybeSingle();
    if (profileError) { setErrorMsg(`Database error: ${profileError.message}`); setLoading(false); return; }
    if (!profileData?.role) { setErrorMsg('User profile not found. Ask an administrator to create a profile for this account.'); setLoading(false); return; }
    router.push(roleRoutes[profileData.role] || '/dashboard/student');
  }

  return <div className="min-h-screen bg-slate-50"><Navbar /><main className="mx-auto flex max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8"><div className="grid w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[.9fr_1.1fr]"><div className="hidden bg-emerald-950 p-10 text-white lg:block"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-amber-300"><Icon name="lock" size={22} /></span><p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Dodola school portal</p><h1 className="public-serif mt-4 text-4xl leading-tight">The school day, connected.</h1><p className="mt-5 text-sm leading-6 text-emerald-100">Students, families, teachers, wardens, and staff each have a clear place to see what matters and do the next thing.</p><div className="mt-10 space-y-4 text-sm text-emerald-100"><div className="flex items-center gap-3"><Icon name="check" size={17} className="text-amber-300" />Grades and attendance</div><div className="flex items-center gap-3"><Icon name="check" size={17} className="text-amber-300" />Boarding leave and gate checks</div><div className="flex items-center gap-3"><Icon name="check" size={17} className="text-amber-300" />School notices and events</div></div></div><div className="p-6 sm:p-10"><div className="mx-auto max-w-md"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Secure access</p><h2 className="mt-3 text-2xl font-black text-slate-950">Sign in to your portal</h2><p className="mt-2 text-sm leading-6 text-slate-500">Use the email and password created by your school administrator.</p>{errorMsg&&<div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold leading-5 text-red-700">{errorMsg}</div>}<form onSubmit={handleLogin} className="mt-6 space-y-4"><label className="block"><span className="mb-1.5 block text-xs font-bold text-slate-700">Email address</span><input type="email" required value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="student@dodolaschool.edu.et" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400" /></label><label className="block"><span className="mb-1.5 block text-xs font-bold text-slate-700">Password</span><input type="password" required value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter your password" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400" /></label><button type="submit" disabled={loading} className="w-full rounded-xl bg-emerald-700 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-800 disabled:opacity-50">{loading ? 'Signing in…' : 'Sign in to portal'}</button></form><div className="mt-6 border-t border-slate-100 pt-5 text-center"><Link href="/dashboard/student" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900">Preview student portal <Icon name="arrow" size={14} /></Link><p className="mt-3 text-[11px] text-slate-400">Preview uses sample data and does not create a real account.</p></div></div></div></div></main><PublicFooter /></div>;
}
