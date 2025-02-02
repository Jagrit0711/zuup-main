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
      about_content: {
        Row: {
          bio: string
          education: string[]
          experience: string[]
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          bio: string
          education?: string[]
          experience?: string[]
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          bio?: string
          education?: string[]
          experience?: string[]
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          id: string
          name: string
          password: string
          role: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          password: string
          role: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          password?: string
          role?: string
          username?: string
        }
        Relationships: []
      }
      contact_info: {
        Row: {
          email1: string
          email2: string
          id: string
          phone1: string
          phone2: string
          updated_at: string | null
        }
        Insert: {
          email1: string
          email2: string
          id?: string
          phone1: string
          phone2: string
          updated_at?: string | null
        }
        Update: {
          email1?: string
          email2?: string
          id?: string
          phone1?: string
          phone2?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      daily_updates: {
        Row: {
          content: string
          created_at: string | null
          id: string
          user_id: string
          user_name: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          user_id: string
          user_name: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          user_id?: string
          user_name?: string
        }
        Relationships: []
      }
      donations: {
        Row: {
          amount: number
          created_at: string | null
          description: string
          id: string
          screenshot_url: string
          user_id: string
          user_name: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          description: string
          id?: string
          screenshot_url: string
          user_id: string
          user_name: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string
          id?: string
          screenshot_url?: string
          user_id?: string
          user_name?: string
        }
        Relationships: []
      }
      educational_resources: {
        Row: {
          category: string
          chapter: string | null
          class_level: Database["public"]["Enums"]["class_level"] | null
          created_at: string
          created_by: string | null
          description: string | null
          file_type: string
          file_url: string
          id: string
          is_premium: boolean | null
          last_viewed: string | null
          preview_url: string | null
          subject: Database["public"]["Enums"]["subject_type"] | null
          thumbnail_url: string | null
          title: string
          updated_at: string
          view_count: number | null
        }
        Insert: {
          category: string
          chapter?: string | null
          class_level?: Database["public"]["Enums"]["class_level"] | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          file_type: string
          file_url: string
          id?: string
          is_premium?: boolean | null
          last_viewed?: string | null
          preview_url?: string | null
          subject?: Database["public"]["Enums"]["subject_type"] | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          view_count?: number | null
        }
        Update: {
          category?: string
          chapter?: string | null
          class_level?: Database["public"]["Enums"]["class_level"] | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          file_type?: string
          file_url?: string
          id?: string
          is_premium?: boolean | null
          last_viewed?: string | null
          preview_url?: string | null
          subject?: Database["public"]["Enums"]["subject_type"] | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          view_count?: number | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          company: string
          created_at: string | null
          deadline: string
          description: string
          id: string
          job_type: string
          location: string
          requirements: string
          salary_range: string
          title: string
        }
        Insert: {
          company: string
          created_at?: string | null
          deadline: string
          description: string
          id?: string
          job_type: string
          location: string
          requirements: string
          salary_range: string
          title: string
        }
        Update: {
          company?: string
          created_at?: string | null
          deadline?: string
          description?: string
          id?: string
          job_type?: string
          location?: string
          requirements?: string
          salary_range?: string
          title?: string
        }
        Relationships: []
      }
      meetings: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          meeting_id: string
          meeting_token: string | null
          participant_count: number | null
          status: string | null
          title: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          meeting_id: string
          meeting_token?: string | null
          participant_count?: number | null
          status?: string | null
          title: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          meeting_id?: string
          meeting_token?: string | null
          participant_count?: number | null
          status?: string | null
          title?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      team_members: {
        Row: {
          created_at: string | null
          description: string
          id: string
          image: string | null
          linkedin: string | null
          name: string
          role: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          image?: string | null
          linkedin?: string | null
          name: string
          role: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          image?: string | null
          linkedin?: string | null
          name?: string
          role?: string
        }
        Relationships: []
      }
      team_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          user_id: string
          user_name: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          user_id: string
          user_name: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          user_id?: string
          user_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      class_level: "class_6" | "class_7" | "class_8"
      resource_category: "notes" | "lesson_plans" | "tests" | "revision"
      subject_type: "chemistry" | "biology" | "physics"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
