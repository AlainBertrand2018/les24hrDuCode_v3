'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/expo', label: 'Expo' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/teams', label: 'Teams' },
  { href: '/mentors', label: 'Mentors' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/live', label: 'Live Feed' },
];

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-3">
            <Link href="/home" className="flex items-center gap-3">
              <Image
                src="/images/24hr_logo.webp"
                alt="Les 24hr du Code Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h1 className="text-lg font-semibold tracking-tight text-foreground hidden sm:block">
                Les 24hr du Code
              </h1>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-muted-foreground">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/profile">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Profile</span>
                </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium mt-10">
                    {navLinks.map(link => (
                      <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                        {link.label}
                      </Link>
                    ))}
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
