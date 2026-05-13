import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function HomeLayout() {
  return (
    <section className="relative bg-[url('/rec.jpg')] bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black/50">
        <div className="flex flex-col items-center justify-center h-full space-y-5">
          <img src="/logo.png" alt="" className="size-50" />

          <Link
            to="/login"
            className="bg-[#FF7900] px-3 py-2 font-bold rounded-full flex gap-2 items-center "
          >
            COMMENCEZ <FaArrowAltCircleRight className="size-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}
