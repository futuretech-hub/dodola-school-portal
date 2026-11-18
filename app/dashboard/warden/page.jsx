'use client';

import { useEffect, useState } from 'react';
import PortalShell from '../../../components/PortalShell';
import { ActionButton, PageIntro, SectionCard, StatCard, StatusBadge, EmptyState } from '../../../components/PortalUI';
import { isSupabaseConfigured, supabase } from '../../../lib/supabaseClient';

const demoExeats = [
  { id: 'demo-1', name: 'Samuel Alemu', code: 'DIB-2026-0901', grade: 'Grade 11A', type: 'Weekend home leave', reason: 'Family visit', dorm: 'Block B · Room 204', departure: 'Nov 14, 2026', returnDate: 'Nov 16, 2026', status: 'pending' },
  { id: 'demo-2', name: 'Hana Bekele', code: 'DIB-2026-0902', grade: 'Grade 11A', type: 'Medical leave', reason: 'Clinic appointment', dorm: 'Block A · Room 118', departure: 'Nov 10, 2026', returnDate: 'Nov 10, 2026', status: 'approved' },
];

export default function WardenPage() {
  const [exeats, setExeats] = useState(demoExeats);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState('');

  useEffect(() => { if (isSupabaseConfigured) fetchExeats(); else setLoading(false); }, []);

  async function fetchExeats() {
    const { data, error } = await supabase.from('exeats').select('*, students(student_id_code, grade_level, section, dorm_block, dorm_room, profiles(full_name))').order('created_at', { ascending: false });
    if (error) { setNotice(`Could not load live requests: ${error.message}`); setLoading(false); return; }
    setExeats((data || []).map((item) => ({ id: item.id, name: item.students?.profiles?.full_name || 'Student', code: item.students?.student_id_code, grade: `Grade ${item.students?.grade_level}${item.students?.section || ''}`, type: item.leave_type, reason: item.reason, dorm: `Block ${item.students?.dorm_block || '—'} · Room ${item.students?.dorm_room || '—'}`, departure: new Date(item.departure_date).toLocaleString(), returnDate: new Date(item.expected_return_date).toLocaleString(), status: item.status })));
    setLoading(false);
  }

  async function updateStatus(item, status) {
    if (isSupabaseConfigured) { const { data: { user } } = await supabase.auth.getUser(); const { error } = await supabase.from('exeats').update({ status, approved_by: user?.id }).eq('id', item.id); if (error) { setNotice(`Update failed: ${error.message}`); return; } await fetchExeats(); } else { setExeats((current) => current.map((row) => row.id === item.id ? { ...row, status } : row)); setNotice('Demo status updated locally. Connect Supabase for permanent records.'); }
  }

  return <PortalShell role="warden" eyebrow="Boarding operations" title="Warden overview"><PageIntro eyebrow="Leave management" title="Review student leave requests." description="Approve or reject requests before the student reaches the gate." /><div className="grid gap-4 sm:grid-cols-3"><StatCard label="Pending review" value={exeats.filter((item) => item.status === 'pending').length} detail="Requests needing action" icon="door" tone="amber" /><StatCard label="Approved" value={exeats.filter((item) => item.status === 'approved').length} detail="Ready for gate verification" icon="check" tone="emerald" /><StatCard label="Residence blocks" value="6" detail="Under warden supervision" icon="building" tone="blue" /></div>{notice && <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-xs font-semibold text-blue-800">{notice}</div>}<SectionCard title="Leave and exeat requests" description={loading ? 'Loading live requests…' : 'Most recent requests first'} className="mt-6">{loading ? <p className="py-8 text-center text-sm text-slate-500">Loading warden queue…</p> : exeats.length ? <div className="space-y-3">{exeats.map((item) => <div key={item.id} className="rounded-xl border border-slate-200 p-4"><div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"><div><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-bold text-slate-900">{item.name}</p><StatusBadge tone={item.status === 'approved' ? 'success' : item.status === 'rejected' ? 'danger' : 'warning'}>{item.status}</StatusBadge></div><p className="mt-1 font-mono text-[11px] text-emerald-700">{item.code} · {item.grade}</p><div className="mt-3 grid gap-1 text-xs text-slate-500 sm:grid-cols-2"><p><span className="font-semibold text-slate-700">Type:</span> {item.type}</p><p><span className="font-semibold text-slate-700">Residence:</span> {item.dorm}</p><p><span className="font-semibold text-slate-700">Reason:</span> {item.reason}</p><p><span className="font-semibold text-slate-700">Departure:</span> {item.departure}</p><p><span className="font-semibold text-slate-700">Expected return:</span> {item.returnDate}</p></div></div>{item.status === 'pending' && <div className="flex shrink-0 gap-2"><ActionButton onClick={() => updateStatus(item, 'approved')} tone="primary">Approve</ActionButton><ActionButton onClick={() => updateStatus(item, 'rejected')} tone="danger">Reject</ActionButton></div>}</div></div>)}</div> : <EmptyState icon="door" title="No leave requests" description="New student requests will appear here." />}</SectionCard></PortalShell>;
}
