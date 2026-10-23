'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { QRCodeSVG } from 'qrcode.react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/login';
        return;
      }

      const { data, error } = await supabase
        .from('students')
        .select('*, profiles(full_name, phone_number)')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      setStudent(data);
    } catch (err) {
      console.error('Error fetching student:', err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/login';
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-emerald-800 font-medium">
        Loading Student Portal...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-12 font-sans">
      {/* Header Bar */}
      <header className="bg-emerald-800 text-white p-4 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-sm font-bold">Dodola Ifa Boru Special Boarding School</h1>
          <p className="text-xs text-emerald-200">Student Portal</p>
        </div>
        <button 
          onClick={handleLogout}
          className="text-xs bg-emerald-700 hover:bg-emerald-900 px-3 py-1.5 rounded-lg font-semibold transition"
        >
          Sign Out
        </button>
      </header>

      {/* Main Content Container */}
      <main className="max-w-md mx-auto p-4 space-y-4">
        {student ? (
          <>
            {/* Digital ID Card Badge */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden text-center p-6">
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-bold mb-3">
                Official Boarding Student ID
              </div>

              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-emerald-700 bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                {student.photo_url ? (
                  <img src={student.photo_url} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  student.profiles?.full_name?.charAt(0) || 'S'
                )}
              </div>

              <h2 className="text-xl font-extrabold text-gray-900">{student.profiles?.full_name}</h2>
              <p className="text-sm font-semibold text-emerald-700 mb-4">{student.student_id_code}</p>

              <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-xl text-xs text-left mb-4 border">
                <div><span className="text-gray-500">Grade:</span> <strong>Grade {student.grade_level}</strong></div>
                <div><span className="text-gray-500">Section:</span> <strong>{student.section}</strong></div>
                <div><span className="text-gray-500">Stream:</span> <strong>{student.stream}</strong></div>
                <div><span className="text-gray-500">Dorm:</span> <strong>Block {student.dorm_block || 'N/A'}, Rm {student.dorm_room || 'N/A'}</strong></div>
              </div>

              {/* QR Code Container */}
              <div className="bg-white p-4 rounded-xl border border-dashed border-emerald-300 inline-block mx-auto shadow-sm">
                <QRCodeSVG value={student.qr_code_token} size={150} level="H" />
                <p className="text-[10px] text-gray-400 mt-2">Scan for Gate / Dining / Roll-Call</p>
              </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="/dashboard/student/exeats" 
                className="bg-white p-4 rounded-xl shadow-sm border text-center hover:border-emerald-600 transition"
              >
                <div className="text-emerald-700 font-bold text-sm">Request Exeat</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Weekend & Medical passes</div>
              </a>
              <a 
                href="/dashboard/student/grades" 
                className="bg-white p-4 rounded-xl shadow-sm border text-center hover:border-emerald-600 transition"
              >
                <div className="text-emerald-700 font-bold text-sm">My Grades</div>
                <div className="text-[11px] text-gray-500 mt-0.5">View scores & report card</div>
              </a>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border">
            <p className="text-sm text-gray-600">No student profile linked to this account.</p>
          </div>
        )}
      </main>
    </div>
  );
}
