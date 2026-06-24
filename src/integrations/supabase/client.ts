import { createClient } from '@supabase/supabase-js';

// We now securely proxy all Supabase requests through the Auth Worker!
// This gives you the custom domain `auth.zuup.dev` for your database completely free.
const supabaseUrl = 'https://auth.zuup.dev';
const supabaseAnonKey = 'dummy_anon_key'; // Proxy auth key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
