import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }
    if (password.length < 8) {
      toast.error("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }
    localStorage.setItem("Inscription-info", JSON.stringify({ email, password }));
    toast.success("Inscription réussie");
    navigate("/login");
  };

  return (
    <div className="space-y-10">
      <h1 className="text-5xl text-orange-600 font-bold">Registration</h1>
      <form onSubmit={handleRegister} className="bg-white p-5 rounded-xl space-y-3">
        <input
          className="border-2 border-black rounded-xl px-4 py-2 w-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />

        <div className="relative border-2 border-black rounded-xl px-4 py-2">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
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

        <input
          className="border-2 border-black rounded-xl px-4 py-2 w-full"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />

        <p className="font-bold">
          By signing below, you agree to the{" "}
          <span className="text-orange-600">Terms of use</span> and{" "}
          <span className="text-orange-600">privacy notice</span>
        </p>

        <button
          className="bg-orange-600 mt-5 text-white cursor-pointer hover:bg-orange-700 transition-colors duration-200 rounded-xl px-4 py-2 w-full"
          type="submit"
        >
          Sign Up
        </button>

        <div className="text-center mt-5">
          <p>
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}