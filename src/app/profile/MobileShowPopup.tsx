// components/MobileShowPopup.tsx
"use client";
import MobileVerificationForm from "@/components/user/mobile/Mobile";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

interface UserData {
  mobileVerified: boolean; // Add other properties of the user data object
}

const MobileShowPopup = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (status === "authenticated" && session?.user?.email) {
          const response = await axios.get(`/api/users/me?email=${session.user.email}`);
          const data: UserData = response.data;
          setUserData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [session, status]);

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