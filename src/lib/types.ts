export type Schedule = {
  id: string;
  title: string;
  speaker: string;
  start_time: string; // "HH:mm:ss" format
  duration_minutes: number;
};

export type Sponsor = {
  id: string;
  name: string;
  tier: 'Gold' | 'Silver' | 'Bronze';
  logo_url: string | null;
};

export type Registration = {
  id?: string;
  name: string;
  email: string;
  ticket_type: 'Standard' | 'VIP';
  created_at?: string;
};
