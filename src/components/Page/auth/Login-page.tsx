import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("Connexion-info", JSON.stringify({ email, password }));
    toast.success("Connexion réussie");
    navigate("/dashboard");
  };

  return (
    <div className="space-y-5">
      <h1 className="text-5xl font-bold">Welcome Back!</h1>
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl space-y-3">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="border-2 border-black rounded-xl px-4 py-2"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Latyr@gmail.com"
            id="email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <div className="relative border-2 border-black rounded-xl px-4 py-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              id="password"
              className="w-full"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <LuEye /> : <LuEyeClosed />}
            </button>
          </div>
        </div>

        {/* Forget password link */}
        <div>
          <Link to="/forget" className="text-orange-600 flex justify-end font-bold">
            Forget Password?
          </Link>
        </div>

        {/* Submit button */}
        <button
          className="bg-orange-600 text-white cursor-pointer hover:bg-orange-700 transition-colors duration-200 rounded-xl px-4 py-2 w-full"
          type="submit"
        >
          Login
        </button>
      </form>

      {/* Separator */}
      <div className="flex justify-center items-center gap-6 mx-7">
        <div className="bg-gray-300 h-0.5 w-65"></div>
        <h1 className="text-gray-300">or</h1>
        <div className="bg-gray-300 h-0.5 w-65"></div>
      </div>

      {/* Social buttons */}
      <div className="flex justify-center items-center gap-9">
        <button className="flex gap-2 border-2 items-center bg-white px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-100">
          <img className="size-5" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" />
          <p>Google</p>
        </button>
        <button className="flex gap-2 border-2 items-center bg-white px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-100">
          <img className="size-5" src="https://www.svgrepo.com/show/394174/github.svg" alt="github" />
          <p>Github</p>
        </button>
      </div>

      {/* Register link */}
      <div className="text-end mr-7">
        Don't have an account?{" "}
        <Link to="/register" className="text-orange-600 font-bold">
          Sign up
        </Link>
      </div>
    </div>
  );
}