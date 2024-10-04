"use client";

import React, { useState, useEffect } from "react";

const portfolios = [
    {
        title: "E-commerce Website",
        description: "A full-stack e-commerce application built with React and Node.js.",
        defaultImageUrl: "/images/1.jpg",
        hoverImageUrl: "/images/2.jpg", 
    },
    {
        title: "Mobile Banking App",
        description: "A secure mobile banking app developed in Flutter.",
        defaultImageUrl: "/images/1.jpg",
        hoverImageUrl: "/images/2.jpg",
    },
    {
        title: "Social Media Platform",
        description: "A social media platform with real-time chat using Node.js and WebSocket.",
        defaultImageUrl: "/images/1.jpg",
        hoverImageUrl: "/images/2.jpg", 
    },
    {
        title: "Personal Portfolio",
        description: "A sleek portfolio website showcasing projects and skills.",
        defaultImageUrl: "/images/1.jpg",
        hoverImageUrl: "/images/2.jpg", 
    },
    {
        title: "Personal Portfolio",
        description: "A sleek portfolio website showcasing projects and skills.",
        defaultImageUrl: "/images/1.jpg",
        hoverImageUrl: "/images/2.jpg", 
    },
    {
        title: "Personal Portfolio",
        description: "A sleek portfolio website showcasing projects and skills.",
        defaultImageUrl: "/images/1.jpg",
        hoverImageUrl: "/images/2.jpg", 
    },
  ];
  

const Portfolios: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(0); // Track the number of visible service items
    const [isTitleVisible, setIsTitleVisible] = useState(false); // Track title visibility

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];
        
        // Delay the title's appearance
        timers.push(setTimeout(() => {
          setIsTitleVisible(true); // Make title visible after 0ms delay
        }, 0));
    
        // Create a delay for each service item to become visible
        portfolios.forEach((_, index) => {
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
        <div className="container mx-auto my-10 p-4">
        <h1 className="text-3xl font-bold text-center my-20">Portfolios</h1>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {portfolios.map((portfolio, index) => (
            <div key={index} className={`relative group cursor-pointer transition-all duration-500 ${visibleCount > index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {/* Multi-layer image hover effect */}
                <div className="overflow-hidden relative">
                <img
                    src={portfolio.defaultImageUrl}
                    alt={portfolio.title}
                    className="w-full h-auto transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-0"
                />
                <img
                    src={portfolio.hoverImageUrl}
                    alt={portfolio.title}
                    className="absolute inset-0 w-full h-auto transition-all duration-500 ease-in-out transform opacity-0 group-hover:opacity-100 group-hover:scale-110"
                />
                {/* Overlay: Title and Description */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white p-4">
                    <h2 className="text-xl font-semibold mb-2">{portfolio.title}</h2>
                    <p className="text-center">{portfolio.description}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Portfolios;
