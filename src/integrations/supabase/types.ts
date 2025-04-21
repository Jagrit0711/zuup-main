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
      admin_permissions: {
        Row: {
          admin_id: string | null
          created_at: string | null
          id: string
          permission: Database["public"]["Enums"]["admin_permission"]
        }
        Insert: {
          admin_id?: string | null
          created_at?: string | null
          id?: string
          permission: Database["public"]["Enums"]["admin_permission"]
        }
        Update: {
          admin_id?: string | null
          created_at?: string | null
          id?: string
          permission?: Database["public"]["Enums"]["admin_permission"]
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          password: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          password: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          password?: string
        }
        Relationships: []
      }
      blog_authors: {
        Row: {
          bio: string | null
          created_at: string | null
          email: string
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          email: string
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_id: string | null
          author_name: string
          content: string
          content_html: string | null
          created_at: string | null
          id: string
          image_url: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          author_name: string
          content: string
          content_html?: string | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          author_name?: string
          content?: string
          content_html?: string | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          title?: string
          updated_at?: string | null
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
      gallery_items: {
        Row: {
          created_at: string | null
          description: string | null
          file_type: string
          file_url: string
          id: string
          title: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          file_type: string
          file_url: string
          id?: string
          title?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          file_type?: string
          file_url?: string
          id?: string
          title?: string | null
          user_id?: string
        }
        Relationships: []
      }
      hackathon_events: {
        Row: {
          collaboration_partners: Json | null
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          prizes: Json | null
          registration_deadline: string | null
          registration_fee: number | null
          registration_link: string | null
          start_date: string | null
          updated_at: string | null
        }
        Insert: {
          collaboration_partners?: Json | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          prizes?: Json | null
          registration_deadline?: string | null
          registration_fee?: number | null
          registration_link?: string | null
          start_date?: string | null
          updated_at?: string | null
        }
        Update: {
          collaboration_partners?: Json | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          prizes?: Json | null
          registration_deadline?: string | null
          registration_fee?: number | null
          registration_link?: string | null
          start_date?: string | null
          updated_at?: string | null
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
      admin_permission:
        | "manage_team"
        | "manage_content"
        | "manage_donations"
        | "view_stats"
        | "manage_meetings"
        | "manage_admins"
      class_level: "class_6" | "class_7" | "class_8"
      resource_category: "notes" | "lesson_plans" | "tests" | "revision"
      subject_type: "chemistry" | "biology" | "physics"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admin_permission: [
        "manage_team",
        "manage_content",
        "manage_donations",
        "view_stats",
        "manage_meetings",
        "manage_admins",
      ],
      class_level: ["class_6", "class_7", "class_8"],
      resource_category: ["notes", "lesson_plans", "tests", "revision"],
      subject_type: ["chemistry", "biology", "physics"],
    },
  },
} as const
