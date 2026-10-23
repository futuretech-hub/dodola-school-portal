'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function WardenDashboard() {
  const [exeats, setExeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExeats();
  }, []);

  async function fetchExeats() {
    try {
      const { data, error } = await supabase
        .from('exeats')
        .select(`
          *,
          students (
            student_id_code,
            grade_level,
            section,
            dorm_block,
            dorm_room,
            profiles ( full_name, phone_number )
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setExeats(data || []);
    } catch (err) {
      console.error('Error fetching exeats:', err.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateExeatStatus(exeatId, newStatus) {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from('exeats')
        .update({ 
          status: newStatus,
          approved_by: user?.id 
        })
        .eq('id', exeatId);

      if (error) throw error;
      
      // Refresh list
      fetchExeats();
      alert(`Exeat request successfully ${newStatus}!`);
    } catch (err) {
      alert('Error updating status: ' + err.message);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/login';
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-emerald-800 font-medium">
        Loading Warden Portal...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-12 font-sans">
      {/* Header Bar */}
      <header className="bg-emerald-900 text-white p-4 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-sm font-bold">Dodola Ifa Boru Special Boarding School</h1>
          <p className="text-xs text-emerald-300">Warden & Residence Dashboard</p>
        </div>
        <button 
          onClick={handleLogout}
          className="text-xs bg-emerald-800 hover:bg-emerald-950 px-3 py-1.5 rounded-lg font-semibold transition"
        >
          Sign Out
        </button>
      </header>

      {/* Content Container */}
      <main className="max-w-2xl mx-auto p-4 space-y-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-base font-bold text-gray-900 mb-1">Student Leave & Exeat Requests</h2>
          <p className="text-xs text-gray-500">Review and approve weekend passes, medical leave, or emergencies.</p>
        </div>

        {exeats.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl text-center border text-gray-500 text-sm">
            No exeat requests found.
          </div>
        ) : (
          <div className="space-y-3">
            {exeats.map((ex) => (
              <div key={ex.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-sm">
                      {ex.students?.profiles?.full_name || 'Student'}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700">
                      {ex.students?.student_id_code} — Grade {ex.students?.grade_level}{ex.students?.section}
                    </p>
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full ${
                    ex.status === 'approved' ? 'bg-emerald-100 text-emerald-800' :
                    ex.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {ex.status}
                  </span>
                </div>

                <div className="bg-gray-50 p-3 rounded-xl text-xs space-y-1 border">
                  <div><span className="text-gray-500">Type:</span> <strong>{ex.leave_type}</strong></div>
                  <div><span className="text-gray-500">Reason:</span> {ex.reason}</div>
                  <div><span className="text-gray-500">Dormitory:</span> Block {ex.students?.dorm_block || 'N/A'}, Room {ex.students?.dorm_room || 'N/A'}</div>
                  <div className="pt-1 text-[11px] text-gray-600 border-t mt-2">
                    <div><strong>Departure:</strong> {new Date(ex.departure_date).toLocaleString()}</div>
                    <div><strong>Expected Return:</strong> {new Date(ex.expected_return_date).toLocaleString()}</div>
                  </div>
                </div>

                {ex.status === 'pending' && (
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => updateExeatStatus(ex.id, 'approved')}
                      className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-sm"
                    >
                      Approve Exeat
                    </button>
                    <button
                      onClick={() => updateExeatStatus(ex.id, 'rejected')}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-sm"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
