"use client";
import React, { useState } from 'react';
import { FaChevronRight, FaSignOutAlt } from 'react-icons/fa';
import MobileShowPopup from './MobileShowPopup';
import Wishlist from './Wishlist';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ProfilePage from '@/components/profileSection/ProfilePage';

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const router = useRouter();

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const LogOut = async () => {
    try {
      await signOut({ redirect: false });
      router.push('/login'); // redirect to login page after logout
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
                My Orders
              </button>
              <button
                className={`px-4 py-5 text-left text-md font-Merienda font-bold rounded-lg ${activeTab === "tab3" ? "bg-[#fff] text-zinc-900 border-black/20 border-[1px]" : ""}`}
                onClick={() => handleTabClick("tab3")}
              >
                My Wishlist
              </button>
              <button
                className={`px-4 py-5 text-left text-md font-Merienda font-bold rounded-lg ${activeTab === "tab4" ? "bg-[#fff] text-zinc-900 border-black/20 border-[1px]" : ""}`}
                onClick={() => handleTabClick("tab4")}
              >
                Profile
              </button>
              <button
                className={`px-4 py-5 text-left text-md font-Merienda font-bold rounded-lg ${activeTab === "tab5" ? "bg-[#fff] text-zinc-900 border-black/20 border-[1px]" : ""}`}
                onClick={() => handleTabClick("tab5")}
              >
                Change Password
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
                <h2 className="text-xl font-bold">Address</h2>
                <p>Content for Address goes here.</p>
              </div>
            )}
            {activeTab === "tab2" && (
              <div>
                <h2 className="text-xl font-bold">My Orders</h2>
                <p>Content for My Orders goes here.</p>
              </div>
            )}
            {activeTab === "tab3" && (
              <>
                <Wishlist />
              </>
            )}
            {activeTab === "tab4" && (
              <div>
                <h2 className="text-xl font-bold">Profile</h2>
                <p>Content for Profile goes here.</p>
                <ProfilePage />
              </div>
            )}
            {activeTab === "tab5" && (
              <div>
                <h2 className="text-xl font-bold">Change Password</h2>
                <p>Content for Change Password goes here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
