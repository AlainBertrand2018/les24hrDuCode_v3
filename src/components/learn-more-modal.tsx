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
        <div className="prose prose-invert max-w-none text-muted-foreground font-light space-y-4">
          <h3 className="text-xl font-semibold text-primary">The Indian Ocean's Premier Vibe Coding Challenge</h3>
          <p>
            Conceptualized by Alain Bertrand of Business Studio AI, Les 24hr du Code is a 3-day innovation summit, provisionally scheduled for March 13–15, 2026, at the SVICC in Pailles, Mauritius.
          </p>
          <p>
            More than a hackathon, this event is positioned as a critical hub for technological entrepreneurship and innovation across the Indian Ocean region, aiming to foster the creation of future startups. The summit features high-level keynote speeches, conferences, and workshops designed to attract over 5,000 visitors, made highly accessible through an ultra-competitive pricing strategy.
          </p>
          <p>
            The core competition challenges 16 finalist teams (two co-founders each) to design and deploy a functional Minimum Viable Product (MVP) in just 24 hours. Teams will focus on high-impact sectors, including Applied AI, FinTech, SocialTech, GreenTech, and Sustainability.
          </p>
          <p>
            The key strategic goal is to bridge local innovators with global AI leaders like OpenAI, Google, and Microsoft, thereby strategically positioning Mauritius as a regional innovation hub.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
