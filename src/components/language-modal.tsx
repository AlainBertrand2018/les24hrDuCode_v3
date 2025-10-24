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
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle>Choose a Language</DialogTitle>
          <DialogDescription>
            Select your preferred language to watch the video.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center gap-8 py-4">
          <button
            onClick={() => onSelectLanguage('en')}
            className="group flex flex-col items-center gap-2"
          >
            <Image
              src="/images/us.webp"
              alt="English"
              width={100}
              height={67}
              className="rounded-md border-2 border-transparent group-hover:border-primary group-hover:scale-105 transition-transform"
            />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">English</span>
          </button>
          <button
            onClick={() => onSelectLanguage('fr')}
            className="group flex flex-col items-center gap-2"
          >
            <Image
              src="/images/fr.webp"
              alt="Français"
              width={100}
              height={67}
              className="rounded-md border-2 border-transparent group-hover:border-primary group-hover:scale-105 transition-transform"
            />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">Français</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
