import { createClient } from '@supabase/supabase-js';

// We now securely proxy all Supabase requests through the Auth Worker!
// This gives you the custom domain `auth.zuup.dev` for your database completely free.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://auth.zuup.dev';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dummy_anon_key'; // You MUST add this to Cloudflare Pages!

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
