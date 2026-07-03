import { createClient } from '@supabase/supabase-js';

// We now securely proxy all Supabase requests through the Auth Worker!
// This gives you the custom domain `auth.zuup.dev` for your database completely free.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://auth.zuup.dev';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'cXf0brLRgusxT#JoR!W6N&-&J=DYfvK7(qjWKvnqSIQm+aCOMZ+ZR)Sa)Wza*!J#ctKmRyFk7W-4wA(8a^Kr@c(6zuIsgSg8@rXF';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
