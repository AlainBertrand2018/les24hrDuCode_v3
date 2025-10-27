'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl bg-background">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-4">Les 24hr du Code</DialogTitle>
        </DialogHeader>
        <div className="prose prose-invert max-w-none text-muted-foreground font-light">
          <p>
            Conceptualized by Alain BERTRAND from Business Studio AI, this Vibe Coding Challenge is provisionally scheduled for March 13–15, 2026, at the SVICC in Pailles, Mauritius.
          </p>
          <p>
            The event is positioned as a critical hub for technological entrepreneurship and innovation in the Indian Ocean region, aiming to foster the creation of future startups.
          </p>
          <p>
            The core competition challenges 32 talents, forming 16 2-cofounder finalist teams, to design and deploy a functional Minimum Viable Product (MVP) in just 24 hours, focusing on themes like applied AI, FinTech, Socialtech, Greentech and sustainability amongst other high impact sectors.
          </p>
          <p>
            The key strategic goal is to bridge local innovators with global AI leaders like OpenAI, Google and Microsoft amongst others, while strategically positioning Mauritius as a regional innovation hub.
          </p>
          <p>
            The event is design to welcome more than 5000 visitors over 3 days through an ultra-competitive pricing strategy designed to maximize public accessibility and attendance to conferences/ keynote speeches.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
