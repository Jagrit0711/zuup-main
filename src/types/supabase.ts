export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      team_members: {
        Row: {
          id: number
          name: string
          role: string
          description: string
          linkedin: string | null
          image: string | null
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          role: string
          description: string
          linkedin?: string | null
          image?: string | null
          created_at?: string
        }
      }
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
          id: number
          phone1: string
          phone2: string
          email1: string
          email2: string
          updated_at: string
        }
        Insert: {
          id?: number
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