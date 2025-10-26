'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const logos = [
  { src: '/images/Coat_of_arms_of_Mauritius_(Original_version).svg.png', alt: 'Coat of arms of Mauritius' },
  { src: '/images/logos/edb_logo.png', alt: 'EDB Logo' },
  { src: '/images/logos/Dell_Logo.png', alt: 'Dell Logo' },
  { src: '/images/logos/le_labourdonnais_logo.png', alt: 'Le Labourdonnais Logo' },
  { src: '/images/logos/Google_Gemini_logo.png', alt: 'Google Gemini Logo' },
  { src: '/images/logos/microsoft_azure.png', alt: 'Microsoft Azure Logo' },
  { src: '/images/logos/openai_wht_transp.png', alt: 'OpenAI Logo' },
  { src: '/images/logos/mistral_wht_transp.png', alt: 'Mistral AI Logo' },
  { src: '/images/logos/anthr_wht_transp.png', alt: 'Anthropic Logo' },
  { src: '/images/logos/vercel_wht_bk.png', alt: 'Vercel Logo' },
  { src: '/images/logos/emtel_logo.png', alt: 'Emtel Logo' },
  { src: '/images/logos/mt_logo.png', alt: 'Mauritius Telecom Logo' },
  { src: '/images/logos/maubank_logo.png', alt: 'MauBank Logo' },
];

// Ensure we have a multiple of 5, or handle the remainder gracefully
const CHUNK_SIZE = 5;
const logoChunks: typeof logos[] = [];
for (let i = 0; i < logos.length; i += CHUNK_SIZE) {
    logoChunks.push(logos.slice(i, i + CHUNK_SIZE));
}
// Pad the last chunk if it's not full
const lastChunk = logoChunks[logoChunks.length - 1];
if (lastChunk && lastChunk.length < CHUNK_SIZE) {
    const missing = CHUNK_SIZE - lastChunk.length;
    for (let i = 0; i < missing; i++) {
        lastChunk.push({ src: '', alt: '' }); // Push empty items for spacing
    }
}

export default function LogoFader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logoChunks.length);
        setIsFading(false);
      }, 500); // Fade out duration
    }, 3000); // 3 seconds visible

    return () => clearInterval(interval);
  }, []);

  const currentLogos = logoChunks[currentIndex];

  return (
    <div className="w-full h-[120px] bg-black/20 flex items-center justify-center">
      <div
        className={cn(
          "grid grid-cols-5 gap-x-8 w-full max-w-6xl items-center justify-items-center transition-opacity duration-500",
          isFading ? 'opacity-0' : 'opacity-100'
        )}
      >
        {currentLogos.map((logo, index) => (
          <div key={index} className="h-full flex items-center justify-center p-2">
            {logo.src ? (
                <div className="relative h-full w-full max-h-[80px]">
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                    />
                </div>
            ) : (
                <div className="w-full h-full"/> // Placeholder for empty slots
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
