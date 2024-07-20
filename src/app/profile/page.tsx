'use client'
import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Address from '@/components/profileSection/Address';
import ForgotPassword from '@/components/profileSection/ForgotPassword';
import GetProfile from '@/components/profileSection/updateProfile/getProfile';

const ProfileContent = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("Token");

      if (!token) {
        router.push("/");
      }
    }
  }, [router]);

  const LogOut = async () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("Token");
      }
      router.push('/account'); // redirect to login page after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className='bg-[#FFF7F3] p-10'>
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
                Update Profile
              </button>
              <button
                className={`px-4 py-5 text-left text-md font-Merienda font-bold rounded-lg ${activeTab === "tab4" ? "bg-[#fff] text-zinc-900 border-black/20 border-[1px]" : ""}`}
                onClick={() => handleTabClick("tab4")}
              >
                Forgot Password
              </button>
              <button
                className={`px-4 py-5 text-left text-md font-Merienda font-bold rounded-lg ${activeTab === "tab5" ? "bg-[#fff] text-zinc-900 border-black/20 border-[1px]" : ""}`}
                onClick={() => handleTabClick("tab5")}
              >
                Layout
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
                <Address />
              </div>
            )}
            {activeTab === "tab2" && (
              <div>
                <GetProfile />
              </div>
            )}
            {activeTab === "tab4" && (
              <div>
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

export default ProfileContent;
