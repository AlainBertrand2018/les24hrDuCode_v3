'use client';
import { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc: string;
  isOpen: boolean;
  onClose: () => void;
  onEnded: () => void;
}

export default function VideoPlayer({ videoSrc, isOpen, onClose, onEnded }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => {
        onEnded();
      };
      videoElement.addEventListener('ended', handleVideoEnd);

      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [onEnded]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
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
          ref={videoRef}
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
