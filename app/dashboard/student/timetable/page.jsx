import PortalShell from '../../../../components/PortalShell';
import { PageIntro, SectionCard, StatusBadge } from '../../../../components/PortalUI';
import { classes } from '../../../../lib/demoData';

export default function TimetablePage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return <PortalShell role="student" eyebrow="Academic portal" title="Timetable"><PageIntro eyebrow="Grade 11 · Semester 1" title="Your weekly timetable" description="Use this schedule to plan lessons, practical work, and study time." /><div className="space-y-4">{days.map((day) => <SectionCard key={day} title={day} description={`${classes.filter((item) => item.day === day).length || 0} scheduled lessons`}>{classes.filter((item) => item.day === day).length ? <div className="divide-y divide-slate-100">{classes.filter((item) => item.day === day).map((item) => <div key={`${day}-${item.subject}`} className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-bold text-slate-900">{item.subject}</p><p className="mt-1 text-xs text-slate-500">{item.teacher} · {item.room}</p></div><div className="flex items-center gap-3"><StatusBadge tone="info">{item.time}</StatusBadge><span className="text-xs text-slate-400">Semester 1</span></div></div>)}</div> : <p className="text-sm text-slate-500">No regular lessons are listed for this day.</p>}</SectionCard>)}</div></PortalShell>;
}
