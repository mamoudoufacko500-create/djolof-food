

import { useState } from "react";
import { ArrowLeft, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    productName: "",
    productUnit: "",
    category: "",
    price: "",
    status: "",
    productId: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleImageUpload = (e: any) => {
  const file = e.target.files?.[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // base64 stable
    };

    reader.readAsDataURL(file);
  }
};

 const handleSubmit = (e: any) => {
  e.preventDefault();

  if (
    !formData.productName ||
    !formData.productUnit ||
    !formData.category ||
    !formData.price ||
    !formData.status ||
    !formData.productId
  ) {
    alert("Veuillez remplir tous les champs");
    return;
  }

  const nouveauProduit = {
    id: Date.now(),
    productName: formData.productName,
    productUnit: formData.productUnit,
    category: formData.category,
    price: Number(formData.price),
    status: formData.status,
    productId: formData.productId,
    image,
  };

  const produitsExistants =
    JSON.parse(localStorage.getItem("produits")) || [];

  produitsExistants.push(nouveauProduit);

  localStorage.setItem(
    "produits",
    JSON.stringify(produitsExistants)
  );

  // Réinitialiser le formulaire
  setFormData({
    productName: "",
    productUnit: "",
    category: "",
    price: "",
    status: "",
    productId: "",
  });

  setImage(null);

  alert("Produit ajouté avec succès");

  navigate("/dashboard/produits");
};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card className="rounded-2xl border bg-white p-8 shadow-sm">

        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
        <Button
  variant="outline"
  size="icon"
  onClick={() => navigate("/dashboard/produits")}
  className="rounded-lg"
>
  <ArrowLeft className="h-5 w-5" />
</Button>

          <h1 className="text-2xl font-bold text-gray-800">
            Add Product
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Upload Image */}
          <div className="mb-10 flex justify-center">
            <label className="group flex h-52 w-52 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-orange-400 hover:bg-orange-50">

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />

              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="h-full w-full rounded-2xl object-cover"
                />
              ) : (
                <>
                  <ImagePlus className="mb-4 h-10 w-10 text-gray-400 group-hover:text-orange-500" />

                  <p className="font-medium text-gray-700">
                    Upload Image
                  </p>
                </>
              )}
            </label>
          </div>

          {/* Form Grid */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* Product Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Product Name
              </label>

              <Input
                name="productName"
                placeholder="Product Name"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>

            {/* Product Unit */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Product Unit
              </label>

              <Input
                name="productUnit"
                placeholder="Enter Unit"
                value={formData.productUnit}
                onChange={handleChange}
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <Input
                name="category"
                placeholder="Enter Category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Price
              </label>

              <Input
                type="number"
                name="price"
                placeholder="Enter Price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Status
              </label>

              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    status: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="in-stock">
                    In Stock
                  </SelectItem>

                  <SelectItem value="out-stock">
                    Out of Stock
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product ID */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Product ID
              </label>

              <Input
                name="productId"
                placeholder="123456789"
                value={formData.productId}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-10 flex justify-center">
            <Button
              type="submit"
              className="rounded-xl bg-orange-500 px-10 py-6 text-white hover:bg-orange-600"
            >
              Save Product
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}