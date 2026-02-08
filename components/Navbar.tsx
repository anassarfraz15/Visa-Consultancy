
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">public</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Anas Visa Experts</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-primary'
                  : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
          >
            Book Consultation
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
           <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 transition-colors"
          >
            <span className="material-symbols-outlined">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                isActive(link.path)
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full mt-4 text-center py-3 rounded-lg bg-primary font-bold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
