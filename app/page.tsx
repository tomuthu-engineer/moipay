"use client";

import { useSearchParams } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  phoneNumber: string;
  address: string;
}

export default function Home() {
  const searchParams = useSearchParams();
  const formId = searchParams.get("formId") || "default"; // Default to "default" if formId is not provided

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    address: "",
  });

  // Handle input changes and update formData
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formId, ...formData }), // Pass formId with form data
    });

    const result = await response.json();
    if (response.ok) {
      alert("Form submitted successfully!");
    } else {
      alert(`Submission failed: ${result.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen sm:bg-[#FFB6C1] bg-[#F8E1E1]">
      {/* On mobile devices and above, the background is solid pink for desktop and light pink for mobile */}
      <div className="w-full h-screen sm:w-full sm:max-w-lg sm:h-auto p-8 bg-white rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-[#F84464] mb-6">
          Welcome to Moi Book
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name Input */}
          <div className="relative">
            <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2 block">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F84464]"
            />
          </div>

          {/* Phone Number Input */}
          <div className="relative">
            <label htmlFor="phoneNumber" className="text-lg font-medium text-gray-700 mb-2 block">
              Phone Number:
            </label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F84464]"
            />
          </div>

          {/* Address Input */}
          <div className="relative">
            <label htmlFor="address" className="text-lg font-medium text-gray-700 mb-2 block">
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your address"
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F84464]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#F84464] text-white font-semibold rounded-md hover:bg-[#f62d4c] focus:outline-none focus:ring-4 focus:ring-[#F84464] transition duration-300"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
