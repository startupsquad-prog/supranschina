import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../../assets/images/q2.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const airtableUrl = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_AIRTABLE_TABLE_NAME_GET_IN_TOUCH}`;

    try {
      await axios.post(
        airtableUrl,
        {
          fields: {
            "First Name": formData.firstName,
            "Last Name": formData.lastName,
            Email: formData.email,
            Phone: formData.phone,
            Message: formData.message,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Airtable Error:", error.response?.data || error.message);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FCBAB6] py-16 px-4">
      <h2
        className="text-3xl md:text-5xl font-semibold text-right mr-43 mb-2"
        style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.6)" }}
      >
        GET IN TOUCH
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Image - hidden on small devices */}
        <div
          className="w-full md:w-1/2 flex justify-center hidden md:flex"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img
            src={Contact}
            alt="Profile"
            className="w-72 h-110 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ml-30"
          />
        </div>

        {/* Form Section */}
        <div
          className="w-full md:w-1/ bg-red-600 text-white p-8 rounded-xl shadow-lg"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-1 text-sm">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                  className="w-full p-2 rounded text-black text-sm bg-white transition-shadow duration-300 focus:shadow-lg focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 text-sm">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                  className="w-full p-2 rounded text-black text-sm bg-white transition-shadow duration-300 focus:shadow-lg focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-1 text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className="w-full p-2 rounded text-black text-sm bg-white transition-shadow duration-300 focus:shadow-lg focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 text-sm">Phone number</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1-201-555-0123"
                  required
                  className="w-full p-2 rounded text-black text-sm bg-white transition-shadow duration-300 focus:shadow-lg focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-2 rounded text-black text-sm bg-white transition-shadow duration-300 focus:shadow-lg focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-100 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          <p className="text-xs mt-4 text-white/90">
            By pressing the submit button, I agree to you contacting me by email
            and/or phone to share opportunities exclusively available to
            customers. I also understand that any information I’ve shared in
            this form is subject to our platform’s Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
