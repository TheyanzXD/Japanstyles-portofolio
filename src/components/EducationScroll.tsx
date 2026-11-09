import React from 'react';
import { EDUCATION_LIST, SITE_METADATA } from '../data/portfolioData';

interface EducationScrollProps {
  isOpen: boolean;
  onToggle: () => void;
  onReturnHome: () => void;
}

export const EducationScroll: React.FC<EducationScrollProps> = ({ isOpen, onToggle, onReturnHome }) => {
  return (
    <section id="halaman-data-diri" aria-labelledby="heading-pendidikan" className="py-10 sm:py-14 bg-[#f9f6f0]/70 border-y border-[#d8d8de]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-6">
          <h2 id="heading-pendidikan" className="text-2xl sm:text-3xl font-serif font-bold text-[#121214]">
            Jejak Akademik & Profil Diri
          </h2>
          <p className="text-[#4a4a52] text-xs sm:text-sm max-w-md mx-auto">
            Telusuri perjalanan pendidikan dan rekam jejak studi Izyan Danish dari masa awal hingga kejuruan saat ini.
          </p>
          <div className="pt-2">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="scrollWrapper"
              onClick={onToggle}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#b91c1c] text-white hover:bg-[#991b1b] font-medium text-xs sm:text-sm shadow transition-colors"
            >
              <span>{isOpen ? 'Tutup Gulungan Data Diri' : 'Buka Gulungan Data Diri'}</span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="scrollWrapper" role="region" aria-label="Detail Riwayat Pendidikan Izyan Danish" className="bg-[#ede4d3] border-x-2 border-amber-900/25 px-4 sm:px-8 py-6 sm:py-8 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#121214]/15">
              <div>
                <p className="text-xs text-[#4a4a52] uppercase tracking-wider">Nama Lengkap</p>
                <p className="text-lg sm:text-xl font-serif font-bold text-[#121214]">{SITE_METADATA.name}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs text-[#4a4a52] uppercase tracking-wider">Domisili</p>
                <p className="text-sm font-semibold text-[#1f1f23]">{SITE_METADATA.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {EDUCATION_LIST.map((edu) => (
                <article
                  key={edu.id}
                  className={`p-4 bg-[#f9f6f0] rounded-xl flex items-start justify-between gap-3 ${
                    edu.isCurrent ? 'border-2 border-[#b91c1c]/40' : 'border border-[#1f1f23]/15'
                  }`}
                >
                  <div>
                    <span className={`inline-block text-[11px] font-bold uppercase tracking-wider ${edu.isCurrent ? 'text-[#b91c1c]' : 'text-[#4a4a52]'}`}>
                      {edu.level}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#121214] mt-0.5">{edu.school}</h3>
                    <p className="text-xs text-[#4a4a52] mt-1">{edu.subtitle}</p>
                  </div>
                  <span className="font-serif text-xs font-bold text-[#b91c1c] shrink-0" aria-hidden="true">
                    {edu.kanji}
                  </span>
                </article>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#121214]/10 text-center">
              <button
                type="button"
                onClick={onReturnHome}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#2b2b30] text-[#f9f6f0] hover:bg-[#b91c1c] transition-colors text-xs sm:text-sm font-medium shadow-sm"
              >
                <span>Tutup & Kembali ke Halaman Utama</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
