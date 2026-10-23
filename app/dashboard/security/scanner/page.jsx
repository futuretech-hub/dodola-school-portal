'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Html5QrcodeScanner } from 'html5-qrcode';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function SecurityScanner() {
  const [scanResult, setScanResult] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);
  const [activeExeat, setActiveExeat] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    // Initialize QR scanner on the element with id 'reader'
    const scanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(onScanSuccess, onScanFailure);

    function onScanSuccess(decodedText) {
      scanner.clear();
      setScanResult(decodedText);
      verifyStudentToken(decodedText);
    }

    function onScanFailure(error) {
      // Ignore routine scanning errors while searching for a code
    }

    return () => {
      scanner.clear().catch(error => console.error('Failed to clear scanner', error));
    };
  }, []);

  async function verifyStudentToken(token) {
    setStatusMsg('Verifying student code...');
    try {
      // 1. Find student by QR token
      const { data: student, error: studentErr } = await supabase
        .from('students')
        .select('*, profiles(full_name, phone_number)')
        .eq('qr_code_token', token)
        .single();

      if (studentErr || !student) {
        throw new Error('Invalid QR Code! Student not found.');
      }

      setStudentDetails(student);

      // 2. Check for active/approved exeat
      const { data: exeatData } = await supabase
        .from('exeats')
        .select('*')
        .eq('student_id', student.id)
        .eq('status', 'approved')
        .order('created_at', { ascending: false })
        .limit(1);

      if (exeatData && exeatData.length > 0) {
        setActiveExeat(exeatData[0]);
        setStatusMsg('Valid Approved Exeat Found!');
      } else {
        setActiveExeat(null);
        setStatusMsg('Warning: No active approved exeat found for this student.');
      }
    } catch (err) {
      setStatusMsg(err.message);
      setStudentDetails(null);
    }
  }

  async function handleGateAction(actionType) {
    if (!studentDetails) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();

      // Log scan in scan_logs table
      const { error: logError } = await supabase.from('scan_logs').insert([
        {
          student_id: studentDetails.id,
          scanned_by: user?.id,
          scan_type: actionType === 'checkout' ? 'gate_checkout' : 'gate_checkin',
          location: 'Main School Gate',
          is_valid: true,
          notes: actionType === 'checkout' ? 'Student checked out via gate scanner' : 'Student returned and checked in'
        }
      ]);

      if (logError) throw logError;

      // If checking out, update exeat status if applicable
      if (actionType === 'checkout' && activeExeat) {
        await supabase
          .from('exeats')
          .update({ actual_checkout_at: new Date(), status: 'checked_out' })
          .eq('id', activeExeat.id);
      } else if (actionType === 'checkin' && activeExeat) {
        await supabase
          .from('exeats')
          .update({ actual_checkin_at: new Date(), status: 'checked_in' })
          .eq('id', activeExeat.id);
      }

      alert(`Successfully logged ${actionType === 'checkout' ? 'Check-Out' : 'Check-In'}!`);
      window.location.reload();
    } catch (err) {
      alert('Error recording scan: ' + err.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12 font-sans">
      <header className="bg-emerald-900 text-white p-4 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-sm font-bold">Dodola Ifa Boru Special Boarding School</h1>
          <p className="text-xs text-emerald-300">Security Gate Scanner</p>
        </div>
        <a href="/login" className="text-xs bg-emerald-800 px-3 py-1.5 rounded-lg font-semibold">Exit</a>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border text-center">
          <h2 className="text-sm font-bold text-gray-800 mb-2">Scan Student ID QR Code</h2>
          <div id="reader" className="overflow-hidden rounded-xl border"></div>
        </div>

        {statusMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-bold text-center">
            {statusMsg}
          </div>
        )}

        {studentDetails && (
          <div className="bg-white p-4 rounded-2xl shadow-sm border space-y-3">
            <div className="border-b pb-2">
              <h3 className="font-extrabold text-gray-900 text-base">{studentDetails.profiles?.full_name}</h3>
              <p className="text-xs font-semibold text-emerald-700">{studentDetails.student_id_code} — Grade {studentDetails.grade_level}{studentDetails.section}</p>
              <p className="text-xs text-gray-500 mt-1">Dorm: Block {studentDetails.dorm_block}, Room {studentDetails.dorm_room}</p>
            </div>

            {activeExeat ? (
              <div className="bg-emerald-50 p-3 rounded-xl text-xs space-y-1 border border-emerald-200">
                <span className="font-bold text-emerald-800">Approved Exeat Active</span>
                <p><strong>Type:</strong> {activeExeat.leave_type}</p>
                <p><strong>Reason:</strong> {activeExeat.reason}</p>
              </div>
            ) : (
              <div className="bg-red-50 p-3 rounded-xl text-xs text-red-700 border border-red-200 font-bold">
                No active approved exeat found! Do not permit departure without warden clearance.
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => handleGateAction('checkout')}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm"
              >
                Confirm Check-Out
              </button>
              <button
                onClick={() => handleGateAction('checkin')}
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm"
              >
                Confirm Return / Check-In
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
