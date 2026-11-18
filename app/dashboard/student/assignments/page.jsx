'use client';

import { useState } from 'react';
import PortalShell from '../../../../components/PortalShell';
import Icon from '../../../../components/Icon';
import { ActionButton, PageIntro, SectionCard, StatusBadge, EmptyState } from '../../../../components/PortalUI';
import { assignments as initialAssignments } from '../../../../lib/demoData';

export default function AssignmentsPage() {
  const [filter, setFilter] = useState('All');
  const [items, setItems] = useState(initialAssignments);
  const visible = items.filter((item) => filter === 'All' || item.status === filter);
  function markSubmitted(id) { setItems((current) => current.map((item) => item.id === id ? { ...item, status: 'Submitted' } : item)); }
  return <PortalShell role="student" eyebrow="Academic portal" title="Assignments"><PageIntro eyebrow="Coursework" title="Assignments and submissions" description="Keep track of upcoming work, due dates, and what you have already submitted." actions={<ActionButton tone="light"><Icon name="download" size={14} />Download list</ActionButton>} /><div className="mb-5 flex flex-wrap gap-2">{['All', 'Pending', 'Due soon', 'Submitted'].map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-3 py-2 text-xs font-bold ${filter === item ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}>{item}</button>)}</div><SectionCard title={`${visible.length} assignment${visible.length === 1 ? '' : 's'}`} description="Grade 11 coursework"><div className="space-y-3">{visible.length ? visible.map((item) => <div key={item.id} className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between"><div><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-bold text-slate-900">{item.title}</p><StatusBadge tone={item.status === 'Submitted' ? 'success' : item.status === 'Due soon' ? 'warning' : 'info'}>{item.status}</StatusBadge></div><p className="mt-2 text-xs text-slate-500">{item.subject} · {item.teacher}</p><p className="mt-1 text-xs text-slate-400">Due {item.due}</p></div>{item.status !== 'Submitted' && <ActionButton onClick={() => markSubmitted(item.id)} tone="primary">Mark submitted <Icon name="check" size={14} /></ActionButton>}</div>) : <EmptyState icon="clipboard" title="No assignments in this view" description="Try a different status filter or check back when new coursework is posted." />}</div></SectionCard></PortalShell>;
}
