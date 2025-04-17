import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../service/supabase";
import { logoutUser } from "../service/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session) navigate("/dashboard");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignupSuccess = (userData) => {
    setUser(userData);
    navigate("/dashboard");
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    navigate("/dashboard");
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{
        handleLogout,
        handleLoginSuccess,
        handleSignupSuccess,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
