import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl mb-8">This is an amazing place to showcase something special</p>
        <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;