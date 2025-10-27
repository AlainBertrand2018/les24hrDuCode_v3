import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import LogoMarquee from '@/components/logo-marquee';
import Footer from '@/components/footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        <link rel="preload" href="/videos/Les24hrducode_expl_en_opt.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/Les24hrducode_Expl_Fr_opt.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/A Nation Digital Future_en.mp4" as="video" type="video/mp4" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen pb-56">
          {children}
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-50">
            <div className="py-4">
              <LogoMarquee />
            </div>
            <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
