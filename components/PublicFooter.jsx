import Link from 'next/link';

export default function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-slate-700">Dodola Ifa Boru Special Boarding School</p>
          <p className="mt-1 text-xs">Grades 9–12 · Academic year 2026–2027</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold">
          <Link href="/about" className="hover:text-emerald-700">About</Link>
          <Link href="/academics" className="hover:text-emerald-700">Academics</Link>
          <Link href="/campus-life" className="hover:text-emerald-700">Campus life</Link>
          <Link href="/achievements" className="hover:text-emerald-700">Achievements</Link>
          <Link href="/login" className="text-emerald-700 hover:text-emerald-900">Portal access</Link>
        </nav>
      </div>
      <div className="border-t border-slate-100 px-4 py-3 text-center text-xs text-slate-400">
        © 2026 Dodola Ifa Boru Special Boarding School. All rights reserved.
      </div>
    </footer>
  );
}
