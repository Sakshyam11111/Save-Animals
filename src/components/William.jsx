import React from 'react';
import Image1 from '../assets/william.jpg';

const William = () => {
    return (
        <div className="max-w-7xl mt-20 mx-auto flex items-center justify-between p-8 bg-white">
            <div className="md:w-1/2 mt-4 md:mt-0">
                <img
                    src={Image1}
                    alt="Learn"
                    className="mx-auto h-auto rounded-3xl"
                />
                <p className='font-bold ml-60 mt-8'>1898 – 1985</p>
            </div>
            <div className="md:w-1/2">
                <h1 className="text-5xl font-bold mb-10">Eius modi tempora incidunt ut labore et dolore.</h1>
                <p className='font-bold text-2xl mb-10'>- William Lawrence</p>
                <p className="text-lg mb-10">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt. dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                </p>
            </div>
        </div>
    );
};

export default William;