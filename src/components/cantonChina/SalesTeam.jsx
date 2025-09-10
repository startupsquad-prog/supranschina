
import React from "react";
import { Phone } from "lucide-react"; // Phone icon
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import Photo from "../../assets/images/B1.png";

const salesContacts = [
  { name: "Simran Suprans", phone: "9350830133" },
  { name: "Sahil", phone: "9350818272" },
  { name: "Payal", phone: "7988702534" },
  { name: "Parth Suprans", phone: "9350502364" },
  { name: "Isha", phone: "9253110463" },
  { name: "Karishma", phone: "9306524544" },
  { name: "Simran Jr Sales", phone: "7988514291" },
  { name: "Disha", phone: "9817376457" },
];

export default function SalesTeam() {
  return (
    <section
      id="sales-team"
      className="relative bg-gradient-to-br from-black via-red-900 to-black py-16 px-6 md:px-20"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Talk to <span className="text-red-500">Our Experts</span>
          </h1>
          <p className="text-gray-300 mt-3 text-lg md:text-xl">
            Get personalized guidance for <span className="font-semibold">Canton Fair China 2025</span>
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-12">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with <span className="text-red-600">Suprans Team</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our dedicated sales specialists are here to assist you with inquiries, bookings, and business opportunities at the <strong>Canton Fair 2025</strong>.
            </p>

            {/* Contact List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {salesContacts.map((c, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-gray-50 hover:bg-red-50 border border-gray-200 rounded-lg px-4 py-3 shadow-sm transition"
                >
                  {/* Phone Link */}
                  <a
                    href={`tel:${c.phone}`}
                    className="flex items-center gap-3"
                  >
                    <Phone size={18} className="text-red-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{c.name}</p>
                      <p className="text-sm text-gray-600">{c.phone}</p>
                    </div>
                  </a>

                  {/* WhatsApp Buttons */}
                  {/* Desktop / Tablet: Icon + Text */}
                  <a
                    href={`https://wa.me/91${c.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold transition"
                  >
                    <FaWhatsapp size={16} />
                    Click here to chat
                  </a>

                  {/* Mobile: Only Icon */}
                  <a
                    href={`https://wa.me/91${c.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:hidden bg-green-500 text-white p-2 rounded-full flex items-center justify-center"
                  >
                    <FaWhatsapp size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-black rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={Photo}
              alt="Expert"
              className="relative rounded-full object-cover w-full h-full border-4 border-red-600 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
