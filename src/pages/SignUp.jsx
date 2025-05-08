import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { supabase } from "../service/supabase";
import ErrorComponent from "../components/ErrorComponent";

async function signUp({ email, password, username }) {
  const { data, error: signupError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });

  if (signupError) throw signupError;

  const { error: profileError } = await supabase.from("profiles").upsert({
    id: data.user.id,
    username,
    balance: 100,
    favourite_crypto: null,
  });

  if (profileError) throw profileError;
  return data;
}

function SignUp() {
  const [isOnline] = useState(navigator.onLine);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    mutate,
    isPending,
    error: queryError,
  } = useMutation({
    mutationFn: signUp,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["currentUser"]);
      toast.success("Sign up was successful");
    },
    onError: (err) => toast.error(err.message || "Signup failed"),
  });

  const onSubmit = (data) => mutate(data);

  if (!isOnline) return <ErrorComponent />;

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="sm:max-[500px] w-full max-w-md rounded-xl bg-white p-6 shadow-sm sm:p-8 md:p-5 md:shadow-lg">
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
            <p className="text-2xl font-semibold text-slate-700 sm:text-2xl md:text-3xl">
              Sign Up
            </p>
            <span className="mt-2 text-lg tracking-wide opacity-70 sm:text-xl">
              Please enter your details
            </span>
          </div>
        </header>

        <form
          className="mt-5 flex flex-col gap-5 sm:mt-6 sm:gap-5 md:mt-8 md:gap-7"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1 sm:gap-2">
            <label htmlFor="username" className="label text-sm sm:text-base">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              id="username"
              placeholder="Enter your username"
              className="input text-sm sm:text-base"
            />
            {errors.username && (
              <span className="text-sm text-red-600 sm:text-base">
                {errors.username.message}
              </span>
            )}
          </div>

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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
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

          <button
            className="mt-3 rounded-lg bg-[#4893ff] p-2 text-lg font-semibold text-white transition-colors hover:bg-[#3a7bd5] disabled:bg-blue-400 sm:mt-4 sm:p-3 sm:text-xl md:mt-5"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center justify-center gap-2">
                <ClipLoader color="#fff" size={18} /> <span>Signing up</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
          {queryError && (
            <p className="text-sm text-red-600 sm:text-base">
              {queryError.message}
            </p>
          )}
        </form>

        <div className="mt-4 flex items-center justify-center gap-1 text-sm text-gray-600 sm:mt-5 sm:text-base">
          <p>Already have an account?</p>
          <Link to="/login">
            <span className="text-[#4893ff] hover:underline">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
