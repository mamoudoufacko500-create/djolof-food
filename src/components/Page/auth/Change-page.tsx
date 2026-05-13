import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function ChangePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "votre email";

  return (
    <div className="space-y-10 mx-30">
      <h1 className="text-3xl font-bold">Password Changed</h1>
      <p className="font-semibold">
        We have sent a verification link to your email{" "}
        <span className="text-green-600">{email}</span>
      </p>
      <h3>Click on the link in your mailbox & all done.</h3>
      <div className="flex flex-col gap-6">
        <Link
          to="/login"
          className="bg-orange-600 text-white text-center cursor-pointer hover:bg-orange-700 transition-colors duration-200 rounded-xl px-4 py-2 mr-15"
        >
          Back To Login
        </Link>
        <button
          onClick={() => navigate("/forget")}
          className="bg-gray-200 text-gray-500 cursor-pointer hover:bg-gray-300 transition-colors duration-200 rounded-xl px-4 py-2 mr-15"
        >
          Resend Link
        </button>
      </div>
    </div>
  );
}