import PortalShell from '../../../../components/PortalShell';
import Icon from '../../../../components/Icon';
import { PageIntro, SectionCard, StatusBadge } from '../../../../components/PortalUI';
import { events } from '../../../../lib/demoData';

export default function EventsPage() {
  return <PortalShell role="student" eyebrow="School community" title="School events"><PageIntro eyebrow="Calendar" title="What is happening on campus." description="Plan ahead for academic, community, and family events." /><div className="space-y-3">{events.map((event) => <SectionCard key={event.title}><div className="flex flex-col gap-4 sm:flex-row sm:items-center"><div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-emerald-50 text-emerald-800"><span className="text-[10px] font-bold uppercase">2026</span><span className="text-lg font-black">{event.date.split(' ')[1]}</span></div><div className="flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="text-sm font-bold text-slate-900">{event.title}</h2><StatusBadge tone="info">{event.type}</StatusBadge></div><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><Icon name="building" size={13} />{event.location}</p></div><button className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700">Add reminder <Icon name="plus" size={13} /></button></div></SectionCard>)}</div></PortalShell>;
}
