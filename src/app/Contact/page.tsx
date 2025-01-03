"use client";

import ContactForm from "../components/contact/contactForm";
import ContactInfo from "../components/contact/contactInfo";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have questions about exploring Nepal? We&apos;re here to help you plan your perfect adventure.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}