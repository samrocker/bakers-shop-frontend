import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProfileData {
    userName: string;
    dob: string;
    gender: string;
}

interface UpdateProfileProps {
    userName: string;
    dob: string;
    gender: string;
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({ userName, dob, gender }) => {
    const [formData, setFormData] = useState<ProfileData>({
        userName: '',
        dob: '',
        gender: ''
    });

    const token = localStorage.getItem("Token");

    useEffect(() => {
        setFormData({ userName : userName, dob, gender });
    }, [userName, dob, gender]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        try {
            const response = await axios.put(
                "https://api.marutibakersmart.com/v1/profile/edit-profile",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Response from handleUpdateProfile: ", response.data);
            toast.success("Successfully updated profile");

            setTimeout(() => window.location.reload(), 2000);
        } catch (error) {
            console.error("Error updating profile: ", error);
            toast.error("Failed to update profile");
        }
    };

    return (
        <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
            <ToastContainer />
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Update Profile</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex flex-col">
                    <label htmlFor="userName" className="text-sm font-medium text-gray-700 mb-2">userName:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-shadow duration-300 box-border"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="dob" className="text-sm font-medium text-gray-700 mb-2">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-shadow duration-300 box-border"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="gender" className="text-sm font-medium text-gray-700 mb-2">Gender:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-shadow duration-300 box-border"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-[#FFF7F3] hover:border-[2px] hover:border-black hover:text-black transition duration-300 border-2 border-transparent box-border"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
