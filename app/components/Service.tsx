"use client"; 

import React, { useEffect, useState } from 'react';

const services = [
  { title: "Web Development", description: "Creating responsive websites." },
  { title: "Mobile App Development", description: "Developing mobile apps." },
  { title: "UI/UX Design", description: "Designing user-friendly interfaces." },
  { title: "SEO Optimization", description: "Improving search engine ranking." },
];

const Service: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(0); // Track the number of visible service items
  const [isTitleVisible, setIsTitleVisible] = useState(false); // Track title visibility

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Delay the title's appearance
    timers.push(setTimeout(() => {
      setIsTitleVisible(true); // Make title visible after 0ms delay
    }, 0));

    // Create a delay for each service item to become visible
    services.forEach((_, index) => {
      timers.push(setTimeout(() => {
        setVisibleCount((prev) => prev + 1); // Increment visible count after delay
      }, index * 300)); // Delay each item by 300ms multiplied by its index
    });

    // Cleanup timers on component unmount
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div>
      <main className="container mx-auto my-10 p-4">
        <h1 className={`text-3xl font-bold text-center my-20 transition-all duration-500 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Our Services
        </h1>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg shadow-lg transition-all duration-500 ${visibleCount > index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              aria-hidden={visibleCount <= index ? 'true' : 'false'} // Improve accessibility
            >
              <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Service;
