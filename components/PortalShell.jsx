'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon from './Icon';
import { roleLabels, student } from '../lib/demoData';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const common = {
  student: [
    ['Overview', '/dashboard/student', 'home'], ['Timetable', '/dashboard/student/timetable', 'calendar'], ['Subjects', '/dashboard/student/subjects', 'book'], ['Assignments', '/dashboard/student/assignments', 'clipboard'], ['Grades', '/dashboard/student/grades', 'chart'], ['Attendance', '/dashboard/student/attendance', 'check'], ['Announcements', '/dashboard/student/announcements', 'megaphone'], ['Leave & passes', '/dashboard/student/leave', 'door'], ['Messages', '/dashboard/student/messages', 'message'], ['School events', '/dashboard/student/events', 'building'], ['My profile', '/dashboard/student/profile', 'user'], ['Settings', '/dashboard/student/settings', 'settings'],
  ],
  teacher: [
    ['Overview', '/dashboard/teacher', 'home'], ['Class roster', '/dashboard/teacher/roster', 'users'], ['Gradebook', '/dashboard/teacher/gradebook', 'chart'], ['Attendance', '/dashboard/teacher/attendance', 'check'], ['Assignments', '/dashboard/teacher/assignments', 'clipboard'], ['Announcements', '/dashboard/teacher/announcements', 'megaphone'],
  ],
  admin: [
    ['Overview', '/dashboard/admin', 'home'], ['Students', '/dashboard/admin/students', 'users'], ['Staff & roles', '/dashboard/admin/staff', 'shield'], ['Academic year', '/dashboard/admin/academic-year', 'calendar'], ['Reports', '/dashboard/admin/reports', 'chart'],
  ],
  parent: [
    ['Overview', '/dashboard/parent', 'home'], ['Student progress', '/dashboard/parent/progress', 'chart'], ['Leave & messages', '/dashboard/parent/leave', 'door'], ['School events', '/dashboard/parent/events', 'building'], ['My profile', '/dashboard/parent/profile', 'user'],
  ],
  warden: [
    ['Overview', '/dashboard/warden', 'home'], ['Leave requests', '/dashboard/warden', 'door'], ['Dormitory roll call', '/dashboard/warden/roll-call', 'check'], ['Dormitory overview', '/dashboard/warden/dorms', 'building'],
  ],
  security_guard: [
    ['Overview', '/dashboard/security', 'home'], ['Gate scanner', '/dashboard/security/scanner', 'scan'], ['Gate log', '/dashboard/security/log', 'file'],
  ],
  cafeteria_staff: [
    ['Overview', '/dashboard/cafeteria', 'home'], ['Meal service', '/dashboard/cafeteria/meals', 'utensils'], ['Meal log', '/dashboard/cafeteria/log', 'file'],
  ],
};

const roleKey = (role) => role === 'super_admin' || role === 'admin' ? 'admin' : role;

const roleRoutes = { admin: '/dashboard/admin', teacher: '/dashboard/teacher', parent: '/dashboard/parent', warden: '/dashboard/warden', security_guard: '/dashboard/security', cafeteria_staff: '/dashboard/cafeteria', student: '/dashboard/student' };

const roleIdentity = {
  student: { name: student.name, detail: student.grade },
  teacher: { name: 'Teaching staff', detail: 'Academic team' },
  admin: { name: 'School administration', detail: 'Dodola campus' },
  parent: { name: 'Family account', detail: 'Samuel Alemu · Grade 11' },
  warden: { name: 'Boarding team', detail: 'Residence operations' },
  security_guard: { name: 'Gate team', detail: 'Campus safety' },
  cafeteria_staff: { name: 'Cafeteria team', detail: 'Meal operations' },
};

export default function PortalShell({ role = 'student', title, eyebrow, children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authState, setAuthState] = useState('loading');
  const [account, setAccount] = useState(null);
  const key = roleKey(role);
  const nav = common[key] || common.student;
  const displayRole = roleLabels[role] || roleLabels.student;
  const identity = account ? { name: account.full_name, detail: account.role === 'student' ? student.grade : (roleLabels[account.role] || 'Dodola campus') } : (roleIdentity[key] || roleIdentity.student);
  const isActive = (href) => pathname === href || (href !== `/dashboard/${key}` && pathname.startsWith(`${href}/`));

  useEffect(() => {
    let active = true;
    async function protectRoute() {
      if (!isSupabaseConfigured || !supabase) { if (active) setAuthState('configuration'); return; }
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.replace('/login'); return; }
      const { data: profile, error } = await supabase.from('profiles').select('full_name, role').eq('id', user.id).maybeSingle();
      if (error || !profile?.role) { if (active) setAuthState('profile'); return; }
      const actualKey = roleKey(profile.role);
      if (actualKey !== key) { router.replace(roleRoutes[actualKey] || '/login'); return; }
      if (active) { setAccount(profile); setAuthState('ready'); }
    }
    protectRoute();
    return () => { active = false; };
  }, [key, router]);

  async function signOut() {
    if (supabase) await supabase.auth.signOut();
    router.push('/login');
  }

  if (authState !== 'ready') {
    const message = authState === 'configuration' ? 'This portal deployment is not connected to Supabase yet.' : authState === 'profile' ? 'Your account does not have a valid school profile. Contact the administrator.' : 'Checking your secure school account…';
    return <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white"><div className="max-w-md"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700"><Icon name={authState === 'loading' ? 'lock' : 'info'} size={24} /></div><h1 className="mt-6 text-xl font-black">{authState === 'loading' ? 'Opening your portal' : 'Secure access required'}</h1><p className="mt-3 text-sm leading-6 text-slate-300">{message}</p>{authState !== 'loading' && <button onClick={() => router.replace('/login')} className="mt-6 rounded-xl bg-white px-4 py-3 text-xs font-bold text-emerald-950">Return to sign in</button>}</div></div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-slate-800 bg-slate-950 text-slate-200 lg:flex">
        <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-5">
          <div className="h-10 w-10 overflow-hidden rounded-xl border border-amber-400/40 bg-emerald-900"><img src="/school-logo.png" alt="Dodola school emblem" className="h-full w-full object-cover" /></div>
          <div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">Dodola portal</p><p className="truncate text-sm font-black text-white">Ifa Boru School</p></div>
        </div>
        <div className="px-4 pt-5"><p className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{displayRole} workspace</p></div>
        <nav className="mt-3 flex-1 space-y-1 overflow-y-auto px-3 pb-4">
          {nav.map(([label, href, icon]) => <Link key={`${label}-${href}`} href={href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition ${isActive(href) ? 'bg-emerald-700 text-white shadow-sm ring-1 ring-emerald-500/40' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}><Icon name={icon} size={16} /><span>{label}</span></Link>)}
        </nav>
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-800">{key === 'student' ? student.initials : displayRole.slice(0, 2).toUpperCase()}</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold text-white">{identity.name}</p><p className="truncate text-[10px] text-slate-500">{identity.detail}</p></div><button onClick={signOut} className="text-slate-500 hover:text-red-300" aria-label="Sign out"><Icon name="logout" size={16} /></button></div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3"><button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-xl border border-slate-200 p-2 text-slate-600 lg:hidden" aria-label="Open navigation"><Icon name={mobileOpen ? 'close' : 'menu'} size={19} /></button><div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-emerald-700">{eyebrow || `${displayRole} workspace`}</p><h1 className="text-base font-black text-slate-950 sm:text-lg">{title || 'Overview'}</h1></div></div>
            <div className="flex items-center gap-3"><span className="hidden text-right sm:block"><span className="block text-xs font-bold text-slate-700">{student.academicYear}</span><span className="block text-[10px] text-slate-400">{identity.detail}</span></span><button className="relative rounded-xl border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-emerald-200 hover:text-emerald-700" aria-label="Notifications"><Icon name="bell" size={17} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" /></button><div className="hidden h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-800 sm:flex">{key === 'student' ? student.initials : displayRole.slice(0, 2).toUpperCase()}</div></div>
          </div>
        </header>

        {mobileOpen && <div className="fixed inset-0 top-16 z-20 bg-slate-950/40 lg:hidden" onClick={() => setMobileOpen(false)}><nav className="w-72 max-w-[85vw] space-y-1 border-r border-slate-800 bg-slate-950 p-4 text-slate-200 shadow-xl" onClick={(event) => event.stopPropagation()}>{nav.map(([label, href, icon]) => <Link key={href} href={href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${isActive(href) ? 'bg-emerald-700 text-white' : 'text-slate-300 hover:bg-slate-900'}`}><Icon name={icon} size={17} />{label}</Link>)}<button onClick={signOut} className="mt-4 flex w-full items-center gap-3 border-t border-slate-800 px-3 pt-4 text-sm font-semibold text-slate-400"><Icon name="logout" size={17} />Sign out</button></nav></div>}

        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
