import { createClient } from '@supabase/supabase-js'

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vrbkcxugyiecbgmxkftg.supabase.co",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_XIVFiG7vu6XwGdEOxC3QcQ_Eyq6eEFP",
}

export const supabase = createClient(
  supabaseConfig.url,
  supabaseConfig.anonKey,
  {
    auth: {
      persistSession: true,
      storage: window.localStorage,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      sessionStorage: {
        getItem: (key: string) => {
          const data = window.localStorage.getItem(key)
          if (!data) return null
          const parsed = JSON.parse(data)
          // Check if session is expired (1 day = 24 hours)
          if (parsed.expires_at && Date.now() > parsed.expires_at * 1000) {
            window.localStorage.removeItem(key)
            return null
          }
          return data
        },
        setItem: (key: string, value: string) => {
          const parsed = JSON.parse(value)
          // Set expiry to 1 day from now
          parsed.expires_at = Math.floor(Date.now() / 1000) + (24 * 60 * 60)
          window.localStorage.setItem(key, JSON.stringify(parsed))
        },
        removeItem: (key: string) => {
          window.localStorage.removeItem(key)
        }
      }
    }
  }
)
