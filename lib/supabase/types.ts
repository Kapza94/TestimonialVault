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
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          created_at: string
          author_name: string
          author_title: string
          content: string
          rating: number
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          author_name: string
          author_title: string
          content: string
          rating: number
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          author_name?: string
          author_title?: string
          content?: string
          rating?: number
          user_id?: string
        }
      }
      widgets: {
        Row: {
          id: string
          created_at: string
          name: string
          type: string
          settings: Json
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          type: string
          settings: Json
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          type?: string
          settings?: Json
          user_id?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          lemon_user_id: string | null
          plan: 'free' | 'pro' | 'agency'
          status: 'active' | 'inactive' | 'cancelled'
          current_period_end: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lemon_user_id?: string | null
          plan?: 'free' | 'pro' | 'agency'
          status?: 'active' | 'inactive' | 'cancelled'
          current_period_end?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lemon_user_id?: string | null
          plan?: 'free' | 'pro' | 'agency'
          status?: 'active' | 'inactive' | 'cancelled'
          current_period_end?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}