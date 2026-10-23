export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 font-sans">
      <div className="max-w-md text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-2xl font-bold text-emerald-800 mb-2">
          Dodola Ifa Boru Special Boarding School
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Grade 9–12 Student Portal, Exeat & Academic Management System.
        </p>
        <div className="space-y-3">
          <a 
            href="/login" 
            className="block w-full bg-emerald-700 text-white font-bold py-3 rounded-xl shadow hover:bg-emerald-800 transition"
          >
            Portal Login
          </a>
        </div>
      </div>
    </main>
  );
}
