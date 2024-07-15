// components/Header.tsx

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold">
          <Link href="/">Health Care</Link>
        </h1>
        <button
          className="text-white md:hidden block focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/aboutus" className="hover:underline">
            About Us
          </Link>
          <Link href="/contactus" className="hover:underline">
            Contact Us
          </Link>
          <div className="relative group">
            <button className="hover:underline">Search Doctors</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 w-48 shadow-lg rounded">
              <Link href="/search/general" className="block px-4 py-2 hover:bg-gray-200">
                General Physicians
              </Link>
              <Link href="/search/specialists" className="block px-4 py-2 hover:bg-gray-200">
                Specialists
              </Link>
              <Link href="/search/surgeons" className="block px-4 py-2 hover:bg-gray-200">
                Surgeons
              </Link>
            </div>
          </div>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/signup" className="hover:underline">
            Sign Up
          </Link>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white">
          <nav className="flex flex-col space-y-2 py-2 px-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/aboutus" className="hover:underline">
              About Us
            </Link>
            <Link href="/contactus" className="hover:underline">
              Contact Us
            </Link>
            <div className="relative group">
              <button className="hover:underline">Search Doctors</button>
              <div className="bg-blue-600 text-white flex flex-col">
                <Link href="/search/general" className="block px-4 py-2 hover:bg-blue-700">
                  General Physicians
                </Link>
                <Link href="/search/specialists" className="block px-4 py-2 hover:bg-blue-700">
                  Specialists
                </Link>
                <Link href="/search/surgeons" className="block px-4 py-2 hover:bg-blue-700">
                  Surgeons
                </Link>
              </div>
            </div>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/signup" className="hover:underline">
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
