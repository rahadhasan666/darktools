import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { APP_DATA, SEARCHABLE_INDEX } from '../constants/appData';
import { AppIcon } from './AppIcon';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'About', href: '#about' },
  { label: 'Compatibility', href: '#compatibility' },
  { label: 'Install Guide', href: '#install-guide' },
];

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 60);
    } else {
      setQuery('');
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredResults = SEARCHABLE_INDEX.filter(
    (item) =>
      item.label.toLowerCase().includes(query.trim().toLowerCase()) ||
      item.category.toLowerCase().includes(query.trim().toLowerCase())
  );

  const jumpToSection = (sectionId: string) => {
    setSearchOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E3E5E8] bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-[#2C2D30] dark:bg-[#131314]/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:gap-8 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01875F]"
        >
          <AppIcon size="sm" />
          <span className="font-display text-lg font-bold tracking-tight text-[#202124] dark:text-[#E8EAED]">
            {APP_DATA.name}
          </span>
        </a>

        {/* Zone 2: Concise Navigation Links (Desktop) */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#01875F] dark:hover:text-[#6DD58C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#01875F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Search, Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setSearchOpen((prev) => !prev);
            }}
            aria-label="Search app details"
            aria-expanded={searchOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#5F6368] transition-colors duration-150 hover:bg-[#F1F3F4] hover:text-[#202124] dark:text-[#9AA0A6] dark:hover:bg-[#232528] dark:hover:text-[#E8EAED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01875F]"
          >
            {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#5F6368] transition-all duration-200 hover:bg-[#F1F3F4] hover:text-[#202124] active:scale-95 dark:text-[#9AA0A6] dark:hover:bg-[#232528] dark:hover:text-[#E8EAED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01875F]"
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-[#FDD663] transition-transform duration-300 rotate-0" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 rotate-0" />
              )}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSearchOpen(false);
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#5F6368] transition-colors duration-150 hover:bg-[#F1F3F4] hover:text-[#202124] md:hidden dark:text-[#9AA0A6] dark:hover:bg-[#232528] dark:hover:text-[#E8EAED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01875F]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Interactive Search Panel */}
      {searchOpen && (
        <div className="border-t border-[#E3E5E8] bg-white px-4 py-4 shadow-lg dark:border-[#2C2D30] dark:bg-[#1A1B1E] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative flex items-center">
              <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-[#5F6368] dark:text-[#9AA0A6]" />
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search DARK TOOLS features, compatibility, or install steps..."
                className="h-11 w-full rounded-xl border border-[#DADCE0] bg-[#F8F9FA] pl-10 pr-4 text-sm text-[#202124] placeholder-[#5F6368] focus:border-[#01875F] focus:bg-white focus:outline-none dark:border-[#3C4043] dark:bg-[#131314] dark:text-[#E8EAED] dark:placeholder-[#9AA0A6] dark:focus:border-[#6DD58C]"
              />
            </div>

            <div className="mt-3 max-h-64 overflow-y-auto divide-y divide-[#F1F3F4] dark:divide-[#2C2D30]">
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => jumpToSection(item.sectionId)}
                    className="flex w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2.5 text-left text-sm transition-colors hover:bg-[#F1F3F4] dark:hover:bg-[#232528]"
                  >
                    <span className="font-medium text-[#202124] dark:text-[#E8EAED]">
                      {item.label}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[#5F6368] dark:text-[#9AA0A6] shrink-0">
                      <span>{item.category}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                ))
              ) : (
                <p className="py-4 text-center text-sm text-[#5F6368] dark:text-[#9AA0A6]">
                  No matching sections found for "{query}".
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#E3E5E8] bg-white px-4 py-3 md:hidden dark:border-[#2C2D30] dark:bg-[#1A1B1E]"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-sm font-medium text-[#202124] transition-colors hover:bg-[#F1F3F4] hover:text-[#01875F] dark:text-[#E8EAED] dark:hover:bg-[#232528] dark:hover:text-[#6DD58C]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
