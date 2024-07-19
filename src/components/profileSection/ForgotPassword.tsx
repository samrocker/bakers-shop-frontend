import { useState } from 'react';

type FormData = {
  mobilenumber: string;
  otp: string;
  newpassword: string;
};

const ForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    mobilenumber: '',
    otp: '',
    newpassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to API)
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="mobilenumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            id="mobilenumber"
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition-shadow"
            required
          />
        </div>
        <div>
          <label htmlFor="newpassword" className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            id="newpassword"
            name="newpassword"
            value={formData.newpassword}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition-shadow"
            required
          />
        </div>
        <div className="flex flex-col gap-y-8 lg:gap-x-5 lg:flex-row">
          <div className='flex-[3.5] flex flex-col'>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition-shadow"
              required
            />
          </div>
          <button
            type="submit"
            className="flex-[1.5] p-[10px] bg-black text-white font-semibold rounded-md border-2 border-black shadow-sm hover:bg-[#FFF7F3] hover:border-gray-900 hover:text-black transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
