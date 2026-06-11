import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pencil, Trash2, Plus } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProduitsPage() {
  const navigate = useNavigate();

 const [products, setProducts] = useState([]);

useEffect(() => {
  const saved = localStorage.getItem("produits");
  setProducts(saved ? JSON.parse(saved) : []);
}, []);

// useEffect(() => {
//   localStorage.setItem("produits", JSON.stringify(products));
// }, [products]);

  // 🔴 Delete produit + sync localStorage
  const handleDelete = (id: any) => {
    const updatedProducts = products.filter(
      (product: any) => product.id !== id
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "produits",
      JSON.stringify(updatedProducts)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card className="rounded-2xl border bg-white p-6 shadow-sm">

        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            Products
          </h1>

          <Link
            to="add"
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          >
            <Plus className="h-4 w-4" />
            Add Product
          </Link>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Product ID</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.map((product: any) => (
                <TableRow key={product.id}>

                  {/* PRODUCT */}
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image || "/placeholder.png"}
                        alt={product.productName}
                        className="h-12 w-12 rounded-lg object-cover"
                      />

                      <span className="font-medium">
                        {product.productName}
                      </span>
                    </div>
                  </TableCell>

                  {/* STATUS */}
                  <TableCell>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      {product.status}
                    </span>
                  </TableCell>

                  {/* ID */}
                  <TableCell>
                    {product.productId}
                  </TableCell>

                  {/* PRICE */}
                  <TableCell>
                    ${Number(product.price || 0).toFixed(2)}
                  </TableCell>

                  {/* ACTIONS */}
                  <TableCell>
                    <div className="flex items-center gap-4">

                      <button
                        onClick={() =>
                          navigate(`/dashboard/produits/edit/${product.id}`)
                        }
                        className="flex items-center gap-1 text-green-600 hover:text-green-700"
                      >
                        <Pencil size={16} />
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(product.id)}
                        className="flex items-center gap-1 text-orange-500 hover:text-orange-600"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>

                    </div>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </Card>
    </div>
  );
}