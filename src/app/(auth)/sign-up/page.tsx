'use client'

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import image1 from '../../../../public/images/product-3.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!agree) {
      toast.error("You must agree to the terms and conditions.");
      return;
    }

    setLoading(true);
    try {
      console.log("Registering user with mobile number:", mobileNumber);
      const response = await axios.post("https://api.marutibakersmart.com/v1/auth/register", {
        mobileNumber,
        password
      });

      console.log("Register response:", response.data);
      toast.success("OTP sent successfully!");
      setIsRegistered(true);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log("Error response:", error.response.data);
        toast.error(error.response.data.message || "Error creating account.");
      } else {
        console.log("Network error:", error);
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    try {
      console.log("Verifying OTP for mobile number:", mobileNumber);
      const response = await axios.post("https://api.marutibakersmart.com/v1/auth/login", {
        mobileNumber,
        password,
        otp
      });

      console.log("OTP verification response:", response.data);
      toast.success("Account verified successfully!");
      // Handle successful OTP verification (e.g., redirect to another page, show success message, etc.)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log("Error response:", error.response.data);
        toast.error(error.response.data.message || "Error verifying OTP.");
      } else {
        console.log("Network error:", error);
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F5EEDE]">
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-center px-5">
          <div className="min-h-fit w-full flex-between flex-col-reverse lg:flex-row bg-white rounded-3xl gap-5 lg:gap-0 py-20 lg:py-0">
            <div className="flex-[1] w-full flex-center flex-col gap-10 px-5">
              <h1 className="text-2xl md:text-4xl font-Lora font-bold">
                {isRegistered ? "Verify Your OTP" : "Create Your Account"}
              </h1>
              {!isRegistered ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center lg:items-start justify-center">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="py-2 px-5 w-[250px] flex-start border-[1px] border-black/75 placeholder:text-black/50 placeholder:font-Lora placeholder:font-medium rounded-lg"
                    aria-label="Phone Number"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-2 px-5 w-[250px] flex-start border-[1px] border-black/75 placeholder:text-black/50 placeholder:font-Lora placeholder:font-medium rounded-lg"
                    aria-label="Password"
                  />
                  <div className="flex-center gap-2">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="cursor-pointer"
                      aria-label="Agree to terms and conditions"
                    />
                    <label
                      htmlFor="agree"
                      className="text-xs md:text-sm text-black font-Lora font-normal"
                    >
                      Do you agree with our
                      <span className="text-link"> terms and conditions?</span>
                    </label>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className={`py-2 px-5 min-w-[250px] flex-center rounded-lg text-lg font-Lora font-bold cursor-pointer ${
                      loading ? "bg-gray-500" : "bg-[#F7553E] hover:bg-[#d44835] text-white"
                    }`}
                  >
                    {loading ? "Loading..." : "Create Account"}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="flex flex-col gap-5 items-center lg:items-start justify-center">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="py-2 px-5 w-[250px] flex-start border-[1px] border-black/75 placeholder:text-black/50 placeholder:font-Lora placeholder:font-medium rounded-lg"
                    aria-label="Enter OTP"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className={`py-2 px-5 min-w-[250px] flex-center rounded-lg text-lg font-Lora font-bold cursor-pointer ${
                      loading ? "bg-gray-500" : "bg-[#F7553E] hover:bg-[#d44835] text-white"
                    }`}
                  >
                    {loading ? "Loading..." : "Verify OTP"}
                  </Button>
                </form>
              )}
            </div>
            <div className="h-full flex-[1] w-full flex-center">
              <Image src={image1} alt="Product Image" className="w-full object-cover rounded-r-3xl hidden lg:block" />
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
      {/* <FooterSection /> */}
    </section>
  );
};

export default Page;
