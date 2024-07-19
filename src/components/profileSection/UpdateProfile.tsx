import React, { useState } from 'react';

interface FormData {
    username: string;
    dob: string;
    gender: string;
}

const UpdateProfile: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        dob: '',
        gender: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Update Profile</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-sm font-medium text-gray-700 mb-2">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
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
