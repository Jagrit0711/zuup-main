export interface AdminUser {
  username: string;
  password: string;
  role: 'super_admin' | 'team_member';
  name: string;
}

export interface DailyUpdate {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
  userName: string;
}

export interface DonationEntry {
  id: string;
  userId: string;
  amount: number;
  screenshot: string;
  timestamp: string;
  userName: string;
  description: string;
}