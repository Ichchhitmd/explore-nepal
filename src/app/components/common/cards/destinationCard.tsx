import { Destination } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

const DestinationCard: React.FC<Destination> = ({
  id,
  name,
  region,
  description,
  images,
  topDestination,
}) => {
  return (
    <Link href={`/Destinations/${id}`}>
      <div className="group relative bg-white shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={images?.[0] ?? "/assets/images/placeholder.jpg"}
            alt={name}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

          {topDestination && (
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
              Top Destination
            </div>
          )}
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
              {name}
            </h3>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-sm">{region}</span>
            </div>
          </div>

          <p className="text-gray-600 text-base line-clamp-2">{description}</p>

          <div className="flex items-center text-red-600 text-sm font-medium group-hover:text-red-700">
            View Details
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/20 rounded-lg transition-all"></div>
      </div>
    </Link>
  );
};

export default DestinationCard;
