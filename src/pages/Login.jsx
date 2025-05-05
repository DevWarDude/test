import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { supabase } from "../service/supabase";
import ErrorComponent from "../components/ErrorComponent";

function Login() {
  const [isOnline] = useState(navigator.onLine);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["currentUser"]);
      toast.success("Login successful");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (data) => mutate(data);

  if (!isOnline) return <ErrorComponent />;

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm sm:max-w-lg sm:p-8 md:max-w-xl md:p-10 lg:max-w-2xl lg:p-12">
        <header className="flex flex-col">
          <div className="flex items-center gap-2">
            <img
              src="logolight.png"
              alt="Coin Cove Logo"
              className="w-8 sm:w-12"
            />
            <h1 className="font-serif text-2xl font-semibold sm:text-3xl md:text-4xl">
              Coin Cove
            </h1>
          </div>
          <div className="mt-4 flex flex-col sm:mt-6">
            <p className="text-2xl font-semibold text-slate-700 sm:text-3xl md:text-4xl">
              Login
            </p>
            <span className="text-lg tracking-wide opacity-70 sm:text-xl">
              Please enter your credentials
            </span>
          </div>
        </header>

        <form
          className="mt-5 flex flex-col gap-5 sm:mt-6 sm:gap-6 md:mt-8 md:gap-7"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1 sm:gap-2">
            <label htmlFor="email" className="label text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
              id="email"
              placeholder="Enter your email"
              className="input text-sm sm:text-base"
            />
            {errors.email && (
              <span className="text-sm text-red-600 sm:text-base">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1 sm:gap-2">
            <label htmlFor="password" className="label text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              id="password"
              placeholder="Enter your password"
              className="input text-sm sm:text-base"
            />
            {errors.password && (
              <span className="text-sm text-red-600 sm:text-base">
                {errors.password.message}
              </span>
            )}
          </div>

          {(errors.root?.network || errors.root?.credentials) && (
            <div className="text-red-600">
              <p>
                {errors.root.network?.message ||
                  errors.root.credentials?.message}
              </p>
            </div>
          )}

          <button
            className="mt-3 rounded-lg bg-[#4893ff] p-2 text-lg font-semibold text-white transition-colors hover:bg-[#3a7bd5] disabled:bg-blue-400 sm:mt-4 sm:p-3 sm:text-xl md:mt-5"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center justify-center gap-2">
                <ClipLoader color="#fff" size={18} /> <span>Logging in</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-1 text-sm text-gray-600 sm:mt-5 sm:text-base">
          <p>Don't have an account?</p>
          <Link to="/signup">
            <span className="text-[#4893ff] hover:underline">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
