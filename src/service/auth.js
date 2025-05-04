import { supabase } from "./supabaseClient";

// Signup
export async function signupUser({ username, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { username } }, // Store username in user metadata
  });
  if (error) throw new Error(error.message);
  if (!data.user) throw new Error("No user returned after signup");
  console.log("erro from server");

  return data.user;
}

// Login
export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  console.log("erro from server");

  return data.user;
}

// Logout
export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
  console.log("erro from server");
}
