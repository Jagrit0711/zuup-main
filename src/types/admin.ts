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

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  image?: string;
  created_at?: string;
}

export interface ContactInfo {
  id: string;
  phone1: string;
  phone2: string;
  email1: string;
  email2: string;
}

export interface AdminPermission {
  id: string;
  admin_id: string;
  permission: 'manage_team' | 'manage_content' | 'manage_donations' | 'view_stats' | 'manage_meetings' | 'manage_admins';
  created_at: string;
}