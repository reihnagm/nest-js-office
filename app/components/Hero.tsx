"use client"; // Ensure this is a Client Component

import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set to visible after 300ms
    }, 300);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* Left Column: Image with Lazy Load */}
        <div className={`w-full lg:w-1/2 mt-10 lg:mt-0 lg:mr-8 px-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src="/images/hero.jpg"
            alt="Hero Image"
            className={`w-full h-auto rounded-lg shadow-lg`}
            loading="lazy"
          />
        </div>

        {/* Right Column: Content */}
        <div className={`w-full lg:w-1/2 text-center lg:text-left transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-2xl lg:text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg lg:text-xl mb-8">This is an amazing place to showcase something special</p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
