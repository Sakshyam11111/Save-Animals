import React from 'react';
import BackgroundImage from '../assets/home-bg-5.jpg';
import { FaEye } from "react-icons/fa";

const Hero = () => {
    return (
        <div
            className="relative flex items-center  h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="relative z-10 text-left text-white p-8 ml-20">
                <h1 className="text-8xl font-bold mb-4">
                    Saving Animals <br /> Since 75 Years
                </h1>
                <p className="text-5xl font-bold mb-8 text-orange-500 mt-20">
                    Join Hands And Be A Hero
                </p>
                <p className="mb-8">
                    Participate in our animal-saving mission and help us continue <br></br> creating a better tomorrow for our rescues.
                </p>
                <a
                    href="#"
                    className="bg-orange-500 text-white px-6 py-3 w-56 rounded-3xl hover:bg-orange-600 transition flex items-center"
                >
                    <FaEye className="mr-2" />
                    See All Campaigns
                </a>
            </div>
        </div>
    );
};

export default Hero;