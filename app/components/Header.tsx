"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="text-lg font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        {/* Hamburger Icon */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-6">
          {['/', '/service', '/projects', '/contact-us'].map((path) => (
            <Link
              key={path}
              href={path}
              className={`py-3 px-3 text-center rounded-lg hover:bg-gray-700 transition duration-200 ${
                isActive(path) ? 'text-blue-400 font-semibold' : 'text-white'
              }`}
            >
              {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}
        </div>

        {/* Menu Items */}
        <ul
          className={`absolute top-16 left-0 w-full bg-gray-800 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Individual List Items */}
          {['/', '/service', '/projects', '/contact-us'].map((path, index) => (
            <li
              key={path}
              className={`transition-transform duration-300 delay-${(index + 1) * 100} ${
                isOpen ? 'transform opacity-100 translate-y-0' : 'transform opacity-0 -translate-y-4'
              }`}
            >
              <Link
                href={path}
                className={`block py-3 px-6 text-center rounded-lg hover:bg-gray-700 transition duration-200 ${
                  isActive(path) ? 'text-blue-400 font-semibold' : 'text-white'
                }`}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
