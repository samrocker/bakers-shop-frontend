"use client";
import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaSignOutAlt } from 'react-icons/fa';
import MobileShowPopup from './MobileShowPopup';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Address from '@/components/profileSection/Address';
import ForgotPassword from '@/components/profileSection/ForgotPassword';
import GetProfile from '@/components/profileSection/updateProfile/getProfile';

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const router = useRouter();

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };


  useEffect(() => {
    const token = localStorage.getItem("Token");
    
    if (!token) {
      router.push("/");
    }
  }, []);


  const LogOut = async () => {
    try {
      localStorage.removeItem("Token")
      router.push('/account'); // redirect to login page after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className='bg-[#FFF7F3] p-10'>
      <MobileShowPopup />
      <div className="max-w-[1280px] m-auto p-10 lg:p-0">
        <span className="text-sm text-light flex flex-row items-center">
          Home <FaChevronRight style={{ fontSize: "20px" }} />
          Dashboard
        </span>
        <h1 className="text-2xl font-semibold">My Account</h1>
        <div className="flex flex-wrap gap-10 flex-col lg:flex-row mt-10">
          <div className="flex-[1.5]">
            <div className="w-full bg-white p-4 flex flex-col gap-2 shadow-lg">
              <button
                className={`px-4 py-5 text-left text-md font-Merienda font-bold rounded-lg ${activeTab === "tab1" ? "bg-[#fff] text-zinc-900 border-black/20 border-[1px]" : ""}`}
                onClick={() => handleTabClick("tab1")}
              >
                Address
              </button>
              <button
                className={`px-4 py-5 text-left text-md font-Merienda font-bold rounded-lg ${activeTab === "tab2" ? "bg-[#fff] text-zinc-900 border-black/20 border-[1px]" : ""}`}
                onClick={() => handleTabClick("tab2")}
              >
                update profile
              </button>
              <button
                className={`px-4 py-5 text-left text-md font-Merienda font-bold rounded-lg ${activeTab === "tab4" ? "bg-[#fff] text-zinc-900 border-black/20 border-[1px]" : ""}`}
                onClick={() => handleTabClick("tab4")}
              >
                forgot Password
              </button>
              <button
                className={`px-4 py-5 text-left text-md font-Merienda font-bold rounded-lg ${activeTab === "tab5" ? "bg-[#fff] text-zinc-900 border-black/20 border-[1px]" : ""}`}
                onClick={() => handleTabClick("tab5")}
              >
                layout
              </button>
              <button
                className="flex-center gap-3 bg-black p-3 text-white rounded-md"
                onClick={LogOut}
              >
                Log Out <FaSignOutAlt />
              </button>
            </div>
          </div>
          <div className="flex-[3]">
            {activeTab === "tab1" && (
              <div>
                {/* <h2 className="text-xl font-bold">Address</h2>
                <p>Content for Address goes here.</p> */}
                <Address />
              </div>
            )}
            {activeTab === "tab2" && (
              <div>
                {/* <h2 className="text-xl font-bold">update profile</h2>
                <p>Content for update profile goes here.</p> */}
                <GetProfile />
              </div>
            )}
            {activeTab === "tab4" && (
              <div>
                {/* <h2 className="text-xl font-bold"> forgot Password</h2>
                <p>Content for  forgot Password goes here.</p>                 */}
                <ForgotPassword />
              </div>
            )}
            {activeTab === "tab5" && (
              <div>
                <h2 className="text-xl font-bold">Layout</h2>
                <p>Content for Layout goes here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
