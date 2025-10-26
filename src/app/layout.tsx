import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import LogoMarquee from '@/components/logo-marquee';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: 'Les 24hr du Code',
  description: 'Les 24hr du Code: The ultimate 24-hour Vibe Coding Challenge and entrepreneur competition in Mauritius. Design, code, and deploy an MVP in 24 hours. Accelerate innovation, tech entrepreneurship, and island culture with AI and global tech leaders.',
  openGraph: {
    title: 'Les 24hr du Code',
    description: 'Les 24hr du Code: The ultimate 24-hour Vibe Coding Challenge and entrepreneur competition in Mauritius. Design, code, and deploy an MVP in 24 hours. Accelerate innovation, tech entrepreneurship, and island culture with AI and global tech leaders.',
    images: ['/24hr_OG1.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="preload" href="/videos/Les24hrducode_expl_en_opt.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/Les24hrducode_Expl_Fr_opt.mp4" as="video" type="video/mp4" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen pb-24">
          {children}
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-50 py-4 bg-black/95 backdrop-blur-sm">
            <LogoMarquee />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
