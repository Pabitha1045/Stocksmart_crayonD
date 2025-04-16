import { createClient } from '@supabase/supabase-js'

// Debugging: Print all available environment variables
console.log('All ENV vars:', process.env)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(`
    Supabase credentials missing!
    URL: ${supabaseUrl}
    KEY: ${supabaseAnonKey}
    Check that:
    1. .env.local exists in project root
    2. Variables start with NEXT_PUBLIC_
    3. Server has been restarted
  `)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)