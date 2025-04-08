import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaMedium } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto p-8">
            <div className="flex items-start">
                <h1 className="text-6xl font-bold mb-20 w-1/3 mt-20">Contact</h1>
                <p className="text-sm text-gray-700 ml-44 mt-20 text-left">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                </p>
            </div>

            {/* Contact Form and Information Box */}
            <div className="bg-white p-8 mb-20 flex flex-col md:flex-row">
                {/* Contact Form Section */}
                <div className="w-lg shadow-md py-4 px-8 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-6">Send Us A Message</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="name">Name</label>
                            <input type="text" id="name" className="border rounded w-full py-2 px-3" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input type="email" id="email" className="border rounded w-full py-2 px-3" placeholder="Your Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="subject">Subject</label>
                            <input type="text" id="subject" className="border rounded w-full py-2 px-3" placeholder="Subject" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="message">Your thoughts</label>
                            <textarea id="message" rows="4" className="border rounded w-full py-2 px-3" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-3xl hover:bg-orange-600 transition duration-300">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>

                {/* Contact Details Section */}
                <div className="w-lg ml-20">
                    <h2 className="text-xl text-orange-500 font-bold">Visit Us</h2>
                    <p className="text-gray-600">
                        123 Fifth Avenue, New York, NY 10010
                    </p>
                    {/* Map Section (Placeholder) */}
                    <div className="h-64 mt-10 mb-10 bg-gray-200 rounded-lg">
                        <p className="text-center py-20 text-gray-500">Map Placeholder</p>
                    </div>
                    <h2 className="text-xl text-orange-500 font-bold">Email Us</h2>
                    <p className="text-gray-600 mb-10">info@example.com</p>
                    <h2 className="text-xl text-orange-500 font-bold">Give Us A Call</h2>
                    <p className="text-gray-600">987 654 3210</p>

                </div>
            </div>
            <div className="flex justify-center space-x-4">
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
                <p className='text-center mt-6'>Follow us here</p>
        </div>
    );
};

export default Contact;