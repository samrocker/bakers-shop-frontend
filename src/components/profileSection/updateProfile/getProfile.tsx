import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProfile from './updateProfile';


interface ProfileData {
 userName: string;
  dob: string;
  gender: string;
}

const GetProfile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem("Token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://api.marutibakersmart.com/v1/profile/get-profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch profile");
        toast.error("Failed to fetch profile");
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  return (
    <main>
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Profile Details</h1>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : profileData ? (
          <UpdateProfile
            userName={profileData.userName}
            dob={profileData.dob}
            gender={profileData.gender}
          />
        ) : (
          <p className="text-gray-600">No profile data found.</p>
        )}
      </div>
    </main>
  );
};

export default GetProfile;
