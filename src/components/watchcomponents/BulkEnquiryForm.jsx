
import React, { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaCity, FaBoxes } from "react-icons/fa";

const BulkEnquiryForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Mobile: "",
    Email: "",
    City: "",
    Quantity: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME_WATCH_FORM}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: formData.Name,
                  Mobile: formData.Mobile,
                  Email: formData.Email,
                  City: formData.City,
                  Quantity: formData.Quantity,
                },
              },
            ],
          }),
        }
      );

      const result = await response.json();
      console.log("Airtable Response:", result);

      if (!response.ok) {
        throw new Error(result?.error?.message || "Failed to submit form");
      }

      setSuccess(true);
      setFormData({ Name: "", Mobile: "", Email: "", City: "", Quantity: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-50 to-red-50 py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-3 tracking-wide">
        Want <span className="text-red-600 italic">LA BELLA MONTE</span> in Bulk?
      </h1>
      <p className="text-center mb-8 text-base text-gray-600">
        Fill the form below and we’ll get back to you
      </p>

      {/* Form Container */}
      <div className="w-[90%] max-w-md bg-white border border-red-200 shadow-xl rounded-2xl p-8">
        <h2 className="text-center font-bold text-xl mb-6 text-gray-800">
          Enquire about Watch
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Input Group */}
          {[
            { name: "Name", label: "Name", icon: <FaUser className="text-red-600" /> },
            { name: "Mobile", label: "Mobile no:", icon: <FaPhoneAlt className="text-red-600" /> },
            { name: "Email", label: "Email:", icon: <FaEnvelope className="text-red-600" /> },
            { name: "City", label: "City:", icon: <FaCity className="text-red-600" /> },
            { name: "Quantity", label: "Quantity:", icon: <FaBoxes className="text-red-600" /> },
          ].map((field, index) => (
            <div
              key={index}
              className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-red-600 transition"
            >
              <span className="mr-3 text-lg">{field.icon}</span>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.label}
                className="flex-1 bg-transparent focus:outline-none text-gray-700"
              />
            </div>
          ))}

          {/* Checkbox */}
          <div className="flex items-center text-sm mt-2">
            <input type="checkbox" id="terms" className="mr-2 accent-red-600" />
            <label htmlFor="terms" className="text-gray-700">
              I accept the{" "}
              <a href="#" className="text-red-600 font-medium underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-full mt-4 hover:bg-red-700 shadow-md transition transform hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>

          {/* Status Message */}
          {success && <p className="text-green-600 mt-3 text-center">✅ Submitted Successfully!</p>}
          {error && <p className="text-red-600 mt-3 text-center">❌ {error}</p>}
        </form>
      </div>
    </div>
  );
};

export default BulkEnquiryForm;
