'use client';

import { X } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoPlayer({ videoSrc, isOpen, onClose }: VideoPlayerProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={onClose}
    >
      <div 
        className="relative w-screen h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-20 bg-black/30 rounded-full p-2"
          aria-label="Close video player"
        >
          <X className="h-8 w-8" />
        </button>
        <video
          className="w-full h-full object-contain"
          src={videoSrc}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}
