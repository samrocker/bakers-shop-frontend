"use client";
import React, { useState } from 'react';

// Define the component
const Address: React.FC = () => {
    // Define state for each form input
    const [addressName, setAddressName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [pin, setPin] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const addressData = {
            addressName,
            addressLine1,
            addressLine2,
            pin,
            city,
            state,
            country
        };
        console.log('Address Submitted:', addressData);
        // Handle address data (e.g., send to an API)
    };

    return (
        <main>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Address Form</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex flex-col">
                        <label htmlFor="addressName" className="text-sm font-semibold mb-2 text-gray-700">Address Name:</label>
                        <input
                            type="text"
                            id="addressName"
                            name="addressName"
                            value={addressName}
                            onChange={(e) => setAddressName(e.target.value)}
                            required
                            className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:gap-x-5">
                        <div className="flex-1 flex flex-col mb-5 lg:mb-0">
                            <label htmlFor="addressLine1" className="text-sm font-semibold mb-2 text-gray-700">Address Line 1:</label>
                            <input
                                type="text"
                                id="addressLine1"
                                name="addressLine1"
                                value={addressLine1}
                                onChange={(e) => setAddressLine1(e.target.value)}
                                required
                                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>
                        <div className="flex-1 flex flex-col mb-5 lg:mb-0">
                            <label htmlFor="addressLine2" className="text-sm font-semibold mb-2 text-gray-700">Address Line 2:</label>
                            <input
                                type="text"
                                id="addressLine2"
                                name="addressLine2"
                                value={addressLine2}
                                onChange={(e) => setAddressLine2(e.target.value)}
                                required
                                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:gap-x-5">
                        <div className="flex-1 flex flex-col mb-5 lg:mb-0">
                            <label htmlFor="pin" className="text-sm font-semibold mb-2 text-gray-700">PIN Code:</label>
                            <input
                                type="text"
                                id="pin"
                                name="pin"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                required
                                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>

                        <div className="flex-1 flex flex-col mb-5 lg:mb-0">
                            <label htmlFor="city" className="text-sm font-semibold mb-2 text-gray-700">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>

                        <div className="flex-1 flex flex-col mb-5 lg:mb-0">
                            <label htmlFor="state" className="text-sm font-semibold mb-2 text-gray-700">State:</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
                        <div className="flex-[3.5] flex flex-col mb-5 lg:mb-0">
                            <label htmlFor="country" className="text-sm font-semibold mb-2 text-gray-700">Country:</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                                className="border border-gray-300 p-2 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>
                        <div className="flex-[1.5] flex justify-end lg:justify-start">
                            <button type="submit" className="flex-1 lg:w-auto py-2 bg-[#000000] text-white font-semibold rounded-md hover:bg-[#FFF7F3] hover:border-[2px] hover:border-[black] hover:text-black transition duration-300">Add Address</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Address;
