import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="w-full py-6 px-4 md:px-8 flex justify-between items-center z-50">
      <Link to="/" className="flex items-center gap-2 group">
        <motion.div 
          initial={{ rotate: -10 }}
          whileHover={{ rotate: 0 }}
          className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(123,46,218,0.5)]"
        >
          <span className="text-white font-black text-xl italic">B</span>
        </motion.div>
        <span className="text-2xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
          BLACKXx <span className="text-accent">SENSI</span>
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-white' : ''}`}>Home</Link>
        <Link to="/premium" className={`nav-link ${location.pathname === '/premium' ? 'text-white' : ''}`}>Premium</Link>
        <Link to="/free" className={`nav-link ${location.pathname === '/free' ? 'text-white' : ''}`}>Free</Link>
      </nav>

      {!isHome && (
        <Link to="/" className="md:hidden text-secondary-text hover:text-white">
          Home
        </Link>
      )}
    </header>
  );
}
