export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 p-6 text-white font-sans">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 text-center space-y-6">
        <div>
          <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-emerald-400/30">
            Grades 9–12 Special Boarding School
          </span>
          <h1 className="text-3xl font-extrabold mt-3 tracking-tight">
            Dodola Ifa Boru
          </h1>
          <p className="text-xs text-emerald-200 mt-1">
            Official Academic, Residence & Gate Security Portal
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <a 
            href="/login" 
            className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-2xl shadow-lg transition text-sm"
          >
            Sign In to Portal
          </a>
          <a 
            href="/dashboard/security/scanner" 
            className="block w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 rounded-2xl transition text-xs border border-white/10"
          >
            Gate Security QR Scanner
          </a>
        </div>

        <div className="text-[10px] text-gray-400 pt-4 border-t border-white/10">
          Secure Boarding Management System &copy; 2026
        </div>
      </div>
    </main>
  );
}
