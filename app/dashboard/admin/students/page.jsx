'use client';

import { useState } from 'react';
import PortalShell from '../../../../components/PortalShell';
import { ActionButton, PageIntro, SectionCard, StatusBadge } from '../../../../components/PortalUI';

const students = [
  ['DIB-2026-0901', 'Samuel Alemu', 'Grade 11A', 'Natural Science', 'Block B · 204', 'Active'],
  ['DIB-2026-0902', 'Hana Bekele', 'Grade 11A', 'Natural Science', 'Block A · 118', 'Active'],
  ['DIB-2026-0917', 'Kalkidan Tadesse', 'Grade 11B', 'Social Science', 'Block C · 302', 'Active'],
  ['DIB-2026-0948', 'Nati Gebre', 'Grade 10A', 'General', 'Block B · 112', 'Review'],
];

export default function AdminStudentsPage() {
  const [query, setQuery] = useState('');
  const filtered = students.filter((row) => row.join(' ').toLowerCase().includes(query.toLowerCase()));
  return <PortalShell role="admin" eyebrow="Administration" title="Students"><PageIntro eyebrow="Student records" title="Student directory" description="Search the school register by name, ID, grade, stream, or residence." actions={<ActionButton tone="primary">Add student</ActionButton>} /><SectionCard title={`${filtered.length} records`} description="Showing current sample data"><div className="mb-4 flex max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search student records" className="w-full text-sm outline-none placeholder:text-slate-400" /></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-xs"><thead className="border-b border-slate-200 text-[10px] uppercase tracking-wider text-slate-400"><tr><th className="pb-3">Student</th><th className="pb-3">Grade</th><th className="pb-3">Stream</th><th className="pb-3">Residence</th><th className="pb-3 text-right">Status</th></tr></thead><tbody className="divide-y divide-slate-100">{filtered.map(([id,name,grade,stream,residence,status]) => <tr key={id}><td className="py-4"><p className="font-bold text-slate-900">{name}</p><p className="mt-1 font-mono text-[11px] text-slate-400">{id}</p></td><td className="py-4 text-slate-600">{grade}</td><td className="py-4 text-slate-600">{stream}</td><td className="py-4 text-slate-600">{residence}</td><td className="py-4 text-right"><StatusBadge tone={status === 'Active' ? 'success' : 'warning'}>{status}</StatusBadge></td></tr>)}</tbody></table></div></SectionCard></PortalShell>;
}
