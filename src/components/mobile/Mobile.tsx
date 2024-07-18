"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { signOut } from 'next-auth/react';

const MobileVerificationForm = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
    const [verificationError, setVerificationError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSendCode = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('/api/mobile/get-otp', { phoneNumber });
            setIsCodeSent(true);
            setVerificationError('');
        } catch (error) {
            console.error('Error sending verification code:', error);
            setVerificationError('An error occurred while sending verification code.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerify = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('/api/mobile/verify-otp', { phoneNumber, otp: verificationCode });
            window.location.reload();
        } catch (error) {
            console.error('Error verifying mobile:', error);
            setVerificationError('An error occurred while verifying mobile.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut({ redirect: false });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="justify-center items-center flex mt-5 mb-5">
            <div className="w-full">
                <div className='flex flex-col lg:flex-row lg:gap-10'>
                    <div className='flex-[1]'>
                        <h2 className="text-2xl font-semibold mb-4">Mobile Number</h2>
                        <p className="mb-4">Please enter your mobile number to receive a verification code.</p>
                    </div>
                    <div className='flex-[1]'>
                        <input
                            type="tel"
                            className="w-full p-[10px] border-[2px] border-orange-400 duration-300 focus:shadow-3xl outline-none"
                            placeholder="Mobile Number"
                            maxLength={10}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {!isCodeSent ? (
                            <button
                                className="mt-2 block text-center w-full bg-white border-[1px] p-2 font-semibold"
                                onClick={handleSendCode}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Verification Code'}
                            </button>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="mt-2 w-full border border-gray-300 rounded-md p-2 mb-4"
                                    placeholder="Verification Code"
                                    value={verificationCode}
                                    maxLength={4}
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                />
                                <button
                                    className="w-full bg-blue-500 text-white py-2 rounded-md mb-4"
                                    onClick={handleVerify}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Verifying...' : 'Verify'}
                                </button>
                            </>
                        )}
                        {verificationError && <p className="text-red-500">{verificationError}</p>}
                    </div>
                </div>
                <button
                    className="mt-4 block text-center w-[120px] bg-red-500 text-white py-2 rounded-md"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default MobileVerificationForm;
