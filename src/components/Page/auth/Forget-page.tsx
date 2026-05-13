import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function ForgetPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgetRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Veuillez entrer votre adresse e-mail");
      return;
    }
    toast.success("Lien de vérification envoyé à " + email);
    // On peut stocker l'email temporairement (ou le passer via state de navigation)
    setTimeout(() => {
      navigate("/reset", { state: { email } });
    }, 2000);
  };

  return (
    <div className="space-y-4 mx-30">
      <h1 className="text-3xl font-bold">Forget Password</h1>
      <p>Please enter your email address below – you will receive a verification link</p>
      <form className="flex flex-col gap-18" onSubmit={handleForgetRequest}>
        <input
          className="border-2 border-black rounded-xl px-4 py-2"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Latyr@gmail.com"
        />
        <button
          className="bg-orange-600 text-white cursor-pointer hover:bg-orange-700 transition-colors duration-200 rounded-xl px-4 py-2"
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
}