import React from 'react';
import image1 from '../assets/elephant.jpg';
import BackgroundImage from '../assets/printff.jpg';
import { FaYoutube } from 'react-icons/fa';

const DocumentarySection = () => {
    return (
        <div
            className="relative flex items-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="max-w-5xl mx-auto p-8 bg-white text-center mt-10">
                <p className="text-orange-500 mb-10">To Know More</p>
                <h1 className="text-4xl font-bold mb-10">Documentary</h1>
                <p className="mb-20">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam.
                </p>
                <div className="relative mb-6">
                    <img
                        src={image1}
                        alt="Documentary Image"
                        className="max-w-6xl ml-60 md:h-80 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                    />
                </div>
                <a className="flex items-center justify-center text-red-600 font-bold">
                    <FaYoutube className="mr-2" /> Find us on YouTube
                </a>
            </div>
            
        </div>
    );
};

export default DocumentarySection;