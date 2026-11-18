'use client';

import { useEffect, useState } from 'react';
import PortalShell from '../../../../components/PortalShell';
import Icon from '../../../../components/Icon';
import { ActionButton, PageIntro, SectionCard, StatusBadge } from '../../../../components/PortalUI';
import { isSupabaseConfigured, supabase } from '../../../../lib/supabaseClient';

const demoStudent = { id: 'demo-student', name: 'Samuel Alemu', code: 'DIB-2026-0901', grade: 'Grade 11A', dorm: 'Block B · Room 204' };

export default function ScannerPage() {
  const [token, setToken] = useState('');
  const [student, setStudent] = useState(null);
  const [exeat, setExeat] = useState(null);
  const [status, setStatus] = useState('');
  const [scannerReady, setScannerReady] = useState(false);

  useEffect(() => {
    let scanner;
    async function setup() { try { const { Html5QrcodeScanner } = await import('html5-qrcode'); scanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: { width: 220, height: 220 } }, false); scanner.render((decoded) => { setToken(decoded); verify(decoded); scanner.clear().catch(() => {}); }, () => {}); setScannerReady(true); } catch { setStatus('Camera scanner is unavailable. Use manual token entry below.'); } }
    setup();
    return () => { if (scanner) scanner.clear().catch(() => {}); };
  }, []);

  async function verify(value = token) {
    setStatus('Verifying student code…'); setStudent(null); setExeat(null);
    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase.from('students').select('*, profiles(full_name)').eq('qr_code_token', value).single();
      if (error || !data) { setStatus('Invalid QR code. Student not found.'); return; }
      const { data: approved } = await supabase.from('exeats').select('*').eq('student_id', data.id).eq('status', 'approved').order('created_at', { ascending: false }).limit(1);
      setStudent({ id: data.id, name: data.profiles?.full_name || 'Student', code: data.student_id_code, grade: `Grade ${data.grade_level}${data.section}`, dorm: `Block ${data.dorm_block || '—'} · Room ${data.dorm_room || '—'}` }); setExeat(approved?.[0] || null); setStatus(approved?.[0] ? 'Valid approved exeat found.' : 'Student found, but no approved exeat is active.'); return;
    }
    if (value === 'demo' || value === 'DIB-2026-0901' || value === 'DIB-2026-0901-demo') { setStudent(demoStudent); setExeat({ leave_type: 'Weekend home leave', reason: 'Family visit' }); setStatus('Demo student verified. Connect Supabase for live records.'); } else setStatus('Use demo or DIB-2026-0901 for the preview scanner.');
  }

  async function logAction(type) {
    if (!student) return;
    if (isSupabaseConfigured && supabase) { const { data: { user } } = await supabase.auth.getUser(); await supabase.from('scan_logs').insert({ student_id: student.id, scanned_by: user?.id, scan_type: type === 'checkout' ? 'gate_checkout' : 'gate_checkin', location: 'Main School Gate', is_valid: Boolean(exeat), notes: `${type} logged from portal scanner` }); }
    setStatus(`${type === 'checkout' ? 'Check-out' : 'Check-in'} recorded for ${student.name}.`);
  }

  return <PortalShell role="security_guard" eyebrow="Campus safety" title="Gate scanner"><PageIntro eyebrow="Student ID verification" title="Scan before every departure." description="Verify the student, confirm an approved exeat, and record the gate action." /><div className="grid gap-6 xl:grid-cols-[.8fr_1.2fr]"><SectionCard title="Scan student QR code" description={scannerReady ? 'Point the camera at the student ID code.' : 'Camera loading or unavailable.'}><div id="reader" className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50" /><div className="my-4 flex items-center gap-3 text-[10px] uppercase tracking-widest text-slate-400"><span className="h-px flex-1 bg-slate-200" />or enter token<span className="h-px flex-1 bg-slate-200" /></div><div className="flex gap-2"><input value={token} onChange={(event)=>setToken(event.target.value)} placeholder="DIB-2026-0901" className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm" /><ActionButton onClick={()=>verify()} tone="dark">Verify</ActionButton></div>{status&&<p className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs font-semibold text-blue-800">{status}</p>}</SectionCard><SectionCard title="Verification result" description="Gate staff must confirm the leave record.">{student ? <div className="space-y-4"><div className="rounded-xl border border-slate-200 p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-base font-black text-slate-900">{student.name}</p><p className="mt-1 font-mono text-xs text-emerald-700">{student.code}</p></div><StatusBadge tone="success">Student found</StatusBadge></div><div className="mt-4 grid gap-2 text-xs text-slate-500 sm:grid-cols-2"><p><span className="font-semibold text-slate-700">Grade:</span> {student.grade}</p><p><span className="font-semibold text-slate-700">Residence:</span> {student.dorm}</p></div></div>{exeat ? <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"><div className="flex items-center gap-2 text-sm font-bold text-emerald-900"><Icon name="check" size={16} />Approved exeat active</div><p className="mt-2 text-xs text-emerald-900/75">{exeat.leave_type} · {exeat.reason}</p></div> : <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-bold text-red-800">No approved exeat found. Do not permit departure without warden clearance.</div>}<div className="flex gap-2"><ActionButton onClick={()=>logAction('checkout')} tone="warning">Check out</ActionButton><ActionButton onClick={()=>logAction('checkin')} tone="primary">Check in</ActionButton></div></div> : <div className="py-10 text-center text-sm text-slate-500"><Icon name="scan" size={24} className="mx-auto text-slate-300" /><p className="mt-3">Scan or enter a student token to see verification details.</p></div>}</SectionCard></div></PortalShell>;
}
