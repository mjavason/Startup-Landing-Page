'use client'
import { useState } from 'react';
import { Button } from '@heroui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='p-4 text-white bg-primary-400'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* Desktop Menu */}
        <ul className='order-4 md:order-1 hidden md:flex gap-4'>
          <li className='hover:text-gray-500 cursor-pointer'>
            Products <i className='fas fa-chevron-down'></i>
          </li>
          <li className='hover:text-gray-500 cursor-pointer'>Pricing</li>
          <li className='hover:text-gray-500 cursor-pointer'>Community</li>
        </ul>

        {/* Logo */}
        <p className='order-2 w-[45vw] md:w-auto md:order-1 text-lg font-bold'>
          Startup
        </p>

        {/* Buttons */}
        <div className='order-3 hidden md:flex gap-4'>
          <Button variant='ghost' className='text-white hover:text-gray-300'>
            Login
          </Button>
          <Button
            variant='bordered'
            className='text-white border-white hover:bg-white hover:text-purple-900'
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='order-4 flex md:hidden text-white text-lg font-bold cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[40%] bg-black flex flex-col items-center justify-center space-y-6 shadow-lg transition-all duration-300 ease-in-out
          ${
            isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
      >
        <ul className='flex flex-col items-center gap-4 text-lg'>
          <li className='hover:text-gray-300 cursor-pointer'>
            Products <i className='fas fa-chevron-down'></i>
          </li>
          <li className='hover:text-gray-300 cursor-pointer'>Pricing</li>
          <li className='hover:text-gray-300 cursor-pointer'>Community</li>
        </ul>
        {/* Close Button */}
        <Button
          variant='ghost'
          className='text-white mt-4'
          onPress={() => setIsOpen(false)}
        >
          Close
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
