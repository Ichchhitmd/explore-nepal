import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import  destinations  from './dummyData/dummyData.json';

export default function Home() {
  const topDestinations = destinations.slice(1, 7);


  return (
    <main>
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/homepage.jpg"
          alt="Nepal Himalayas"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up bg-gradient-to-r from-[#DC143C] to-[#d6b5b5] bg-clip-text text-transparent">
            Welcome to Nepal
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-up animation-delay-200">
            Discover the land of Himalayas, ancient temples, and rich culture
          </p>
          <Link
            href="/Destinations"
            className="group inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gradient-to-r from-[#003893] to-[#DC143C] hover:text-white transition-all duration-300 animate-fade-up animation-delay-400 shadow-xl hover:shadow-blue-500/25"
          >
            Explore Destinations
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            Popular Destinations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our handpicked selection of must-visit locations across Nepal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/Destinations/${destination.id}`}
              className="group"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <Image
                  src={destination.images[0]}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {destination.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{destination.region}</p>
                    <div className="inline-flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Explore More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}