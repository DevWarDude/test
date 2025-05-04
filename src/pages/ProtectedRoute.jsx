import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../service/supabaseClient";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/login");
    });
  }, []);

  return children;
}
