import { createContext, useEffect, useState } from "react";
import { supabase } from "../service/supabase";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const UserContext = createContext();

async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return { ...user, profile };
}

const UserProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const {
    data: user,
    isLoading,
    isFetching,
    isPending,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    onSuccess: () => setIsInitialLoad(false),
  });

  // Listen to auth state changes
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
        queryClient.invalidateQueries(["currentUser"]);
      }
    });

    return () => subscription.unsubscribe();
  }, [queryClient]);

  return (
    <UserContext.Provider
      value={{
        user,
        isFetching,
        isPending,
        isLoading: isLoading && isInitialLoad,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
