import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

export default function ResetPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ""; // récupéré depuis ForgetPage

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }
    if (newPassword.length < 8) {
      toast.error("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }
    // Ici tu peux mettre à jour le mot de passe dans localStorage/backend
    toast.success("Mot de passe modifié avec succès");
    navigate("/change", { state: { email } });
  };

  return (
    <div className="space-y-4 mx-30">
      <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
      <form onSubmit={handleReset} className="flex flex-col">
        <input
          className="border-2 mb-4 border-black rounded-xl px-4 py-2"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
        />
        <input
          className="border-2 mb-4 border-black rounded-xl px-4 py-2"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button
          className="bg-orange-600 mt-10 text-white cursor-pointer hover:bg-orange-700 transition-colors duration-200 rounded-xl px-4 py-2"
          type="submit"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}
