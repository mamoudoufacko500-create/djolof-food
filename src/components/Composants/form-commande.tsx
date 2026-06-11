import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FormCommande() {
  const [customer, setCustomer] = useState({
    recipient: "",
    gender: "",
    city: "",
    phone: "",
    email: "",
    customerId: "",
    address: "",
  });
 
  const navigate = useNavigate();
  alert("Commande enregistrée");
navigate("/dashboard");
  const [panier, setPanier] = useState<any[]>([]);

useEffect(() => {
  const savedPanier = JSON.parse(
    localStorage.getItem("panier") || "[]"
  );

  setPanier(savedPanier);
}, []);

  const subtotal = useMemo(() => {
    return panier.reduce(
      (acc, item) => acc + item.menu.prix * item.quantite,
      0
    );
  }, [panier]);

  const tax = subtotal * 0.05;
  const charges = 24;

  const total = subtotal + tax + charges;

  const removeItem = (id: number) => {
    setPanier((prev) =>
      prev.filter((item) => item.menu.id !== id)
    );
  };

  const placeOrder = () => {
    const order = {
      id: Date.now(),
      customer,
      products: panier,
      total,
      createdAt: new Date(),
    };

    const orders =
      JSON.parse(localStorage.getItem("orders") || "[]");

    orders.push(order);

    localStorage.setItem(
  "orders",
  JSON.stringify(orders)
);

localStorage.removeItem("panier");

    alert("Commande enregistrée");

    setPanier([]);
  };

  return (
    <div className="w-full bg-white p-6 border-l ">

      <h2 className="mb-6 text-2xl font-bold">
        Order #{Date.now()}
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          placeholder="Recipient"
          className="border rounded-lg p-2"
          onChange={(e) =>
            setCustomer({
              ...customer,
              recipient: e.target.value,
            })
          }
        />

        <input
          placeholder="Gender"
          className="border rounded-lg p-2"
          onChange={(e) =>
            setCustomer({
              ...customer,
              gender: e.target.value,
            })
          }
        />

        <input
          placeholder="City"
          className="border rounded-lg p-2"
          onChange={(e) =>
            setCustomer({
              ...customer,
              city: e.target.value,
            })
          }
        />

        <input
          placeholder="Phone"
          className="border rounded-lg p-2"
          onChange={(e) =>
            setCustomer({
              ...customer,
              phone: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="border rounded-lg p-2"
          onChange={(e) =>
            setCustomer({
              ...customer,
              email: e.target.value,
            })
          }
        />

        <input
          placeholder="Customer ID"
          className="border rounded-lg p-2"
          onChange={(e) =>
            setCustomer({
              ...customer,
              customerId: e.target.value,
            })
          }
        />

      </div>

      <textarea
        placeholder="Address"
        className="mt-4 w-full border rounded-lg p-2"
        rows={3}
        onChange={(e) =>
          setCustomer({
            ...customer,
            address: e.target.value,
          })
        }
      />

      <div className="mt-6 space-y-3">

        {panier.map((item) => (
          <div
            key={item.menu.id}
            className="flex items-center justify-between rounded-xl border p-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.menu.image}
                className="h-14 w-14 rounded-lg object-cover"
              />

              <div>
                <p className="font-semibold">
                  {item.menu.name}
                </p>

                <p className="text-orange-500">
                  ${item.menu.prix}
                </p>
              </div>
            </div>

            <p>
              Qty : {item.quantite}
            </p>

            <button
              onClick={() =>
                removeItem(item.menu.id)
              }
            >
              <X />
            </button>
          </div>
        ))}

      </div>

      <div className="mt-6 rounded-xl border p-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Charges</span>
          <span>${charges.toFixed(2)}</span>
        </div>

        <div className="mt-4 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

      </div>

      <button
        onClick={placeOrder}
        className="mt-6 w-full rounded-xl bg-orange-500 py-3 text-white"
      >
        Place Order
      </button>

    </div>
  );
}