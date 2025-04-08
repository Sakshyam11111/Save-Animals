import React from 'react';
import { FaPaw } from 'react-icons/fa';
import Image1 from '../assets/VolunteerTour.jpg';

const VolunteerTour = () => {
    return (
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
    );
};

export default VolunteerTour;