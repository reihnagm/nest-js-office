"use client";

import React, { useState } from "react";

// Google Maps Embed API with NKRI Kemang Office as the location
const googleMapSrc = `https://www.google.com/maps/embed/v1/place?q=NKRI+Kemang+Office,+Jakarta&key=AIzaSyBFRpXPf8BXaR22nDvvx2ghBfbUbGGX8N8&zoom=15`;

const AboutUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Form Submitted: ${formData.name}, ${formData.email}, ${formData.message}`);
  };

  return (
    <div className="container mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Google Maps with Marker */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            src={googleMapSrc}
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - NKRI Kemang Office"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
