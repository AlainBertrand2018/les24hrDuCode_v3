'use client';

import { useState, useEffect } from 'react';

const EVENT_DATE = new Date('2026-03-06T09:00:00');

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = EVENT_DATE.getTime() - now.getTime();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };
    
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const renderPlaceholder = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {[ 'Days', 'Hours', 'Minutes', 'Seconds'].map((unit) => (
         <div key={unit} className="flex flex-col items-center justify-center p-2 rounded-lg w-24 sm:w-32 md:w-40">
            <span className="font-sans font-bold leading-none text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]" style={{ color: '#161537' }}>00</span>
            <span className="text-muted-foreground text-xs uppercase tracking-wider">{unit}</span>
        </div>
      ))}
    </div>
  );
  
  if (!isClient) {
    return renderPlaceholder();
  }

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {timeUnits.map(unit => (
        <div key={unit.label} className="flex flex-col items-center justify-center p-2 rounded-lg w-24 sm:w-32 md:w-40">
          <span className="font-sans font-bold leading-none text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]" style={{ color: '#161537' }}>
            {formatTime(unit.value)}
          </span>
          <span className="text-muted-foreground text-xs uppercase tracking-wider">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
