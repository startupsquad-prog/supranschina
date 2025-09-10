import React from "react";
import { Phone, MessageCircle } from "lucide-react"; // icons

export default function CantonNavbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
      {/* Logo */}
      {/* Right Buttons */}
      <div className="flex space-x-3">
        <button className="flex items-center border border-blue-600 text-blue-600 px-4 py-1 rounded-lg hover:bg-blue-50 transition">
          <Phone size={16} className="mr-1" />
          Call
        </button>
        <button className="flex items-center border border-blue-600 text-blue-600 px-4 py-1 rounded-lg hover:bg-blue-50 transition">
          <MessageCircle size={16} className="mr-1" />
          WhatsApp
        </button>
      </div>
    </nav>
  );
}
