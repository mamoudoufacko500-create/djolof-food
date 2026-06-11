import { useState } from "react";
import { ArrowLeft, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    orders: "",
    spent: "",
    gender: "",
    address: "",
  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // image upload (base64 pour persistence)
  const handleImageUpload = (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.orders ||
      !formData.spent ||
      !formData.gender ||
      !formData.address
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const newCustomer = {
      id: Date.now(),
      name: formData.name,
      orders: Number(formData.orders),
      spent: formData.spent,
      gender: formData.gender,
      address: formData.address,
      image,
    };

    const existingCustomers =
      JSON.parse(localStorage.getItem("customers")) || [];

    existingCustomers.push(newCustomer);

    localStorage.setItem(
      "customers",
      JSON.stringify(existingCustomers)
    );

    setFormData({
      name: "",
      orders: "",
      spent: "",
      gender: "",
      address: "",
    });

    setImage(null);

    alert("Customer ajouté avec succès");

    navigate("/customers");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card className="rounded-2xl border bg-white p-8 shadow-sm">

        {/* HEADER */}
        <div className="mb-8 flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("/dashboard/customers")}
            className="rounded-lg"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <h1 className="text-2xl font-bold text-gray-800">
            Add Customer
          </h1>
        </div>

        <form onSubmit={handleSubmit}>

          {/* IMAGE UPLOAD */}
          <div className="mb-10 flex justify-center">
            <label className="group flex h-52 w-52 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-orange-400 hover:bg-orange-50">

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />

              {image ? (
                <img
                  src={image}
                  alt="preview"
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

          {/* FORM */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Name
              </label>

              <Input
                name="name"
                placeholder="Customer name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Orders */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Orders
              </label>

              <Input
                type="number"
                name="orders"
                placeholder="Number of orders"
                value={formData.orders}
                onChange={handleChange}
              />
            </div>

            {/* Spent */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Spent
              </label>

              <Input
                name="spent"
                placeholder="$ amount spent"
                value={formData.spent}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Gender
              </label>

              <Input
                name="gender"
                placeholder="Male / Female"
                value={formData.gender}
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Address
              </label>

              <Input
                name="address"
                placeholder="Customer address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center">
            <Button
              type="submit"
              className="rounded-xl bg-orange-500 px-10 py-6 text-white hover:bg-orange-600"
            >
              Save Customer
            </Button>
          </div>

        </form>
      </Card>
    </div>
  );
}