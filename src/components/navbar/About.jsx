import React from 'react';
import BackgroundImage1 from '../../assets/poswer.jpg';
import BackgroundImage2 from '../../assets/theyneeds.jpg';
import Image1 from '../../assets/william.jpg';
import Image2 from '../../assets/india.png';
import Image3 from '../../assets/australia.png';
import Image4 from '../../assets/africa.png';
import Image5 from '../../assets/usa.png';

import { MdArrowForwardIos } from "react-icons/md";

const About = () => {
    return (
        <div className='bg-gray-100'>
            <div className="max-w-5xl mx-auto p-8 flex items-start">
                <h1 className="text-6xl font-bold mb-20 w-1/3 mt-20">About Us</h1>
                <p className="text-sm text-gray-700 ml-10 mt-20 text-left w-2/3">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam. Dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt.
                </p>
            </div>

            <div
                className="flex items-center justify-center h-96 bg-cover bg-center relative mb-20 mt-20"
                style={{ backgroundImage: `url(${BackgroundImage1})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative p-8 rounded-lg text-center z-10">
                    <h1 className="text-4xl font-bold text-white mb-4">You Have the Power to save <br /> the Wildlife Worldwide</h1>
                </div>
            </div>

            <div className="max-w-7xl mt-20 mx-auto flex items-center justify-between p-8">
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <p className='text-6xl ml-28 mb-5'>The Founder</p>
                    <img
                        src={Image1}
                        alt="Learn"
                        className="mx-auto h-auto rounded-3xl"
                    />
                    <p className='text-orange-500 ml-28 text-3xl mt-4'>William Lawrence</p>
                    <p className='font-bold ml-28 mt-4 text-gray-600'>1898 – 1985</p>
                </div>
                <div className="md:w-1/2 text-gray-600">
                    <p className="text-sm mb-10">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                    <p className="text-sm mb-10">
                        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?”
                    </p>
                </div>
            </div>

            {/* Vision, Mission, Values Section */}
            <div className="max-w-5xl mx-auto p-8 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4">Vision</h2>
                        <p className="text-sm text-gray-700 text-left">
                            Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
                        </p>
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4">Mission</h2>
                        <p className="text-sm text-gray-700 text-left">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                        </p>
                    </div>
                    <div className="p-4 text-left">
                        <h2 className="text-2xl font-bold mb-4">Values</h2>
                        <div className="flex items-center text-sm mb-2">
                            <MdArrowForwardIos className="mr-2" />
                            <p>Neque porro quisquam</p>
                        </div>
                        <div className="flex items-center text-sm mb-2">
                            <MdArrowForwardIos className="mr-2" />
                            <p>Modi tempora incidunt</p>
                        </div>
                        <div className="flex items-center text-sm mb-2">
                            <MdArrowForwardIos className="mr-2" />
                            <p>Dolorem ipsum quia dolor</p>
                        </div>
                        <div className="flex items-center text-sm mb-2">
                            <MdArrowForwardIos className="mr-2" />
                            <p>Ipsum quia dolor sit</p>
                        </div>
                        <div className="flex items-center text-sm mb-2">
                            <MdArrowForwardIos className="mr-2" />
                            <p>Numquam eius modi tempora</p>
                        </div>
                        <div className="flex items-center text-sm mb-2">
                            <MdArrowForwardIos className="mr-2" />
                            <p>Sed quia non numquam</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Locations Section */}
            <div className="max-w-5xl mx-auto p-8 mt-10">
                <h2 className="text-4xl font-bold mb-10 text-center">Other Locations</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <img
                            src={Image2}
                            alt="India"
                            className="mx-auto h-auto rounded-3xl"
                        />
                        <h3 className="font-bold mt-4">India</h3>
                        <p className='text-sm font-bold text-gray-500 mt-4'>123, Dev Plaza, 34th Street, New Delhi, 110011</p>
                    </div>
                    <div>
                        <img
                            src={Image3}
                            alt="Australia"
                            className="mx-auto h-auto rounded-3xl"
                        />
                        <h3 className="font-bold mt-4">Australia</h3>
                        <p className='text-sm font-bold text-gray-500 mt-4'>16 Munique Rd, Brisbane, QLD 4482, Australia</p>
                    </div>
                    <div>
                        <img
                            src={Image4}
                            alt="Africa"
                            className="mx-auto h-auto rounded-3xl"
                        />
                        <h3 className="font-bold mt-4">Africa</h3>
                        <p className='text-sm font-bold text-gray-500 mt-4'>5th Floor, St. Adams Towers, P.O. Box 1234, Nairobi, Kenya</p>
                    </div>
                    <div>
                        <img
                            src={Image5}
                            alt="United States"
                            className="mx-auto h-auto rounded-3xl"
                        />
                        <h3 className="font-bold mt-4">United States</h3>
                        <p className='text-sm font-bold text-gray-500 mt-4'>1235 Westmore Rd, Lombard, IL 60184, United States</p>
                    </div>
                </div>
            </div>
                    <div
                        className="flex items-center justify-center h-96 bg-cover bg-center relative mb-20 mt-20"
                        style={{ backgroundImage: `url(${BackgroundImage2})` }}
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

export default About;