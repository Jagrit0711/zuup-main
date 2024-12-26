import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// Test the connection
void supabase
  .from('daily_updates')
  .select('*')
  .limit(1)
  .then(() => {
    console.log('Successfully connected to Supabase!');
  })
  .catch((error: Error) => {
    console.error('Supabase connection error:', error);
  });