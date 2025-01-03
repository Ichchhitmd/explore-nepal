'use client';

import React, { useState } from 'react';
import DestinationCard from "../components/common/cards/destinationCard";
import destinations from '../dummyData/dummyData.json';

export default function DestinationPage() {
  const [filters, setFilters] = useState({
    region: '',
    search: '',
    topDestinations: false
  });

  const regions = [...new Set(destinations.map(dest => dest.region))];
  
  const filteredDestinations = destinations.filter(dest => {
    const matchesRegion = !filters.region || dest.region === filters.region;
    const matchesSearch = !filters.search || 
      dest.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      dest.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesTop = !filters.topDestinations || dest.topDestination;
    
    return matchesRegion && matchesSearch && matchesTop;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Discover Amazing Destinations</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore our curated collection of breathtaking locations around Nepal
        </p>
      </div>

      <div className="rounded-lg border border-gray-700 p-6 mb-8 bg-gray-800">
        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="text"
            placeholder="Search destinations..."
            className="px-4 py-2 rounded-lg w-full max-w-xs bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            value={filters.search}
            onChange={e => setFilters({...filters, search: e.target.value})}
          />
          
          <select
            value={filters.region}
            onChange={e => setFilters({...filters, region: e.target.value})}
            className="px-4 py-2 rounded-lg w-full max-w-xs bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <option value="">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>

          <button
            onClick={() => setFilters({...filters, topDestinations: !filters.topDestinations})}
            className={`px-4 py-2 rounded-lg ml-auto ${
              filters.topDestinations 
                ? 'bg-gradient-to-r from-[#003893] to-[#DC143C]' 
                : 'bg-gray-800 border border-gray-700 text-white'
            }`}
          >
            Top Destinations Only
          </button>
        </div>
      </div>

      {filteredDestinations.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          No destinations found matching your criteria
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination, index) => (
            <DestinationCard
              key={index}
              images={destination.images}
              name={destination.name}
              description={destination.description}
              topDestination={destination.topDestination}
              id={destination.id}
              region={destination.region}
              rating={destination.rating}
              activities={[]}
              popularity={0}
              userReviews={[]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
