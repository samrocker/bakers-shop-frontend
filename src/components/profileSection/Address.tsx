"use client";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetAddress from "./GetAddress";

const Address: React.FC = () => {
  const [addressData, setAddressData] = useState({
    addressName: "",
    addressLine1: "",
    addressLine2: "",
    pin: "",
    city: "",
    state: "",
    country: "",
  });

  const token = localStorage.getItem("Token");

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api.marutibakersmart.com/v1/profile/add-address",
        addressData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      console.log("Response from address: ", response.data);
      toast.success("Successfully added address");

      setTimeout(() => window.location.reload() , 2000)
    } catch (error) {
      console.error("Error adding address: ", error);
      toast.error("Failed to add address");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main>
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Address Form</h1>
        <div className="space-y-8">
          <div className="flex flex-col">
            <label
              htmlFor="addressName"
              className="text-sm font-semibold mb-2 text-gray-700"
            >
              Address Name:
            </label>
            <input
              type="text"
              id="addressName"
              name="addressName"
              value={addressData.addressName}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-5">
            <div className="flex-1 flex flex-col mb-5 lg:mb-0">
              <label
                htmlFor="addressLine1"
                className="text-sm font-semibold mb-2 text-gray-700"
              >
                Address Line 1:
              </label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={addressData.addressLine1}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex-1 flex flex-col mb-5 lg:mb-0">
              <label
                htmlFor="addressLine2"
                className="text-sm font-semibold mb-2 text-gray-700"
              >
                Address Line 2:
              </label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={addressData.addressLine2}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-5">
            <div className="flex-1 flex flex-col mb-5 lg:mb-0">
              <label
                htmlFor="pin"
                className="text-sm font-semibold mb-2 text-gray-700"
              >
                PIN Code:
              </label>
              <input
                type="text"
                id="pin"
                name="pin"
                value={addressData.pin}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            <div className="flex-1 flex flex-col mb-5 lg:mb-0">
              <label
                htmlFor="city"
                className="text-sm font-semibold mb-2 text-gray-700"
              >
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={addressData.city}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            <div className="flex-1 flex flex-col mb-5 lg:mb-0">
              <label
                htmlFor="state"
                className="text-sm font-semibold mb-2 text-gray-700"
              >
                State:
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={addressData.state}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
            <div className="flex-[3.5] flex flex-col mb-5 lg:mb-0">
              <label
                htmlFor="country"
                className="text-sm font-semibold mb-2 text-gray-700"
              >
                Country:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={addressData.country}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex-[1.5] flex justify-end lg:justify-start">
              <button
                onClick={handleSubmit}
                className="flex-1 py-2 bg-[#000000] text-white font-semibold rounded-md hover:bg-[#FFF7F3] hover:border-[2px] hover:border-[black] hover:text-black transition duration-300"
              >
                Add Address
              </button>
            </div>
          </div>

          <GetAddress />
        </div>
      </div>
    </main>
  );
};

export default Address;
