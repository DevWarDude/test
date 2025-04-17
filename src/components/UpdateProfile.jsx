import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../service/supabase";

async function updateProfile({ balance, favourite_crypto }) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not logged in!");

  const { error } = await supabase
    .from("profiles")
    .update({ balance, favourite_crypto })
    .eq("id", user.id);

  if (error) throw error;
}

export default function UpdateProfile() {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser"]); // Refetch user data
      alert("Profile updated!");
    },
  });

  return (
    <form onSubmit={handleSubmit(mutation.mutate)}>
      <input
        {...register("balance")}
        type="number"
        placeholder="Balance"
        step="0.01"
      />
      <input
        {...register("favourite_crypto")}
        placeholder="Favourite Crypto (e.g., BTC)"
      />
      <button disabled={mutation.isLoading}>
        {mutation.isLoading ? "Updating..." : "Update Profile"}
      </button>
      {mutation.error && (
        <p style={{ color: "red" }}>{mutation.error.message}</p>
      )}
    </form>
  );
}
