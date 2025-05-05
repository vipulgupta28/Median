import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OwnerJoiningForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // State to track input values and their validation status
  const [formData, setFormData] = useState({
    firstName: { value: "", isValid: null },
    lastName: { value: "", isValid: null },
    email: { value: "", isValid: null },
    emailOtp: { value: "", isValid: null },
    phone: { value: "", isValid: null },
    phoneOtp: { value: "", isValid: null },
    password: { value: "", isValid: null },
    channelName: { value: "", isValid: null },
    channelUrl: { value: "", isValid: null },
    channelEmail: { value: "", isValid: null },
    channelPassword: { value: "", isValid: null },
    cardNumber: { value: "", isValid: null },
    expiryDate: { value: "", isValid: null },
    cvv: { value: "", isValid: null },
  });

  // Validation functions
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
        return value.length >= 2;
      case "email":
      case "channelEmail":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "phone":
        return /^\d{10}$/.test(value);
      case "emailOtp":
      case "phoneOtp":
        return /^\d{4,6}$/.test(value);
      case "password":
      case "channelPassword":
        return value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value);
      case "channelName":
        return value.length >= 3;
      case "channelUrl":
        return /^https?:\/\/(www\.)?youtube\.com\/.+$/.test(value);
      case "cardNumber":
        return /^\d{16}$/.test(value);
      case "expiryDate":
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
      case "cvv":
        return /^\d{3,4}$/.test(value);
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
    <div className="flex justify-center mt-10 scrollY:none min-h-screen ">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 h-full w-300 bg-white shadow-lg rounded-lg"
      >
        {step === 1 && (
          <>
            <h1 className="text-2xl font-semibold text-gray-900 text-center">
              Join as an Owner
            </h1>
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
                    <span className="absolute right-3 top-11 text-green-500">✓</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <label className="font-medium text-gray-800">Email Address</label>
              <div className="grid grid-cols-12 gap-3 mt-2">
                <div className="col-span-5 relative">
                  <input
                    name="email"
                    value={formData.email.value}
                    onChange={handleInputChange}
                    className={`border p-3 rounded-md col-span-5 focus:ring-2 focus:ring-gray-400 outline-none w-full ${
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
                    className={`border p-3 rounded-md col-span-3 focus:ring-2 focus:ring-gray-400 outline-none w-full ${
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
            <div className="mt-6">
              <label className="font-medium text-gray-800">Phone Number</label>
              <div className="grid grid-cols-12 gap-3 mt-2">
                <div className="col-span-5 relative">
                  <input
                    name="phone"
                    value={formData.phone.value}
                    onChange={handleInputChange}
                    className={`border p-3 rounded-md col-span-5 focus:ring-2 focus:ring-gray-400 outline-none w-full ${
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
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 hover:cursor-pointer transition col-span-2">
                  Send OTP
                </button>
                <div className="col-span-3 relative">
                  <input
                    name="phoneOtp"
                    value={formData.phoneOtp.value}
                    onChange={handleInputChange}
                    className={`border p-3 rounded-md col-span-3 focus:ring-2 focus:ring-gray-400 outline-none w-full ${
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
              <div className="mt-6 relative">
                <label className="font-medium text-gray-800">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password.value}
                  onChange={handleInputChange}
                  className={`border p-3 rounded-md w-full mt-2 focus:ring-2 focus:ring-gray-400 outline-none ${
                    formData.password.isValid === false
                      ? "border-red-500"
                      : formData.password.isValid === true
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Create Password for Profile"
                />
                {formData.password.isValid === true && (
                  <span className="absolute right-3 top-12 text-green-500">✓</span>
                )}
              </div>
            </div>
            <div className="mt-6">
              <button onClick={() => setStep(2)} className="mt-6 w-full hover:cursor-pointer bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                Next
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h1 className="text-2xl font-semibold text-gray-900 text-center">
              YouTube Channel Details
            </h1>
            <div className="mt-6 relative">
              <label className="font-medium text-gray-800">Channel Name</label>
              <input
                name="channelName"
                value={formData.channelName.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md w-full mt-2 focus:ring-2 focus:ring-gray-400 outline-none ${
                  formData.channelName.isValid === false
                    ? "border-red-500"
                    : formData.channelName.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter Channel Name"
              />
              {formData.channelName.isValid === true && (
                <span className="absolute right-3 top-12 text-green-500">✓</span>
              )}
            </div>
            <div className="mt-6 relative">
              <label className="font-medium text-gray-800">Channel URL</label>
              <input
                name="channelUrl"
                value={formData.channelUrl.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md w-full mt-2 focus:ring-2 focus:ring-gray-400 outline-none ${
                  formData.channelUrl.isValid === false
                    ? "border-red-500"
                    : formData.channelUrl.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter Channel URL"
              />
              {formData.channelUrl.isValid === true && (
                <span className="absolute right-3 top-12 text-green-500">✓</span>
              )}
            </div>
            <div className="mt-6 relative">
              <label className="font-medium text-gray-800">Channel Email</label>
              <input
                name="channelEmail"
                value={formData.channelEmail.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md w-full mt-2 focus:ring-2 focus:ring-gray-400 outline-none ${
                  formData.channelEmail.isValid === false
                    ? "border-red-500"
                    : formData.channelEmail.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter email linked to your YouTube channel"
              />
              {formData.channelEmail.isValid === true && (
                <span className="absolute right-3 top-12 text-green-500">✓</span>
              )}
            </div>
            <div className="mt-6 relative">
              <label className="font-medium text-gray-800">Channel Password</label>
              <input
                type="password"
                name="channelPassword"
                value={formData.channelPassword.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md w-full mt-2 focus:ring-2 focus:ring-gray-400 outline-none ${
                  formData.channelPassword.isValid === false
                    ? "border-red-500"
                    : formData.channelPassword.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter password of your YouTube channel"
              />
              {formData.channelPassword.isValid === true && (
                <span className="absolute right-3 top-12 text-green-500">✓</span>
              )}
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={() => setStep(1)} className="bg-black hover:cursor-pointer text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
                Back
              </button>
              <button onClick={() => setStep(3)} className="bg-black hover:cursor-pointer text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                Next
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <h1 className="text-2xl font-semibold text-gray-900 text-center">
              Payment Details
            </h1>
            <div className="mt-6 relative">
              <label className="font-medium text-gray-800">Card Number</label>
              <input
                name="cardNumber"
                value={formData.cardNumber.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md w-full mt-2 focus:ring-2 focus:ring-gray-400 outline-none ${
                  formData.cardNumber.isValid === false
                    ? "border-red-500"
                    : formData.cardNumber.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter Card Number"
              />
              {formData.cardNumber.isValid === true && (
                <span className="absolute right-3 top-12 text-green-500">✓</span>
              )}
            </div>
            <div className="mt-6 relative">
              <label className="font-medium text-gray-800">Expiry Date</label>
              <input
                name="expiryDate"
                value={formData.expiryDate.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md w-full mt-2 focus:ring-2 focus:ring-gray-400 outline-none ${
                  formData.expiryDate.isValid === false
                    ? "border-red-500"
                    : formData.expiryDate.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="MM/YY"
              />
              {formData.expiryDate.isValid === true && (
                <span className="absolute right-3 top-12 text-green-500">✓</span>
              )}
            </div>
            <div className="mt-6 relative">
              <label className="font-medium text-gray-800">CVV</label>
              <input
                name="cvv"
                value={formData.cvv.value}
                onChange={handleInputChange}
                className={`border p-3 rounded-md w-full mt-2 focus:ring-2 focus:ring-gray-400 outline-none ${
                  formData.cvv.isValid === false
                    ? "border-red-500"
                    : formData.cvv.isValid === true
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter CVV"
              />
              {formData.cvv.isValid === true && (
                <span className="absolute right-3 top-12 text-green-500">✓</span>
              )}
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={() => setStep(2)} className="bg-black hover:cursor-pointer text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
                Back
              </button>
              <button
                onClick={() => navigate("/workspacepage")}
                className="bg-black hover:cursor-pointer text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default OwnerJoiningForm;