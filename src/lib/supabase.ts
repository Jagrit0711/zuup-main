import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

// Test the connection and storage access
void (async () => {
  try {
    const { data: bucketList } = await supabase.storage.listBuckets();
    console.log('Successfully connected to Supabase!');
    console.log('Available buckets:', bucketList?.map(b => b.name));
  } catch (error) {
    console.error('Supabase connection error:', error);
  }
})();