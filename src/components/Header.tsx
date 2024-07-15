// components/Header.tsx
"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSelectDoctor = (doctor: string) => {
    setSelectedDoctor(doctor);
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
    if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold">
          <Link href="/">Health Connect</Link>
        </h1>
        <button
          className="text-white sm:hidden block focus:outline-none"
          onClick={toggleMobileMenu}
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
        <nav className="hidden sm:flex space-x-4 portrait:hidden">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/aboutus" className="hover:underline">
            About Us
          </Link>
          <Link href="/contactus" className="hover:underline">
            Contact Us
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button className="hover:underline" onClick={toggleMenu}>
              Search Doctors
            </button>
            {isMenuOpen && (
              <div className="absolute bg-white text-black mt-2 py-2 w-48 shadow-lg rounded">
                <button
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleSelectDoctor('General Physicians')}
                >
                  General Physicians
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleSelectDoctor('Specialists')}
                >
                  Specialists
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleSelectDoctor('Surgeons')}
                >
                  Surgeons
                </button>
              </div>
            )}
          </div>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/signup" className="hover:underline">
            Sign Up
          </Link>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 portrait:block">
          <div className="fixed inset-y-0 left-0 bg-blue-600 text-white w-64 p-4">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <nav className="mt-4 space-y-2">
              <Link href="/" className="block hover:underline">
                Home
              </Link>
              <Link href="/aboutus" className="block hover:underline">
                About Us
              </Link>
              <Link href="/contactus" className="block hover:underline">
                Contact Us
              </Link>
              <div className="relative" ref={mobileDropdownRef}>
                <button className="block hover:underline" onClick={toggleMenu}>
                  Search Doctors
                </button>
                {isMenuOpen && isMobileMenuOpen && (
                  <div className="mt-2 bg-blue-700 text-white">
                    <button
                      className="block px-4 py-2 hover:bg-blue-800 text-left"
                      onClick={() => handleSelectDoctor('General Physicians')}
                    >
                      General Physicians
                    </button>
                    <button
                      className="block px-4 py-2 hover:bg-blue-800 text-left"
                      onClick={() => handleSelectDoctor('Specialists')}
                    >
                      Specialists
                    </button>
                    <button
                      className="block px-4 py-2 hover:bg-blue-800 text-left"
                      onClick={() => handleSelectDoctor('Surgeons')}
                    >
                      Surgeons
                    </button>
                  </div>
                )}
              </div>
              <Link href="/login" className="block hover:underline">
                Login
              </Link>
              <Link href="/signup" className="block hover:underline">
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      )}
      {selectedDoctor && (
        <div className="bg-blue-100 text-blue-800 p-2 text-center">
          Selected Doctor: {selectedDoctor}
        </div>
      )}
    </header>
  );
}


