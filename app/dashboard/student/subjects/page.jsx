import PortalShell from '../../../../components/PortalShell';
import Icon from '../../../../components/Icon';
import { PageIntro, SectionCard, ProgressBar } from '../../../../components/PortalUI';
import { subjects } from '../../../../lib/demoData';

const colors = { emerald: 'bg-emerald-500', blue: 'bg-blue-600', teal: 'bg-teal-500', indigo: 'bg-indigo-500', lime: 'bg-lime-500', amber: 'bg-amber-500' };

export default function SubjectsPage() {
  return <PortalShell role="student" eyebrow="Academic portal" title="Subjects"><PageIntro eyebrow="Grade 11 · Natural Science" title="Your subjects" description="See each subject teacher, classroom, and current continuous-assessment progress." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{subjects.map((subject) => <SectionCard key={subject.name}><div className="flex items-start justify-between gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icon name="book" size={18} /></span><span className="text-xl font-black text-slate-900">{subject.progress}%</span></div><h2 className="mt-5 text-base font-black text-slate-950">{subject.name}</h2><p className="mt-1 text-xs text-slate-500">{subject.teacher}</p><p className="mt-1 text-xs text-slate-400">{subject.room}</p><div className="mt-5"><ProgressBar value={subject.progress} color={colors[subject.color]} /></div><p className="mt-2 text-[11px] text-slate-500">Current assessment progress</p></SectionCard>)}</div></PortalShell>;
}
