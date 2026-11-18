import PortalShell from '../../../../components/PortalShell';
import Icon from '../../../../components/Icon';
import { PageIntro, SectionCard, StatusBadge } from '../../../../components/PortalUI';
import { announcements } from '../../../../lib/demoData';

export default function AnnouncementsPage() {
  return <PortalShell role="student" eyebrow="School communication" title="Announcements"><PageIntro eyebrow="Official bulletin" title="Stay up to date." description="Important academic, boarding, and student-life notices are collected here." /><div className="space-y-4">{announcements.map((item) => <SectionCard key={item.title}><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div className="flex gap-3"><span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.priority === 'Important' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}><Icon name="megaphone" size={17} /></span><div><div className="flex flex-wrap items-center gap-2"><h2 className="text-sm font-bold text-slate-900">{item.title}</h2><StatusBadge tone={item.priority === 'Important' ? 'warning' : 'info'}>{item.priority}</StatusBadge></div><p className="mt-1 text-[11px] text-slate-400">{item.category} · {item.date}</p><p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p></div></div></div></SectionCard>)}</div></PortalShell>;
}
