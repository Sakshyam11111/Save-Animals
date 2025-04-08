import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from "../../assets/animal-welfare-black.svg";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center">
                <img src={Image1} className='w-48 ml-20' alt="Logo" />
            </div>
            <div className="flex items-center space-x-8 text-lg">
                <Link to="/" className="text-gray-800 hover:text-orange-500">Home</Link>
                <Link to="/about" className="text-gray-800 hover:text-orange-500">About</Link>
                <Link to="/campaigns" className="text-gray-800 hover:text-orange-500">See Campaigns</Link>
                <Link to="/contributors" className="text-gray-800 hover:text-orange-500">Star Contributors</Link>
                <Link to="/contact" className="text-gray-800 hover:text-orange-500">Contact</Link>
                <button to="#" className="bg-orange-500 text-white px-4 py-2 mr-20 rounded-3xl hover:bg-orange-600 transition">
                    DONATE NOW
                </button>
            </div>
        </nav>
    );
};

export default Navbar;