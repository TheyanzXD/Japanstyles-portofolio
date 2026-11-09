import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EducationScroll } from './components/EducationScroll';
import { SocialGrid } from './components/SocialGrid';

export default function App() {
  const [isScrollOpen, setIsScrollOpen] = useState<boolean>(false);

  const handleOpenAndScroll = useCallback(() => {
    setIsScrollOpen(true);
    const el = document.getElementById('halaman-data-diri');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleReturnHome = useCallback(() => {
    setIsScrollOpen(false);
    const hero = document.getElementById('beranda');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f3eb] text-[#121214] flex flex-col justify-between">
      <Header isScrollOpen={isScrollOpen} onOpenScroll={handleOpenAndScroll} />
      <main id="main-content" className="flex-grow">
        <Hero isScrollOpen={isScrollOpen} onOpenScroll={handleOpenAndScroll} />
        <EducationScroll
          isOpen={isScrollOpen}
          onToggle={() => setIsScrollOpen((prev) => !prev)}
          onReturnHome={handleReturnHome}
        />
        <SocialGrid />
      </main>
      <footer className="bg-[#121214] text-[#d8d8de] py-6 border-t border-[#2b2b30]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#71717a]">
          <p className="font-serif text-white font-semibold">Izyan Danish — 墨絵 Sumi-e</p>
          <p>© 2026 Izyan Danish</p>
        </div>
      </footer>
    </div>
  );
}
