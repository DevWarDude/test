import { useNavigate } from "react-router-dom";
import { supabase } from "../service/supabase";

export default function Logout({ children, collapsed }) {
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (!error) navigate("/login");
  }

  return (
    <div
      className={`sidebar-item cursor-pointer ${collapsed && "md:w-[45px]"}`}
      onClick={handleLogout}
    >
      {children}
    </div>
  );
}
