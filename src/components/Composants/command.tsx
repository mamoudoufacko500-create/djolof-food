
 import { useState } from "react";
import { Button } from "../ui/button";
import { ListProduct } from "@/data/data";
import type { ListProductType } from "@/data/type";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  panier: {
    menu: ListProductType;
    quantite: number;
  }[];

  setPanier: React.Dispatch<
    React.SetStateAction<
      {
        menu: ListProductType;
        quantite: number;
      }[]
    >
  >;
};

export default function Command({
  panier,
  setPanier,
}: Props) 
{
    const ajouterAuPanier = (menu: ListProductType) => {
    const existe = panier.find((item) => item.menu.id === menu.id)
    if (existe) {
      setPanier(
        panier.map((item) =>
          item.menu.id === menu.id
            ? { ...item, quantite: item.quantite + 1 }
            : item
        )
      )
    } else {
      setPanier([...panier, { menu, quantite: 1 }])
    }
  }
  
  const navigate = useNavigate();
  const reduireQuantite = (id: number) => {
    setPanier(
      panier
        .map((item) =>
          item.menu.id === id ? { ...item, quantite: item.quantite - 1 } : item
        )
        .filter((item) => item.quantite > 0)
    )
  }

const validerCommande = () => {
  localStorage.setItem(
    "panier",
    JSON.stringify(panier)
  );

  navigate("/dashboard/form-commande");
};
   

  return (
    <div className="w-[350px] h-screen p-5 bg-white shadow-xl rounded-2xl fixed right-0 top-0">
    
 <div>
  {panier.length === 0 ? (
    <div className="flex flex-1 items-center justify-center">
      <p className="text-center text-xl text-gray-400">
        + <br />
        Ajouter un produit
        <br />
        depuis le menu
      </p>
    </div>
  ) : (
    <>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-2xl">
          COMMANDE
        </h1>

        <button
          onClick={() => setPanier([])}
          className="text-black cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {panier.map((item) => (
          <div
            key={item.menu.id}
            className="flex items-center justify-between p-2 rounded-xl shadow-xl"
          >
            <img
              src={item.menu.image}
              alt={item.menu.name}
              className="size-15 rounded-xl"
            />

            <div>
              <h1 className="font-bold">
                {item.menu.name}
              </h1>

              <p className="text-orange-600 text-sm">
                {item.menu.prix} FCFA
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  reduireQuantite(item.menu.id)
                }
                className="text-xl size-9 bg-gray-100 rounded-sm font-semibold"
              >
                -
              </button>

              <span>{item.quantite}</span>

              <button
                onClick={() =>
                  ajouterAuPanier(item.menu)
                }
                className="text-xl size-9 bg-orange-600 text-white rounded-sm font-semibold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )}
</div>
     
         

      {/* Résumé */}
      <div className="text-end mt-5">
        <div className="pt-4">
          <div className="flex justify-between font-semibold">
            <span>Prix</span>
            <span>    {panier.reduce(
                    (total, item) => total + item.menu.prix * item.quantite,
                    0
                  )}{" "}
                  FCFA</span>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex justify-between font-semibold">
            <span>Taxe (2)</span>
            <span>   {Math.round(
                    panier.reduce(
                      (total, item) => total + item.menu.prix * item.quantite,
                      0
                    ) * 0.02
                  )}{" "}
                  FCFA</span>
          </div>
        </div>
           <div className="flex justify-between font-semibold pt-4">
                <span>Charges</span>
                <span>200 FCFA</span>
              </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span> {panier.reduce(
                    (total, item) => total + item.menu.prix * item.quantite,
                    0
                  ) +
                    Math.round(
                      panier.reduce(
                        (total, item) => total + item.menu.prix * item.quantite,
                        0
                      ) * 0.02
                    ) +
                    200}{" "}
                  FCFA</span>
          </div>
        </div>

        <Button onClick={validerCommande} className="bg-orange-600 cursor-pointer rounded-xl w-full mt-1 py-5 font-bold shadow-xl">
          Commander
        </Button>
      </div>
    </div>
  );
}
