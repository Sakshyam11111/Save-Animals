import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaMedium } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                    {/* Subscribe & Social */}
                    <div>
                        <h3 className="font-bold mb-4">Subscribe & Social</h3>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="p-2 border border-gray-300 rounded mb-4"
                        />
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-orange-600 transition duration-300">
                            SUBSCRIBE
                        </button>
                        <div className="flex justify-left space-x-4 mt-6">
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

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">Projects</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">Get Involved</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">Donate</a></li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="font-bold mb-4">About Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">Press Kit</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">Events</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">Visiting</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">Volunteering</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Countries */}
                    <div>
                        <h3 className="font-bold mb-4">Countries</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">South Africa</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">India</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">Kenya</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">Australia</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500">USA</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <hr className="border-gray-300 mb-4" />
                    <div className="flex justify-center space-x-96 mt-8">
                        <p className="text-gray-600">Copyright © 2025 Animal Welfare</p>
                        <p className="text-gray-600">Powered by Animal Welfare</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;