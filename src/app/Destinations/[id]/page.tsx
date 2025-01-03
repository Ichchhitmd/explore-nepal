"use client";

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft, Star, ChevronLeft, ChevronRight, MapPin, Calendar, User } from 'lucide-react';
import destinations from '../../dummyData/dummyData.json';

export default function DestinationPage() {
  const router = useRouter();
  const { id } = useParams();
  const destination = destinations.find((d) => Number(d.id) === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Destination Not Found</h2>
          <button
            onClick={() => router.back()}
            className="text-blue-500 hover:text-blue-400 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Return to Destinations
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === destination.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? destination.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
     

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-baseline">
        <div className="space-y-4">
        <button
        onClick={() => router.back()}
        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors mb-10 group"
      >
        <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Destinations
      </button>
          <div className="relative h-[500px] rounded-lg overflow-hidden group">
            <Image
              src={destination.images[currentImageIndex]}
              alt={`${destination.name}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 object-[50%_90%]"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {destination.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex 
                      ? 'bg-white w-4' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">{destination.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < destination.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-400">
                ({destination.userReviews.length} reviews)
              </span>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">About</h2>
              <p className="text-gray-300 leading-relaxed">{destination.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">Region</h2>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                {destination.region}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">Popular Activities</h2>
              <div className="flex flex-wrap gap-2">
                {destination.popularActivities.map((activity, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6 text-white">Reviews</h2>
            <div className="space-y-6">
              {destination.userReviews.map((review) => (
                <div
                  key={review.id}
                  className="border-b border-gray-700 last:border-0 pb-6 last:pb-0"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-700 p-2 rounded-full">
                        <User className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="font-medium text-white">{review.userName}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {review.date || 'No date'}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}