const { createClient } = require('@supabase/supabase-js');
	
	const supabaseUrl = 'https://tyjnzpuzbxvkwpvfkira.supabase.co'; // Replace with your Supabase URL
	const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5am56cHV6Ynh2a3dwdmZraXJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMDUyMzksImV4cCI6MjA1OTU4MTIzOX0.9AHCdqo5J-pM_Tx1lzi50p9GzM4rlw00DIknFuoj6o4'; // Replace with your Supabase Anon Key
	
	const supabase = createClient(supabaseUrl, supabaseAnonKey);
	
	module.exports = supabase;