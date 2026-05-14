import { createClient } from '@supabase/supabase-js'

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vrbkcxugyiecbgmxkftg.supabase.co",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_XIVFiG7vu6XwGdEOxC3QcQ_Eyq6eEFP",
}

export const supabase = createClient(
  supabaseConfig.url,
  supabaseConfig.anonKey
)
