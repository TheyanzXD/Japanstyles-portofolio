import React from 'react';
import { SITE_METADATA } from '../data/portfolioData';

interface HeroProps {
  isScrollOpen: boolean;
  onOpenScroll: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isScrollOpen, onOpenScroll }) => {
  return (
    <section id="beranda" className="relative py-10 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply pointer-events-none select-none" aria-hidden="true">
        <img
          src="/sumie_bg.webp"
          alt=""
          width={1280}
          height={714}
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f9f6f0] border border-[#d8d8de] shadow-sm">
              <span className="border border-[#b91c1c] text-[#b91c1c] text-xs py-0.5 px-1.5 rounded font-bold" aria-hidden="true">
                和風
              </span>
              <span className="text-xs font-semibold tracking-wider text-[#4a4a52] uppercase">
                Estetika Sumi-e & Web Modern
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-[#121214] leading-tight">
                Izyan <span className="text-[#b91c1c] underline decoration-[#121214] decoration-4 underline-offset-8">Danish</span>
              </h1>
              <p className="font-serif text-base sm:text-lg text-[#1f1f23] italic">
                {SITE_METADATA.quote}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#4a4a52] leading-relaxed max-w-xl mx-auto lg:mx-0">
  Talenta muda <strong className="text-[#121214] font-semibold">SMKN 1 Bangkinang Kota</strong> yang merancang pengalaman web interaktif berbasis <strong className="text-[#121214] font-semibold">JavaScript & TypeScript</strong>.
</p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                type="button"
                aria-expanded={isScrollOpen}
                aria-controls="scrollWrapper"
                onClick={onOpenScroll}
                className="px-6 py-3.5 bg-[#121214] text-[#f9f6f0] font-medium rounded-xl shadow-md hover:bg-[#b91c1c] transition-all inline-flex items-center gap-3 text-sm sm:text-base"
              >
                <span>Lihat Data Diri & Pendidikan</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-56 sm:w-64 md:w-72">
              <div className="relative z-10 rounded-xl overflow-hidden border border-[#1f1f23] bg-[#f9f6f0] shadow-md">
                <img
                  src="/izyan_avatar.webp"
                  alt="Potret ilustrasi tinta Sumi-e Izyan Danish"
                  width={600}
                  height={600}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto aspect-square object-cover contrast-110"
                />
                <div className="p-3 bg-[#f9f6f0] border-t border-[#d8d8de]/60 flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-sm text-[#121214]">{SITE_METADATA.name}</p>
                    <p className="text-[11px] text-[#4a4a52]">{SITE_METADATA.location}</p>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 bg-[#b91c1c]/10 text-[#b91c1c] rounded font-semibold border border-[#b91c1c]/20">
                    SMK Aktif
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
