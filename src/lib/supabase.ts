import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// Test the connection using a simple query that will work even if the table is empty
void supabase
  .from('daily_updates')
  .select('*')
  .limit(1)
  .then(() => console.log('Successfully connected to Supabase!'))
  .catch((error) => console.error('Supabase connection error:', error));