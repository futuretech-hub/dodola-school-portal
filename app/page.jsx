import Link from 'next/link';
import PublicPage from '../components/PublicPage';
import Icon from '../components/Icon';

const pillars = [
  ['Academic excellence', 'Focused teaching, strong study habits, and preparation for the next step.', 'book'],
  ['Character and values', 'A safe boarding community built on responsibility, respect, and service.', 'shield'],
  ['Personal growth', 'Structured support helps each learner build confidence and practical independence.', 'users'],
];

const portalSteps = [
  ['01', 'Know the plan', 'Students see the timetable, assignments, notices, and upcoming events before the day begins.', 'calendar'],
  ['02', 'Do the work', 'Teachers record attendance and grades while students keep coursework and progress in one place.', 'check'],
  ['03', 'Stay connected', 'Families, wardens, and gate staff share the right information when it matters.', 'users'],
];

export default function Home() {
  return (
    <PublicPage>
      <main>
        <section className="relative overflow-hidden bg-emerald-950 text-white">
          <div className="absolute inset-0 bg-[url('/campus-hero.jpg')] bg-cover bg-center opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-950/40" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-300"><span className="h-px w-8 bg-amber-300" />The center of the fountain of stars</p>
              <h1 className="public-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">A focused place to learn, live, and lead.</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-emerald-100 sm:text-lg">Dodola Ifa Boru Special Boarding School gives Grade 9–12 students the academic focus, residential structure, and human support they need to grow with purpose.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/about" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-950 hover:bg-amber-100">Learn about our school <Icon name="arrow" size={16} /></Link><Link href="/login" className="inline-flex items-center gap-2 rounded-xl border border-emerald-700 bg-emerald-900/50 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-800">Open the school portal <Icon name="lock" size={15} /></Link></div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300">At a glance</p><div className="mt-6 grid grid-cols-2 gap-4"><div className="border-l border-amber-300/70 pl-4"><p className="text-3xl font-black">9–12</p><p className="mt-1 text-xs text-emerald-100">Grade levels</p></div><div className="border-l border-amber-300/70 pl-4"><p className="text-3xl font-black">2</p><p className="mt-1 text-xs text-emerald-100">Academic streams</p></div><div className="border-l border-amber-300/70 pl-4"><p className="text-3xl font-black">24/7</p><p className="mt-1 text-xs text-emerald-100">Boarding support</p></div><div className="border-l border-amber-300/70 pl-4"><p className="text-3xl font-black">1</p><p className="mt-1 text-xs text-emerald-100">Connected portal</p></div></div></div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Built around the whole student</p><h2 className="public-serif mt-3 text-3xl text-slate-950 sm:text-4xl">Strong days create strong futures.</h2><p className="mt-4 text-sm leading-7 text-slate-600">Our academic, residential, and pastoral systems work together so students can focus on learning while families and staff stay informed.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{pillars.map(([title, body, icon]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icon name={icon} size={19} /></span><h3 className="mt-5 text-base font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{body}</p></article>)}</div></section>
        <section className="bg-emerald-50/70"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">A connected school day</p><h2 className="public-serif mt-3 text-3xl text-slate-950 sm:text-4xl">Less chasing. More clarity.</h2></div><p className="max-w-md text-sm leading-6 text-slate-600">The portal gives each member of the school community a focused view of the decisions and actions that belong to them.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{portalSteps.map(([number, title, body, icon]) => <article key={number} className="relative rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><span className="text-3xl font-black text-emerald-100">{number}</span><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700"><Icon name={icon} size={18} /></span></div><h3 className="mt-7 text-base font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{body}</p></article>)}</div></div></section>
        <section className="border-y border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">For students, families, and staff</p><h2 className="mt-2 text-2xl font-black text-slate-950">One place for the school day.</h2></div><Link href="/login" className="inline-flex items-center gap-2 self-start rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-800">Go to portal access <Icon name="arrow" size={16} /></Link></div></section>
      </main>
    </PublicPage>
  );
}
