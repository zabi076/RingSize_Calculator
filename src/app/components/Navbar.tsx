"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </div>
        <div className="space-x-4 hidden md:flex">
          <Link href="/custom" legacyBehavior>
            <a className="text-white">Custom</a>
          </Link>
          <Link href="/standard" legacyBehavior>
            <a className="text-white">Standard</a>
          </Link>
        </div>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2">
          <Link href="/custom" legacyBehavior>
            <a className="text-white">Custom</a>
          </Link>
          <Link href="/standard" legacyBehavior>
            <a className="text-white">Standard</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
