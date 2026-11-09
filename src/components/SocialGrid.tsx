import React from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const SocialGrid: React.FC = () => {
  return (
    <section id="tautan-sosmed" aria-labelledby="heading-kontak" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <h2 id="heading-kontak" className="text-2xl sm:text-3xl font-serif font-bold text-[#121214]">
            Terhubung dengan Izyan Danish
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.isEmail ? undefined : '_blank'}
              rel={item.isEmail ? undefined : 'noopener noreferrer'}
              className="group p-4 bg-[#f9f6f0] rounded-xl border border-[#d8d8de] hover:border-[#b91c1c] shadow-sm hover:shadow-md transition-all flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-lg bg-[#121214] group-hover:bg-[#b91c1c] text-white flex items-center justify-center shrink-0 transition-colors font-serif font-bold text-xs">
                {item.platform.slice(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0">
                <h3 className="font-serif font-bold text-sm text-[#121214] group-hover:text-[#b91c1c] transition-colors">
                  {item.platform}
                </h3>
                <p className="text-xs text-[#4a4a52] truncate">{item.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
