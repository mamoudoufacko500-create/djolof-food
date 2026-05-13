import { ListProduct } from "@/data/data";
import ProductCard from "@/elements/product-card";
import React, { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import Command from "../Composants/command";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex ">
     <section className="p-6 max-w-4xl  ">
          <header className="mb-8 flex items-center justify-between ">
        <h1 className="font-black text-3xl italic">
          Djolof <span className="text-orange-600">FOOD</span>
        </h1>
        <div className="relative mx-8 max-w-md flex-1">
          <FaSearch
            className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-100 bg-white py-2 pr-4 pl-12 outline-none focus:border-orange-500 shadow-sm"
          />
        </div>
        <button className="rounded-xl cursor-pointer bg-orange-500 p-2.5 text-white shadow-lg shadow-orange-200">
          <FaBell size={20} />
        </button>
      </header>
      <div className="space-y-8 ">
        <h1 className="font-bold text-2xl">Special Menu For You</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ListProduct.map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
        </div>
      </div>
     </section>
      <section >
        <Command/>
      </section>
    </div>
  );
}
