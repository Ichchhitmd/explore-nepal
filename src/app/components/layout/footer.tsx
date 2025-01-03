import { Facebook, Github, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Explore Nepal</h3>
            <p className="text-gray-400">
              Your gateway to the breathtaking beauty and rich culture of Nepal.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-gray-400 hover:text-white">
                  About Nepal
                </Link>
              </li>
              <li>
                <Link href="/Destinations" className="text-gray-400 hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ichchhit.devkota/" target="_blank" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://github.com/Ichchhitmd" target="_blank" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/oldethicalrabbit/" target="_blank" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Explore Nepal by Ichchhit Devkota. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}