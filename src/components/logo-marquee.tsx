'use client';
import Image from 'next/image';

const logos = [
  { id: 'mauritius-gov', path: '/images/Coat_of_arms_of_Mauritius_(Original_version).svg.png' },
  { id: 'edb', path: '/images/logos/edb_logo.png' },
  { id: 'dell', path: '/images/logos/Dell_Logo.png' },
  { id: 'labourdonnais', path: '/images/logos/le_labourdonnais_logo.png' },
  { id: 'gemini', path: '/images/logos/Google_Gemini_logo.png' },
  { id: 'azure', path: '/images/logos/microsoft_azure.png' },
  { id: 'openai', path: '/images/logos/openai_wht_transp.png' },
  { id: 'mistral', path: '/images/logos/mistral_wht_transp.png' },
  { id: 'anthropic', path: '/images/logos/anthr_wht_transp.png' },
  { id: 'vercel', path: '/images/logos/vercel_wht_bk.png' },
  { id: 'emtel', path: '/images/logos/emtel_logo.png' },
  { id: 'mt', path: '/images/logos/mt_logo.png' },
  { id: 'maubank', path: '/images/logos/maubank_logo.png' },
];

export default function LogoMarquee() {
  const extendedLogos = [...logos, ...logos]; // Duplicate for seamless scroll

  return (
    <div className="marquee">
      <div className="marquee-content" style={{ animationDuration: '60s' }}>
        {extendedLogos.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="flex-shrink-0" style={{ height: '50px' }}>
            <Image
              src={logo.path}
              alt={`Sponsor Logo ${logo.id}`}
              width={160}
              height={50}
              className="h-full w-auto object-contain"
              data-ai-hint="sponsor logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
