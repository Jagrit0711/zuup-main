export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      daily_updates: {
        Row: {
          id: string
          user_id: string
          content: string
          created_at: string
          user_name: string
        }
        Insert: {
          id?: string
          user_id: string
          content: string
          created_at?: string
          user_name: string
        }
      }
      team_members: {
        Row: {
          id: string
          name: string
          role: string
          description: string
          linkedin: string | null
          image: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          description: string
          linkedin?: string | null
          image?: string | null
          created_at?: string
        }
      }
      donations: {
        Row: {
          id: string
          user_id: string
          amount: number
          screenshot_url: string
          created_at: string
          user_name: string
          description: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          screenshot_url: string
          created_at?: string
          user_name: string
          description: string
        }
      }
      contact_info: {
        Row: {
          id: string
          phone1: string
          phone2: string
          email1: string
          email2: string
          updated_at: string
        }
        Insert: {
          id?: string
          phone1: string
          phone2: string
          email1: string
          email2: string
          updated_at?: string
        }
      }
    }
  }
}