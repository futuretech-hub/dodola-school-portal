import './globals.css';

export const metadata = {
  title: 'Dodola Ifa Boru Special Boarding School',
  description: 'Official portal for Dodola Ifa Boru Special Boarding School, Grades 9–12.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
