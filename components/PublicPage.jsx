import Navbar from './Navbar';
import PublicFooter from './PublicFooter';

export default function PublicPage({ children, className = '' }) {
  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${className}`}>
      <Navbar />
      {children}
      <PublicFooter />
    </div>
  );
}
