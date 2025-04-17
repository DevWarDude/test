// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uxyoxyrnmubqwhkvpawq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4eW94eXJubXVicXdoa3ZwYXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMDM0MTAsImV4cCI6MjA1OTg3OTQxMH0.LAwBJltDtJkMbkQoR-T1smT5ibiKLnUBo09LtakK-p8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
