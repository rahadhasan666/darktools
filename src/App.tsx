/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewCarousel } from './components/OverviewCarousel';
import { AboutAndInfoSection } from './components/AboutAndInfoSection';
import { CompatibilityAndInstallSection } from './components/CompatibilityAndInstallSection';
import { Footer } from './components/Footer';

type ThemeMode = 'light' | 'dark';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = localStorage.getItem('dark-tools-theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('dark-tools-theme', theme);
    } catch {
      // Ignore storage access errors in private browsing
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-[#202124] transition-colors duration-300 dark:bg-[#131314] dark:text-[#E8EAED]">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <HeroSection />
          <OverviewCarousel />
          <AboutAndInfoSection />
          <CompatibilityAndInstallSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
