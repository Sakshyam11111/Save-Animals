import React from 'react';
import Image1 from '../assets/wildlife.jpg'; 
import Image2 from '../assets/forests.jpg'; 
import Image3 from '../assets/food.jpg'; 
import Image4 from '../assets/oceans.jpg'; 
import Image5 from '../assets/cleanwater.jpg';
import Image6 from '../assets/bredding.jpg'; 

const OurMission = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 text-center mt-20">
            <p className="text-orange-500 mb-10">Be a Part Of</p>
            <h1 className="text-4xl font-bold mb-10">Our Mission</h1>
            <p className="mb-20">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                    { src: Image1, alt: "Wild Life", label: "Wild Life" },
                    { src: Image2, alt: "Forests", label: "Forests" },
                    { src: Image3, alt: "Food", label: "Food" },
                    { src: Image4, alt: "Oceans", label: "Oceans" },
                    { src: Image5, alt: "Clean Water", label: "Clean Water" },
                    { src: Image6, alt: "Breeding", label: "Breeding" }
                ].map((image, index) => (
                    <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105" key={index}>
                        <img src={image.src} alt={image.alt} className="w-24 h-24 rounded-full mb-2" />
                        <span>{image.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurMission;