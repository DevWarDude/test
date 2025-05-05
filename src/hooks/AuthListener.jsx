import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../service/supabase";

export default function AuthListener() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") navigate("/dashboard");
      if (event === "SIGNED_OUT") navigate("/login");
    });
  }, [navigate]);

  return null; // This component doesn’t render anything
}
