"use client";

import { useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg border border-gray-800">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-200">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={e => setFormData({...formData, subject: e.target.value})}
          className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
          className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 transition-colors"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
      >
        {loading ? (
          <Loader2 className="animate-spin h-5 w-5" />
        ) : success ? (
          <CheckCircle className="h-5 w-5" />
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}