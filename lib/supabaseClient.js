import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)?.trim();

const hasRealValue = (value) => Boolean(value && !value.includes('YOUR_PROJECT') && !value.includes('YOUR_PUBLIC_ANON_KEY'));

export const isSupabaseConfigured = hasRealValue(supabaseUrl) && hasRealValue(supabaseAnonKey);
export const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null;
