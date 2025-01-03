"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mountain } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Nepal', href: '/About' },
  { name: 'Destinations', href: '/Destinations' },
  { name: 'Contact', href: '/Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link 
              href="/" 
              className="flex-shrink-0 flex items-center gap-2 group"
            >
              <Mountain className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Explore Nepal
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 rounded-md relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-200 rotate-0" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200 rotate-0" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden transition-all duration-200 ease-in-out ${
          isOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="pt-2 pb-3 space-y-1 px-4 bg-gray-50/80 backdrop-blur-md">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}