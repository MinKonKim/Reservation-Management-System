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
      admins: {
        Row: {
          admin_id: string
          created_at: string
          email: string | null
          id: number
          name: string | null
          phone_number: string | null
          role: string
          social: string[] | null
        }
        Insert: {
          admin_id: string
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          phone_number?: string | null
          role: string
          social?: string[] | null
        }
        Update: {
          admin_id?: string
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          phone_number?: string | null
          role?: string
          social?: string[] | null
        }
        Relationships: []
      }
      memberships: {
        Row: {
          admin_id: string | null
          expirarion_date: string | null
          id: number
          membership_id: string
          membership_type: string | null
          price: number | null
          purchase_date: string
          remaining_uses: number | null
        }
        Insert: {
          admin_id?: string | null
          expirarion_date?: string | null
          id?: number
          membership_id?: string
          membership_type?: string | null
          price?: number | null
          purchase_date: string
          remaining_uses?: number | null
        }
        Update: {
          admin_id?: string | null
          expirarion_date?: string | null
          id?: number
          membership_id?: string
          membership_type?: string | null
          price?: number | null
          purchase_date?: string
          remaining_uses?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "memberships_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "admins"
            referencedColumns: ["admin_id"]
          },
        ]
      }
      payments: {
        Row: {
          created_at: string
          id: number
          memberhip_id: string | null
          payment_amount: number | null
          payment_date: string | null
          payment_id: string
          payment_status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          memberhip_id?: string | null
          payment_amount?: number | null
          payment_date?: string | null
          payment_id: string
          payment_status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          memberhip_id?: string | null
          payment_amount?: number | null
          payment_date?: string | null
          payment_id?: string
          payment_status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_memberhip_id_fkey"
            columns: ["memberhip_id"]
            isOneToOne: false
            referencedRelation: "memberships"
            referencedColumns: ["membership_id"]
          },
          {
            foreignKeyName: "payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      reservations: {
        Row: {
          created_at: string
          id: number
          notes: string | null
          reservation_date: string | null
          reservation_id: string
          space_id: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          notes?: string | null
          reservation_date?: string | null
          reservation_id: string
          space_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          notes?: string | null
          reservation_date?: string | null
          reservation_id?: string
          space_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reservations_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["space_id"]
          },
          {
            foreignKeyName: "reservations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      spaces: {
        Row: {
          admin_id: string | null
          amenities: Json | null
          available_time: string | null
          created_at: string
          id: number
          location: string | null
          maximum_capacity: number | null
          name: string | null
          space_id: string
          space_type: string | null
          updated_at: string | null
        }
        Insert: {
          admin_id?: string | null
          amenities?: Json | null
          available_time?: string | null
          created_at?: string
          id?: number
          location?: string | null
          maximum_capacity?: number | null
          name?: string | null
          space_id: string
          space_type?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_id?: string | null
          amenities?: Json | null
          available_time?: string | null
          created_at?: string
          id?: number
          location?: string | null
          maximum_capacity?: number | null
          name?: string | null
          space_id?: string
          space_type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "admins"
            referencedColumns: ["admin_id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string | null
          id: number
          name: string | null
          phone_number: string | null
          profile_image_url: string | null
          role: string
          social: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          phone_number?: string | null
          profile_image_url?: string | null
          role: string
          social?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          phone_number?: string | null
          profile_image_url?: string | null
          role?: string
          social?: string | null
          user_id?: string
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
      roles: "USER" | "ADMIN"
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
