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
  tier: 'Diamond' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  logo_url: string | null;
};

export type Registration = {
  id?: string;
  name: string;
  email: string;
  ticket_type: 'Standard' | 'VIP';
  created_at?: string;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  members: {
    name: string;
    avatarUrl: string;
  }[];
};
