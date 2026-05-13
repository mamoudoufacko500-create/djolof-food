import { Button } from "@/components/ui/button";
import type { ListProductType } from "@/data/type";
import { FaStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

export default function ProductCard({
  id,
  name,
  image,
  prix,
  desc,
  note,
}: ListProductType) {
  return (
    <div className="border-gray-400 border rounded-2xl">
      <div>
        <img
          src={image}
          alt={name}
          className="p-2 h-50 w-full object-cover rounded-2xl"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between">
          <h1 className="font-bold">{name}</h1>
          <h3 className="text-orange-600 font-bold">
            {prix} FCFA
          </h3>
        </div>

        <p className="text-gray-500">{desc}</p>

        <div className="flex justify-between">
          <p className="font-bold flex items-center">
            <FaStar className="text-orange-600 mr-1" />
            {note}
          </p>

          <Button
               className="bg-orange-600 px-2 py-5 cursor-pointer"
          >
            <IoMdAdd />
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
}
