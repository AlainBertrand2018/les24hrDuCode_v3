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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-primary transition-colors z-10"
          aria-label="Close video player"
        >
          <X className="h-8 w-8" />
        </button>
        <video
          className="w-full h-auto rounded-lg shadow-2xl"
          src={videoSrc}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}
