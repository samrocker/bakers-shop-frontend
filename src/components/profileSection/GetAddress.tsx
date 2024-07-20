import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";

interface Address {
  id : string;
  addressName: string;
  addressLine1: string;
  addressLine2: string;
  pin: string;
  city: string;
  state: string;
  country: string;
}

const GetAddress: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem("Token");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(
          "https://api.marutibakersmart.com/v1/profile/get-user-address",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAddresses(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch addresses");
        toast.error("Failed to fetch addresses");
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [token]);

  const deleteAddress = async (id: string) => {
    setLoading(true);
    try {
        
      const deleteResponse = axios.delete(
        `https://api.marutibakersmart.com/v1/profile/delete-address/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );

      toast.success("deleted address");
      setTimeout(() => window.location.reload() , 2000)
      console.log("Response of delete", deleteResponse);
    } catch (error) {
      console.log("Error for deledeleteAddresste", error);
      toast.error("Failed to delete addresses");
    }finally{
        setLoading(false);
    }
  };

  return (
    <main>
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          User Addresses
        </h1>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : addresses.length === 0 ? (
          <p className="text-gray-600">No addresses found.</p>
        ) : (
          <div className="space-y-8">
            {addresses.map((address, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-md"
              >
                <p className="text-sm font-semibold text-gray-700">
                  Address Name: {address.addressName}
                </p>
                <p className="text-sm text-gray-700">
                  Address Line 1: {address.addressLine1}
                </p>
                <p className="text-sm text-gray-700">
                  Address Line 2: {address.addressLine2}
                </p>
                <p className="text-sm text-gray-700">PIN Code: {address.pin}</p>
                <p className="text-sm text-gray-700">City: {address.city}</p>
                <p className="text-sm text-gray-700">State: {address.state}</p>
                <p className="text-sm text-gray-700">
                  Country: {address.country}
                </p>
                <Button variant="destructive" className="mt-3 font-Merienda font-bold" onClick={() => deleteAddress(address.id)}>delete</Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default GetAddress;
