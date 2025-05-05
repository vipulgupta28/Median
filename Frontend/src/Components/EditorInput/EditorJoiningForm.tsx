import React, { useState } from "react";
import { motion } from "framer-motion";

const EditorJoiningForm: React.FC = () => {
  // State to track input values and their validation status
  const [formData, setFormData] = useState({
    firstName: { value: "", isValid: null },
    lastName: { value: "", isValid: null },
    email: { value: "", isValid: null },
    emailOtp: { value: "", isValid: null },
    phone: { value: "", isValid: null },
    phoneOtp: { value: "", isValid: null },
    username: { value: "", isValid: null },
  });

  // Validation functions
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
        return value.length >= 2;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "phone":
        return /^\d{10}$/.test(value);
      case "emailOtp":
      case "phoneOtp":
        return /^\d{4}$/.test(value);
      case "username":
        return value.length >= 3 && /^[a-zA-Z0-9_]+$/.test(value);
      default:
        return false;
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isValid = validateField(name, value);
    
    setFormData(prev => ({
      ...prev,
      [name]: { value, isValid },
    }));
  };

  return (
    <div className="flex justify-center mt-10 scrollY:none min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 h-full w-300 bg-white shadow-lg rounded-lg"
      >
        {/* Step Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 text-center">
          Join as an Editor
        </h1>

        {/* Name Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {["firstName", "lastName"].map((field) => (
            <div key={field} className="flex flex-col relative">
              <label className="font-medium text-gray-800 capitalize">{field}</label>
              <input
                name={field}
                value={formData[field].value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none ${
                  formData[field].isValid === false
                    ? "border-red-500"
                    : formData[field].isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder={`Enter ${field}`}
              />
              {formData[field].isValid === true && (
                <span className="absolute right-3 top-10 text-green-500">✓</span>
              )}
            </div>
          ))}
        </div>

        {/* Email Section */}
        <div className="mt-6">
          <label className="font-medium text-gray-800">Email Address</label>
          <div className="grid grid-cols-12 gap-3 mt-2">
            <div className="col-span-5 relative">
              <input
                name="email"
                value={formData.email.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none w-full ${
                  formData.email.isValid === false
                    ? "border-red-500"
                    : formData.email.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter email address"
              />
              {formData.email.isValid === true && (
                <span className="absolute right-3 top-4 text-green-500">✓</span>
              )}
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 hover:cursor-pointer transition col-span-2">
              Send OTP
            </button>
            <div className="col-span-3 relative">
              <input
                name="emailOtp"
                value={formData.emailOtp.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none w-full ${
                  formData.emailOtp.isValid === false
                    ? "border-red-500"
                    : formData.emailOtp.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter OTP"
              />
              {formData.emailOtp.isValid === true && (
                <span className="absolute right-3 top-4 text-green-500">✓</span>
              )}
            </div>
            <button className="bg-black hover:cursor-pointer text-white px-4 py-2 rounded-md hover:bg-gray-800 transition col-span-2">
              Verify
            </button>
          </div>
        </div>

        {/* Phone Section */}
        <div className="mt-6">
          <label className="font-medium text-gray-800">Phone Number</label>
          <div className="grid grid-cols-12 gap-3 mt-2">
            <div className="col-span-5 relative">
              <input
                name="phone"
                value={formData.phone.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none w-full ${
                  formData.phone.isValid === false
                    ? "border-red-500"
                    : formData.phone.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter Phone Number"
              />
              {formData.phone.isValid === true && (
                <span className="absolute right-3 top-4 text-green-500">✓</span>
              )}
            </div>
            <button className="bg-black hover:cursor-pointer text-white px-4 py-2 rounded-md hover:bg-gray-800 transition col-span-2">
              Send OTP
            </button>
            <div className="col-span-3 relative">
              <input
                name="phoneOtp"
                value={formData.phoneOtp.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none w-full ${
                  formData.phoneOtp.isValid === false
                    ? "border-red-500"
                    : formData.phoneOtp.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter OTP"
              />
              {formData.phoneOtp.isValid === true && (
                <span className="absolute right-3 top-4 text-green-500">✓</span>
              )}
            </div>
            <button className="bg-black hover:cursor-pointer text-white px-4 py-2 rounded-md hover:bg-gray-800 transition col-span-2">
              Verify
            </button>
          </div>
        </div>

        {/* Username Section */}
        <div className="mt-6 relative">
          <label className="font-medium text-gray-800">Create Username</label>
          <input
            name="username"
            value={formData.username.value}
            onChange={handleInputChange}
            className={`border p-3 rounded-md w-full mt-2 focus:ring-2 focus:ring-gray-400 outline-none ${
              formData.username.isValid === false
                ? "border-red-500"
                : formData.username.isValid === true
                ? "border-green-500"
                : "border-gray-300"
            }`}
            placeholder="Enter Username"
          />
          {formData.username.isValid === true && (
            <span className="absolute right-3 top-12 text-green-500">✓</span>
          )}
        </div>

        {/* Join Button */}
        <button className="mt-6 w-full hover:cursor-pointer bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Join
        </button>
      </motion.div>
    </div>
  );
};

export default EditorJoiningForm;