import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

const VendorCard = ({ vendor }) => {
  return (
    <Link
      href={`/store/${vendor.id}`}
      className="py-2 px-3 overflow-hidden rounded-xl border border-gray-200 bg-white"
    >

      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
  
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-blue-600">
            {vendor.category}
          </p>

          <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            {vendor.rating}
          </div>
        </div>


        <h3 className="mt-3 text-xl font-bold text-gray-900">
          {vendor.name}
        </h3>


        <p className="mt-3 text-sm text-gray-500">
          {vendor.description}
        </p>
      </div>
    </Link>
  );
};

export default VendorCard;