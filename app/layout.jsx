import './globals.css';

export const metadata = {
  title: 'Dodola Ifa Boru Special Boarding School',
  description: 'Portal for Grades 9-12 Boarding School Management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
