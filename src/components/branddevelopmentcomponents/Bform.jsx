import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
// Images
import rectangle from "../../assets/images/Rectanglerobot.png";
import ChinaFlag from "../../assets/images/F1.png";
import IndiaFlag from "../../assets/images/F2.png";
// React Icons
import { FaUser, FaPhone, FaEnvelope, FaCity } from "react-icons/fa";

export const Bform = () => {
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
            Source: "Brand Development Page",  // Optional hidden field
            Stage: "Fresh",          // Optional hidden field
            date_and_time: new Date().toISOString(), // Optional hidden field with current timestamp
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
    } catch (error) {
      console.error(
        "Error submitting to Airtable:",
        error.response?.data || error.message
      );
      alert("Failed to submit form. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-white py-10 px-4" data-aos="fade-up">
      {/* === FLAG + CLOUD DECORATIONS === */}
      <img
        src={ChinaFlag}
        alt="China Flag"
        className="absolute top-10 left-0 w-24 md:w-32 z-0"
      />
      <img
        src={IndiaFlag}
        alt="India Flag"
        className="absolute top-10 right-0 w-24 md:w-32 z-0"
      />

      {/* Heading */}
      <div className="bg-red-600 text-white text-center font-semibold py-2 rounded-t-lg max-w-4xl mx-auto relative z-10">
        Fill the form and just wait, we will contact you soon
      </div>

      {/* Form Container */}
      <div className="border-2 border-red-500 rounded-b-lg max-w-4xl mx-auto flex flex-col md:flex-row overflow-hidden mt-2 relative z-10 bg-white">
        {/* Left Image */}
        <div className="md:w-1/2 w-full hidden md:block">
          <img
            src={rectangle}
            alt="Robot"
            className="w-full h-123 object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full p-6 space-y-4 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600" />
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 border-2 border-red-500 rounded px-3 py-2"
              />
            </div>

            {/* Mobile */}
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600" />
              <input
                name="mobile"
                type="tel"
                placeholder="Mobile no:"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full pl-10 border-2 border-red-500 rounded px-3 py-2"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 border-2 border-red-500 rounded px-3 py-2"
              />
            </div>

            {/* City */}
            <div className="relative">
              <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600" />
              <input
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full pl-10 border-2 border-red-500 rounded px-3 py-2"
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Services:
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  "Brand Development",
                  "Dropshipping",
                  "USA LLC Formation",
                  "Canton Fair",
                  "Video Call",
                ].map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2 cursor-pointer"
                  >
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

            {/* Title */}
            <div className="text-center font-bold text-red-600 text-xl">
              Request a <span className="text-3xl">CALLBACK</span>
            </div>

            {/* Submit */}
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
    </section>
  );
};

export default Bform;
