import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ugelhdruggumdyejqmwy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZWxoZHJ1Z2d1bWR5ZWpxbXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NDEzNTMsImV4cCI6MjA0NjIxNzM1M30.VfItVS8Gvsr_uibpmchUEJw-lVP_WlqbN4bWvBeLRfw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
