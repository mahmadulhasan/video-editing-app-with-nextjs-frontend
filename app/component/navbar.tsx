"use client";

import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full navbar z-50">
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-4">
                <button
                    type="button"
                    className="md:hidden p-2 rounded"
                    aria-label="Toggle Menu"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <ul
                    className={`${
                        isMenuOpen ? 'flex' : 'hidden'
                    } flex-col md:flex md:flex-row items-center justify-center gap-4`}
                >
                    <li><a href="/" className="block px-3 py-2 rounded nav-item">Home</a></li>
                    <li><a href="/features" className="block px-3 py-2 rounded nav-item">Features</a></li>
                    <li><a href="/contact" className="block px-3 py-2 rounded nav-item">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
