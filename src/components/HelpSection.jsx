import React from 'react';
import BackgroundImage from '../assets/theyneeds.jpg';

const HelpSection = () => {
    return (
        <div
            className="flex items-center justify-center h-96 bg-cover bg-center relative mb-20 mt-20"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div> 
            <div className="relative p-8 rounded-lg text-center z-10"> 
                <h1 className="text-4xl font-bold text-white mb-4">They Need Your Help!</h1>
                <p className="text-white mb-6 w-2xl">
                    Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                    eius modi tempora incidunt ut labore et dolore magnam aliquam.
                </p>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-orange-600 transition duration-300">
                    DONATE NOW
                </a>
            </div>
        </div>
    );
};

export default HelpSection;