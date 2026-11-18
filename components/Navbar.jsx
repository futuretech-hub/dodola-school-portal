'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from './Icon';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Campus life', href: '/campus-life' },
  { name: 'Achievements', href: '/achievements' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-emerald-950 text-white shadow-sm">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="h-11 w-11 overflow-hidden rounded-full border border-amber-300/70 bg-emerald-900"><img src="/school-logo.png" alt="Ifa Boru School emblem" className="h-full w-full object-cover" /></span>
          <span><span className="block text-sm font-black tracking-tight sm:text-base">Dodola Ifa Boru</span><span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300">Special boarding school</span></span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={`border-b-2 py-1 text-xs font-semibold transition lg:text-sm ${isActive(link.href) ? 'border-amber-300 text-white' : 'border-transparent text-emerald-100 hover:text-white'}`}>{link.name}</Link>)}
          <Link href="/login" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-emerald-950 shadow-sm transition hover:bg-amber-100"><Icon name="lock" size={14} />Portal access</Link>
        </nav>
        <button className="rounded-xl border border-emerald-800 p-2.5 text-emerald-100 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="public-mobile-nav" aria-label={open ? 'Close navigation' : 'Open navigation'}><Icon name={open ? 'close' : 'menu'} size={20} /></button>
      </div>
      {open && <nav id="public-mobile-nav" className="border-t border-emerald-800 bg-emerald-950 px-4 py-3 md:hidden"><div className="space-y-1">{navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={isActive(link.href) ? 'page' : undefined} className={`block rounded-xl px-4 py-3 text-sm font-semibold ${isActive(link.href) ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-900'}`}>{link.name}</Link>)}<Link href="/login" onClick={() => setOpen(false)} className="mt-2 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-emerald-950"><Icon name="lock" size={16} />Portal access</Link></div></nav>}
    </header>
  );
}
