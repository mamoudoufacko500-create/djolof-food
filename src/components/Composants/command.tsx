
 import { useState } from "react";
import { Button } from "../ui/button";
import { ListProduct } from "@/data/data";

export default function Command() {
  // Ajouter quantity à chaque produit
  const [cart, setCart] = useState(
    ListProduct.map((item) => ({
      ...item,
      quantity: 0,
    }))
  );
 
  // Incrémenter quantité
  const increment = (id:any) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Décrémenter quantité
  const decrement = (id:any) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Prix total
  const prix = cart.reduce(
    (acc, item) => acc + item.prix * item.quantity,
    0
  );

  // Taxe 10%
  const taxe = prix * 0.1;

  // Total final
  const total = prix + taxe;

  return (
    <div className="w-[350px] p-5 bg-white shadow-xl rounded-2xl fixed right-0 top-0">
      <h1 className="font-bold text-2xl mb-5">
        COMMANDE
      </h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2 rounded-xl shadow-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="size-15 rounded-xl"
            />

            <div>
              <h1 className="font-bold">
                {item.name}
              </h1>
              <p className="text-orange-600 text-sm">
                {item.prix} FCFA
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decrement(item.id)}
                className="text-xl size-9 bg-gray-100 rounded-sm font-semibold"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increment(item.id)}
                className="text-xl size-9 bg-orange-600 text-white rounded-sm font-semibold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Résumé */}
      <div className="text-end mt-5">
        <div className="pt-4">
          <div className="flex justify-between font-semibold">
            <span>Prix</span>
            <span>{prix} FCFA</span>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex justify-between font-semibold">
            <span>Taxe</span>
            <span>{taxe.toFixed(0)} FCFA</span>
          </div>
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>{total.toFixed(0)} FCFA</span>
          </div>
        </div>

        <Button className="bg-orange-600 cursor-pointer rounded-xl w-full mt-1 py-5 font-bold shadow-xl">
          Commander
        </Button>
      </div>
    </div>
  );
}
