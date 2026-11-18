'use client';

import { useState } from 'react';
import PortalShell from '../../../../components/PortalShell';
import Icon from '../../../../components/Icon';
import { ActionButton, PageIntro, SectionCard, StatusBadge, EmptyState } from '../../../../components/PortalUI';
import { leavePasses as initialPasses } from '../../../../lib/demoData';
import { isSupabaseConfigured, supabase } from '../../../../lib/supabaseClient';

export default function LeavePage() {
  const [passes, setPasses] = useState(initialPasses);
  const [form, setForm] = useState({ type: 'Weekend home leave', reason: '', departure: '', returnDate: '' });
  const [notice, setNotice] = useState('');
  const [saving, setSaving] = useState(false);

  async function submit(event) {
    event.preventDefault();
    if (!form.reason || !form.departure || !form.returnDate) { setNotice('Please complete the reason and both dates.'); return; }
    setSaving(true); setNotice('');
    const newPass = { type: form.type, date: `${form.departure}–${form.returnDate}`, status: 'Pending', passCode: `REQ-${String(passes.length + 403).padStart(4, '0')}`, reason: form.reason };
    if (isSupabaseConfigured && supabase) {
      const { data: { user } } = await supabase.auth.getUser();
      const { data: studentRecord, error: studentError } = await supabase.from('students').select('id').eq('user_id', user?.id).single();
      if (studentError || !studentRecord) { setNotice('Your student record is not linked to this account yet. Ask an administrator to complete the profile setup.'); setSaving(false); return; }
      const { error } = await supabase.from('exeats').insert({ student_id: studentRecord.id, leave_type: form.type, reason: form.reason, departure_date: form.departure, expected_return_date: form.returnDate, status: 'pending' });
      if (error) { setNotice(`Request could not be saved: ${error.message}`); setSaving(false); return; }
    }
    setPasses((current) => [newPass, ...current]); setForm({ type: 'Weekend home leave', reason: '', departure: '', returnDate: '' }); setNotice(isSupabaseConfigured ? 'Leave request sent for review.' : 'Demo request added locally. Connect Supabase to save it permanently.'); setSaving(false);
  }

  return <PortalShell role="student" eyebrow="Boarding house" title="Leave and passes"><PageIntro eyebrow="Boarding permissions" title="Request and track leave." description="Submit a request before leaving campus and wait for warden approval." /><div className="grid gap-6 xl:grid-cols-[.85fr_1.15fr]"><SectionCard title="New leave request" description="All requests are reviewed by the warden."><form onSubmit={submit} className="space-y-4"><label className="block"><span className="mb-1.5 block text-xs font-bold text-slate-700">Leave type</span><select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"><option>Weekend home leave</option><option>Medical leave</option><option>Family emergency</option></select></label><label className="block"><span className="mb-1.5 block text-xs font-bold text-slate-700">Reason</span><textarea value={form.reason} onChange={(event) => setForm({ ...form, reason: event.target.value })} rows={4} placeholder="Explain why you need to leave campus" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm placeholder:text-slate-400" /></label><div className="grid gap-4 sm:grid-cols-2"><label className="block"><span className="mb-1.5 block text-xs font-bold text-slate-700">Departure date</span><input type="date" value={form.departure} onChange={(event) => setForm({ ...form, departure: event.target.value })} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" /></label><label className="block"><span className="mb-1.5 block text-xs font-bold text-slate-700">Expected return</span><input type="date" value={form.returnDate} onChange={(event) => setForm({ ...form, returnDate: event.target.value })} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" /></label></div>{notice && <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold text-emerald-800">{notice}</p>}<ActionButton type="submit" tone="primary" disabled={saving}>{saving ? 'Sending request…' : 'Submit leave request'} <Icon name="arrow" size={14} /></ActionButton></form></SectionCard><SectionCard title="Request history" description="Your recent boarding authorizations."><div className="space-y-3">{passes.length ? passes.map((pass) => <div key={pass.passCode} className="rounded-xl border border-slate-200 p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-bold text-slate-900">{pass.type}</p><p className="mt-1 text-xs text-slate-500">{pass.reason}</p></div><StatusBadge tone={pass.status === 'Approved' ? 'success' : pass.status === 'Rejected' ? 'danger' : 'warning'}>{pass.status}</StatusBadge></div><div className="mt-3 flex items-center justify-between text-[11px] text-slate-400"><span>{pass.date}</span><span className="font-mono">{pass.passCode}</span></div></div>) : <EmptyState icon="door" title="No requests yet" description="Submit your first leave request using the form." />}</div></SectionCard></div></PortalShell>;
}
