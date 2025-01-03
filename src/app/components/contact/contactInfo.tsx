import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h2>
      
      <div className="space-y-8">
        <div className="flex items-start group">
          <MapPin className="h-6 w-6 text-blue-500 mt-1 group-hover:text-blue-400 transition-colors" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Address</h3>
            <p className="text-gray-400">
              Jorpati, Kathmandu<br />
              Nepal
            </p>
          </div>
        </div>

        <div className="flex items-start group">
          <Phone className="h-6 w-6 text-blue-500 mt-1 group-hover:text-blue-400 transition-colors" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Phone</h3>
            <p className="text-gray-400">+977 9861917869</p>
          </div>
        </div>

        <div className="flex items-start group">
          <Mail className="h-6 w-6 text-blue-500 mt-1 group-hover:text-blue-400 transition-colors" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Email</h3>
            <p className="text-gray-400">info@explorenepal.com</p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <h3 className="text-lg font-medium mb-4 text-white">Office Hours</h3>
          <div className="text-gray-400 space-y-2">
            <p>Monday - Friday: 10:00 AM - 5:00 PM</p>
            <p>Saturday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}