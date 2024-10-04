"use client"; // Ensure this is a Client Component

import React, { useEffect, useState } from 'react';

const services = [
  { title: "Web Development", description: "Creating responsive websites." },
  { title: "Mobile App Development", description: "Developing mobile apps." },
  { title: "UI/UX Design", description: "Designing user-friendly interfaces." },
  { title: "SEO Optimization", description: "Improving search engine ranking." },
];

const Service: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Create a delay for each service item to become visible
    services.forEach((_, index) => {
      timers.push(setTimeout(() => {
        setVisibleItems((prev) => [...prev, true]); // Make the item visible after delay
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
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg shadow-lg transition-all duration-500 ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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