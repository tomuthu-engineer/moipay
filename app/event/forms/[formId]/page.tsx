// app/event/forms/[formId]/page.tsx
'use client'

import { useParams } from "next/navigation";

const FormPage = () => {
  const params = useParams(); // Access dynamic params
  const { formId } = params; // Extract the formId from the params

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFB6C1]">
      <div className="w-full sm:w-full sm:max-w-lg p-8 bg-white rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-[#F84464] mb-6">
          Welcome to Moi Book : {formId}
        </h1>
        <form className="space-y-6 mt-6">
          {/* Name Input */}
          <div className="relative">
            <label
              htmlFor="name"
              className="text-lg font-medium text-gray-700 mb-2 block"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F84464]"
            />
          </div>

          {/* Phone Number Input */}
          <div className="relative">
            <label
              htmlFor="phoneNumber"
              className="text-lg font-medium text-gray-700 mb-2 block"
            >
              Phone Number:
            </label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              required
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F84464]"
            />
          </div>

          {/* Address Input */}
          <div className="relative">
            <label
              htmlFor="address"
              className="text-lg font-medium text-gray-700 mb-2 block"
            >
              Address:
            </label>
            <textarea
              id="address"
              name="address"
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
};

export default FormPage;
