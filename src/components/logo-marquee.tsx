'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const logos = [
    { id: 'd1', name: 'Ministry of IT', logo_url: '/images/Coat_of_arms_of_Mauritius_(Original_version).svg.png' },
    { id: 'd2', name: 'EDB', logo_url: '/images/logos/edb_logo.png' },
    { id: 'd3', name: 'Dell', logo_url: '/images/logos/Dell_Logo.png' },
    { id: 'd4', name: 'Le Labourdonnais Hotel', logo_url: '/images/logos/le_labourdonnais_logo.png' },
    { id: 'p1', name: 'Google Gemini', logo_url: '/images/logos/Google_Gemini_logo.png' },
    { id: 'p2', name: 'Microsoft Azure', logo_url: '/images/logos/microsoft_azure.png' },
    { id: 'p3', name: 'OpenAI', logo_url: '/images/logos/openai_wht_transp.png' },
    { id: 'p4', name: 'Mistral AI', logo_url: '/images/logos/mistral_wht_transp.png' },
    { id: 'p5', name: 'Anthropic', logo_url: '/images/logos/anthr_wht_transp.png' },
    { id: 'p6', name: 'Vercel', logo_url: '/images/logos/vercel.png' },
    { id: 'g1', name: 'Emtel', logo_url: '/images/logos/emtel_logo_wht.png' },
    { id: 'g2', name: 'Mauritius Telecom', logo_url: '/images/logos/mt_logo.png' },
    { id: 'g3', name: 'MauBank', logo_url: '/images/logos/maubank_logo.png' },
];

export default function LogoMarquee() {
  return (
    <Marquee pauseOnHover speed={55}>
        <div className="flex items-center">
        {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="mx-8 flex justify-center items-center h-32">
                <Image
                    src={logo.logo_url}
                    alt={logo.name}
                    width={234}
                    height={91}
                    className="object-contain max-h-28"
                />
            </div>
        ))}
        </div>
    </Marquee>
  );
}
