import React from 'react';
import Image1 from '../../assets/VolunteerTour.jpg';
import BackgroundImage from '../../assets/theyneeds.jpg';
import { FaPaw } from 'react-icons/fa';

const contributorsData = [
    { initials: "DD", name: "Demetrius Dilke", date: "April 1, 2023", amount: "$1.00" },
    { initials: "FC", name: "Anonymous", date: "April 1, 2023", amount: "$1.00" },
    { initials: "FC", name: "Fran Casas", date: "April 1, 2023", amount: "$1.00" },
    { initials: "FG", name: "Fletcher Goodsell", date: "April 6, 2023", amount: "$1.00" },
    { initials: "JH", name: "Johncle Hale", date: "April 6, 2023", amount: "$1.00" },
    { initials: "SY", name: "Shawn Yarnold", date: "April 6, 2023", amount: "$1.00" },
    { initials: "LS", name: "Laurel Snowball", date: "April 6, 2023", amount: "$1.00" },
    { initials: "PP", name: "Phillis Pina", date: "April 6, 2023", amount: "$1.00" },
    { initials: "VS", name: "Von Springfield", date: "April 6, 2023", amount: "$1.00" },
    { initials: "AM", name: "Anita Moen", date: "April 6, 2023", amount: "$1.00" },
    { initials: "MG", name: "Maurice Guilfoyle", date: "April 6, 2023", amount: "$1.00" },
    { initials: "JB", name: "Jens Blohm", date: "April 6, 2023", amount: "$1.00" },
];

const Contributors = () => {
    return (
        <div className="max-w-5xl mx-auto p-8">
            <div className="flex items-start">
                <h1 className="text-6xl font-bold mb-20 w-1/3 mt-20">Contributors</h1>
                <p className="text-sm text-gray-700 ml-44 mt-20 text-left">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                </p>
            </div>

            {/* Contributors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 shadow-md px-8 py-8">
                {contributorsData.map((contributor, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-2xl font-bold text-gray-700 mb-2">{contributor.initials}</div>
                        <div className="font-semibold text-gray-800">{contributor.name}</div>
                        <div className="text-sm text-gray-600">{contributor.date}</div>
                        <div className="mt-2 text-lg font-medium text-green-600">{contributor.amount} Donated</div>
                    </div>
                ))}
                <div className="flex justify-center mt-2">
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-3xl hover:bg-orange-600">
                        LOAD MORE
                    </button>
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-8 flex flex-col items-center">
                <p className='text-orange-500 mb-4'>Volunteer Journey</p>
                <h1 className="text-4xl font-bold mb-10 text-center">Join Us in an Animal Welfare Tour</h1>
                <p className="max-w-lg text-center mb-8">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam.
                </p>

                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <img
                            src={Image1}
                            alt="Volunteer Tour"
                            className="mx-auto h-auto rounded-3xl"
                        />
                    </div>

                    <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
                        <h2 className="text-2xl font-bold mb-4">Volunteering Experience</h2>
                        <ul className="list-disc list-inside mb-8">
                            <li>Jungle Safari</li>
                            <li>Charity Shows</li>
                            <li>Fund Raising</li>
                        </ul>
                        <h2 className="text-2xl font-bold mb-4">Other Experiences</h2>
                        <ul className="list-disc list-inside mb-8">
                            <li>Camp Fire</li>
                            <li>Accommodation</li>
                            <li>Accommodation</li>
                        </ul>
                    </div>
                </div>
                <a
                    href="#"
                    className="bg-orange-500 text-white w-50 px-6 py-3 mt-10 rounded-3xl hover:bg-orange-600 transition flex items-center"
                >
                    <FaPaw className="mr-2" />
                    Reserve a Place
                </a>
            </div>
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
        </div>
    );
};

export default Contributors;