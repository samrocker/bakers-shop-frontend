// components/MobileShowPopup.tsx
"use client";
import MobileVerificationForm from "@/components/mobile/Mobile";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface UserData {
  mobileVerified: boolean;
}

const MobileShowPopup = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  // Example function to simulate getting user email
  const getUserEmail = () => {
    // Replace this with your actual logic to get the user email
    return "user@example.com";
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = getUserEmail();
        if (email) {
          const response = await axios.get(`/api/users/me?email=${email}`);
          const data: UserData = response.data;
          setUserData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData && !userData.mobileVerified) {
      setShowPopup(true);
    }
  }, [userData]);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div className="bg-white rounded-lg p-8 z-10">
            <MobileVerificationForm />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileShowPopup;
