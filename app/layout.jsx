import './globals.css';

export const metadata = {
  title: 'Dodola Ifa Boru Special Boarding School',
  description: 'Official Boarding School Portal for Grades 9-12',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
