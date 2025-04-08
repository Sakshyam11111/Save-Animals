import React from 'react';
import { FaPaw, FaGlobe, FaSeedling, FaDollarSign } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaYoutube, FaMedium } from 'react-icons/fa';

const Achievements = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 bg-white flex flex-col md:flex-row items-center">

            {/* Achievements Section */}
            <div className="grid grid-cols-2 gap-8 md:w-1/2 shadow-lg rounded-lg">
                <div className="flex flex-col items-center mt-10">
                    <FaPaw className="text-orange-500 text-6xl mb-2" />
                    <h2 className="text-3xl font-bold mt-6">10,000+</h2>
                    <p className='mt-6'>Animals Saved</p>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <FaSeedling className="text-orange-500 text-6xl mb-2" />
                    <h2 className="text-3xl font-bold mt-6">2,300+</h2>
                    <p className='mt-6'>Hectares Forest Land</p>
                </div>
                <div className="flex flex-col items-center mb-10">
                    <FaGlobe className="text-orange-500 text-6xl mb-2" />
                    <h2 className="text-3xl font-bold mt-6">100K+</h2>
                    <p className='mt-6'>Members Worldwide</p>
                </div>
                <div className="flex flex-col items-center mb-10">
                    <FaDollarSign className="text-orange-500 text-6xl mb-2" />
                    <h2 className="text-3xl font-bold mt-6">$200M+</h2>
                    <p className='mt-6'>Funds Raised</p>
                </div>
            </div>

            {/* Introductory Section */}
            <div className="text-left md:w-1/2 md:ml-10 mb-8 md:mb-0">
                <p className="text-orange-500 mb-10">Know More About</p>
                <h1 className="text-4xl font-bold mb-10">What We Achieved</h1>
                <p className="mb-8">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam.
                </p>
                <div className="flex justify-left space-x-4">
                    <a href="#" className="text-blue-900 hover:text-blue-900 text-4xl transition duration-300 transform hover:scale-110">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-500 text-4xl transition duration-300 transform hover:scale-110">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-600 text-4xl transition duration-300 transform hover:scale-110">
                        <FaYoutube />
                    </a>
                    <a href="#" className="text-green-600 hover:text-green-600 text-4xl transition duration-300 transform hover:scale-110">
                        <FaMedium />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Achievements;