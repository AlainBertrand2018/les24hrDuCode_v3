'use client';

import Image from 'next/image';

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

// Duplicate the logos for a seamless loop
const doubledLogos = [...logos, ...logos];

export default function LogoMarquee() {
  return (
    <div className="w-full h-[120px] overflow-hidden bg-black/20">
      <div className="marquee-track flex flex-row flex-nowrap h-full">
        {doubledLogos.map((logo, index) => (
          <div
            key={index}
            className="logo-item h-full p-4 shrink-0 flex items-center justify-center"
          >
            <div className="relative h-full w-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
