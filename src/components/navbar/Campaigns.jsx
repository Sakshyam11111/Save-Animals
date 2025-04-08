import React from 'react';
import Image1 from '../../assets/saveelephant.jpg';
import Image2 from '../../assets/savewhale.jpg';
import Image3 from '../../assets/savepanda.jpg';
import Image4 from '../../assets/savekiwas.jpg';
import Image5 from '../../assets/savegotilla.jpg';
import Image6 from '../../assets/savegriff.jpg';
import Image7 from '../../assets/VolunteerTour.jpg';
import { FaPaw } from 'react-icons/fa';
import BackgroundImage from '../../assets/theyneeds.jpg';
import HelpSection from '../HelpSection';
import VolunteerTour from '../VolunteerTour';

const campaignsData = [
    {
        title: "Save The Elephant",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
        donations: 866,
        goal: 750000,
        image: Image1,
    },
    {
        title: "Save The Whales",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
        donations: 122,
        goal: 850000,
        image: Image2,
    },
    {
        title: "The Panda Foundation",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
        donations: 42,
        goal: 750000,
        image: Image3,
    },
    {
        title: "Let's Save The Kiwis",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
        donations: 15,
        goal: 500000,
        image: Image4,
    },
    {
        title: "The Gorilla Fundraiser",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
        donations: 49,
        goal: 500000,
        image: Image5,
    },
    {
        title: "African Giraffe Welfare",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
        donations: 32,
        goal: 350000,
        image: Image6,
    },
];

const Campaigns = () => {
    return (
        <div className="max-w-5xl mx-auto p-8">
            <div className="flex items-start">
                <h1 className="text-6xl font-bold mb-20 w-1/3 mt-20">Campaigns</h1>
                <p className="text-sm text-gray-700 ml-10 mt-20 text-left w-2/3">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                </p>
            </div>

            <div className="max-w-6xl mx-auto p-8 text-center mt-20">
                <p className="text-orange-500 mb-10">Donate Today</p>
                <h1 className="text-4xl font-bold mb-10">Select From Available Campaigns</h1>
                <p className="mb-20 w-2xl ml-28">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.
                </p>
            </div>

            {/* Campaign Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {campaignsData.map((campaign, index) => (
                    <div key={index} className="bg-white text-black rounded-lg shadow-md overflow-hidden">
                        <img
                            src={campaign.image}
                            alt={campaign.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{campaign.title}</h2>
                            <p className="text-sm mb-4">{campaign.description}</p>
                            <button className="text-gray-600 underline mb-4">
                                DONATE
                            </button>

                            {/* Donation Progress Bar */}
                            <div className="mb-2">
                                <div className="bg-gray-300 rounded-full h-2">
                                    <div
                                        className="bg-green-500 h-2 rounded-full"
                                        style={{
                                            width: `${(campaign.donations / campaign.goal) * 100}%`
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Donation Statistics */}
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-sm text-gray-600">
                                    {campaign.donations} donations of ${campaign.goal.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <VolunteerTour />
            <HelpSection />
        </div>
    );
};

export default Campaigns;