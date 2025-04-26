"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-rose-100 text-center p-4 relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-white text-2xl font-bold">💙 For U</h1>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-white font-semibold">
            {["About"].map((menu, index) => (
              <li key={index}>
                <Link href={`/#${menu.toLowerCase()}`} className="hover:text-blue-300 transition-all duration-300">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden bg-blue-900 text-white text-center py-4">
            {["About"].map((menu, index) => (
              <li key={index} className="py-2">
                <Link href={`/#${menu.toLowerCase()}`} className="block hover:text-blue-300 transition-all duration-300">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </main>
  );
}
