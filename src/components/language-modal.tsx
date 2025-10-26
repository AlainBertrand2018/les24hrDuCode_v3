'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLanguage: (language: 'en' | 'fr') => void;
}

export default function LanguageModal({ isOpen, onClose, onSelectLanguage }: LanguageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl bg-background">
        <DialogHeader className="sr-only">
          <DialogTitle>Choose Language</DialogTitle>
          <DialogDescription>Select your preferred language to watch the explainer video.</DialogDescription>
        </DialogHeader>
        <div className="flex justify-around items-start gap-8 py-4 text-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground max-w-xs">
              Welcome! We're honored to present the concept of Les 24hr du Code. Choose your language to watch the explainer video.
            </p>
            <button
              onClick={() => onSelectLanguage('en')}
              className="group flex flex-col items-center gap-2"
            >
              <div className="relative h-[67px] w-[100px]">
                <Image
                  src="/images/usa-flag-in-waves-effect.png"
                  alt="English"
                  fill
                  className="rounded-md border-2 border-transparent object-cover group-hover:border-primary group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">English</span>
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground max-w-xs">
                Bienvenue ! Nous sommes honorés de vous présenter le concept des 24hr du Code. Choisissez votre langue pour regarder la vidéo explicative.
            </p>
            <button
              onClick={() => onSelectLanguage('fr')}
              className="group flex flex-col items-center gap-2"
            >
              <div className="relative h-[67px] w-[100px]">
                <Image
                  src="/images/france-flag-in-waves-effect.png"
                  alt="Français"
                  fill
                  className="rounded-md border-2 border-transparent object-cover group-hover:border-primary group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">Français</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
