'use client';
import type { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { User, Shield } from 'lucide-react';

type HeaderProps = {
  isAdminView: boolean;
  setIsAdminView: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ isAdminView, setIsAdminView }: HeaderProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/24hr_logo.webp"
            alt="Les 24hr du Code Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            Les 24hr du Code
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <a href="#schedule-section" onClick={(e) => handleNavClick(e, 'schedule-section')} className="hover:text-foreground transition-colors">Schedule</a>
            <a href="#sponsors-section" onClick={(e) => handleNavClick(e, 'sponsors-section')} className="hover:text-foreground transition-colors">Sponsors</a>
            <a href="#registration-section" onClick={(e) => handleNavClick(e, 'registration-section')} className="hover:text-foreground transition-colors">Register</a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsAdminView(!isAdminView)}
          aria-label={isAdminView ? 'Switch to public view' : 'Switch to admin view'}
        >
          {isAdminView ? <User className="h-5 w-5" /> : <Shield className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
}
