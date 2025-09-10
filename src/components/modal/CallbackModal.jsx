
import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import rectangle from "../../assets/images/Rectanglerobot.png";
import { FaUser, FaPhone, FaEnvelope, FaCity } from "react-icons/fa";
import { X } from "lucide-react";

const servicesList = [
  "Brand Development",
  "Dropshipping",
  "USA LLC Formation",
  "Canton Fair",
  "Video Call",
];

export default function CallbackModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    services: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const airtableUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME}`;

    try {
      await axios.post(
        airtableUrl,
        {
          fields: {
            Name: formData.name,
            Mobile: formData.mobile,
            Email: formData.email,
            City: formData.city,
            Services: formData.services,
            Source: "Website Form",
            Stage: "Fresh",
            date_and_time: new Date().toISOString(),
          },
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Form submitted successfully!");
      setFormData({ name: "", mobile: "", email: "", city: "", services: "" });
      onClose();
    } catch (error) {
      console.error("Error submitting to Airtable:", error.response?.data || error.message);
      alert("Failed to submit form. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-3 overflow-auto">
      {/* Desktop Modal */}
      <div className="hidden md:flex relative bg-white rounded-xl shadow-2xl w-full max-w-4xl p- h-130">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        <div className="border-2 border-red-500 rounded-lg flex flex-row overflow-hidden bg-white mt-0">
          <div className="md:w-1/2">
            <img
              src={rectangle}
              alt="Robot"
              className="w-full h-130 object-cover"
            />
          </div>

          <div className="md:w-1/2 w-full p-6 space-y-4 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Desktop form fields */}
              {["name", "mobile", "email", "city"].map((field) => {
                const Icon = field === "name" ? FaUser :
                             field === "mobile" ? FaPhone :
                             field === "email" ? FaEnvelope : FaCity;
                const placeholder = field.charAt(0).toUpperCase() + field.slice(1);
                return (
                  <div key={field} className="relative">
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600" />
                    <input
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={placeholder}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 border-2 border-red-500 rounded px-3 py-2"
                    />
                  </div>
                );
              })}

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Services:
                </label>
                <div className="flex flex-wrap gap-4">
                  {servicesList.map((service) => (
                    <label key={service} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="services"
                        value={service}
                        checked={formData.services === service}
                        onChange={handleChange}
                        className="text-red-600 focus:ring-red-500"
                        required
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="text-center font-bold text-red-600 text-xl">
                Request a <span className="text-3xl">CALLBACK</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-full mt-2 transition-colors duration-300 hover:shadow-lg ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Modal */}
      <div className="md:hidden relative bg-white rounded-lg shadow-lg w-full max-w-sm p-4 pt-9">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
        >
          <X className="w-4 h-4 text-black " />
        </button>

        <div className="flex flex-col space-y-4">
          {/* Mobile form fields */}
          {["name", "mobile", "email", "city"].map((field) => {
            const Icon = field === "name" ? FaUser :
                         field === "mobile" ? FaPhone :
                         field === "email" ? FaEnvelope : FaCity;
            const placeholder = field.charAt(0).toUpperCase() + field.slice(1);
            return (
              <div key={field} className="relative">
                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600" />
                <input
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={placeholder}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 border-2 border-red-500 rounded px-3 py-2 text-sm"
                />
              </div>
            );
          })}

          {/* Services */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Services:
            </label>
            <div className="flex flex-wrap gap-2 text-sm">
              {servicesList.map((service) => (
                <label key={service} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="services"
                    value={service}
                    checked={formData.services === service}
                    onChange={handleChange}
                    className="text-red-600 focus:ring-red-500"
                    required
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="text-center font-bold text-red-600 text-lg">
            Request a <span className="text-xl">CALLBACK</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-full transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
      </div>
    </div>
  );
}
