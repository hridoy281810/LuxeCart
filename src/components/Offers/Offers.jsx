import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/banner/girl2.png'
const Offers = () => {
    return (
        <div className="my-container bg-gradient-to-b from-pink-300 to-white mb-10 px-20 py-6 rounded">
        <div className=" h-auto lg:h-[70vh] grid py-5 lg:py-0 gap-10 my-12 lg:my-0 lg:grid-cols-2 items-center">
          <div
            className="lg:w-full w-[90vw] order-2 lg:order-1 static md:text-center lg:text-start text-center"
          >
            <div className="space-y-3">
              
              <h1 className="text-7xl font-bold">
            Exclusive
              </h1>
              <h1 className="text-7xl font-bold mb-10">
            Offers For You
              </h1>
              <p className='text-2xl font-semibold fon uppercase'>only on best sellers product</p>
<Link to="/about" className=" ">
  <button className="text-xl bg-pink-500 hover:bg-pink-300 text-white font-bold py-2 mt-8 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105">
   heck Now
  </button>
</Link>

            </div>
        
          </div>
          <div className="order-1 lg:order-2 banner-img">
         
            <img
              className="w-full lg:w-full h-full md:w-[75%] md:mx-auto"
              src={image} 
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Offers;