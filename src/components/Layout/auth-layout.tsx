import React from "react";
import { Outlet, useLocation } from "react-router-dom";



export default function AuthLayout() {
    const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  return (
    <div>
        <div className="flex flex-col lg:flex-row items-center h-screen overflow-hidden items-center justify-center">
      <div className="w-1/2">
        <img
          src="login.png"
          alt=""
          className="w-full h-full object-cover hidden lg:block"
        />
      </div>
      <div className="w-1/2 h-full p-10 flex items-center justify-center">
      <Outlet />
      </div>
    </div>
    </div>
  );
}
