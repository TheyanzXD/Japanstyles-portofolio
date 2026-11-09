import React from 'react';

interface HeaderProps {
  isScrollOpen: boolean;
  onOpenScroll: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isScrollOpen, onOpenScroll }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#f9f6f0]/95 backdrop-blur-md border-b border-[#d8d8de]/70 shadow-sm">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex flex-wrap items-center justify-between gap-x-2 gap-y-2">
        <a
          href="#beranda"
          className="flex items-center gap-2 sm:gap-3 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c] rounded-lg py-0.5"
          aria-label="Beranda Izyan Danish"
        >
          <span className="border-2 border-[#b91c1c] text-[#b91c1c] bg-[#b91c1c]/5 rounded px-1.5 sm:px-2 py-0.5 font-serif font-bold text-xs sm:text-base shrink-0" aria-hidden="true">
            伊然
          </span>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-sm sm:text-xl font-bold tracking-tight text-[#121214] group-hover:text-[#b91c1c] transition-colors whitespace-nowrap leading-snug">
              Izyan Danish
            </span>
            <span className="hidden sm:block text-[11px] text-[#4a4a52] tracking-wider uppercase leading-tight">
              墨絵 • Portofolio
            </span>
          </div>
        </a>

        <nav aria-label="Navigasi Utama" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium shrink-0">
          <a href="#beranda" className="px-2 sm:px-3 py-1.5 rounded-lg text-[#1f1f23] hover:text-[#b91c1c] hover:bg-[#f3ece0] transition-colors whitespace-nowrap">
            Beranda
          </a>
          <button
            type="button"
            aria-expanded={isScrollOpen}
            aria-controls="scrollWrapper"
            onClick={onOpenScroll}
            className="px-2 sm:px-3 py-1.5 rounded-lg text-[#1f1f23] hover:text-[#b91c1c] hover:bg-[#f3ece0] transition-colors whitespace-nowrap"
          >
            Data Diri
          </button>
          <a href="#tautan-sosmed" className="px-2 sm:px-3 py-1.5 rounded-lg text-[#1f1f23] hover:text-[#b91c1c] hover:bg-[#f3ece0] transition-colors whitespace-nowrap">
            Kontak
          </a>
        </nav>
      </div>
    </header>
  );
};
