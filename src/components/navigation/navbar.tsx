'use client';
import { useState } from 'react';
import { Button } from '@heroui/react';
import ProductSubNavBar from './products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className='relative text-white bg-primary-500 z-50'>
      <div className='max-w-[100%] flex justify-between items-center p-5'>
        {/* Desktop Menu */}
        <ul className='order-4 md:order-1 hidden md:flex gap-5'>
          <li
            className='hover:text-gray-500 cursor-pointer flex items-center gap-1'
            onClick={() => setIsProductsOpen(!isProductsOpen)}
          >
            Products{' '}
            <i
              className={`fas fa-chevron-down transition-transform ${
                isProductsOpen ? 'rotate-180' : ''
              }`}
            ></i>
          </li>
          <li className='hover:text-gray-500 cursor-pointer'>Pricing</li>
          <li className='hover:text-gray-500 cursor-pointer'>Community</li>
        </ul>

        {/* Logo */}
        <p className='order-2 w-[45vw] md:w-auto md:order-1 text-2xl font-bold'>
          Startup
        </p>

        {/* Buttons */}
        <div className='order-3 flex gap-0 md:gap-4'>
          <Button
            variant='ghost'
            className='text-white hover:text-black border-none'
          >
            Login
          </Button>
          <Button
            variant='bordered'
            className='text-white border-white hover:bg-primary-600'
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='order-4 flex md:hidden text-white font-bold mx-2 cursor-pointer text-3xl'
          onClick={() => {
            setIsOpen(!isOpen);
            setIsProductsOpen(false);
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed top-0 left-0 h-screen w-[40%] bg-gray-900 flex flex-col items-center justify-center space-y-6 shadow-lg transition-all duration-300 ease-in-out z-50'>
          <ul className='flex flex-col items-center gap-4 text-lg'>
            <li
              className='hover:text-gray-300 cursor-pointer flex items-center gap-1'
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products{' '}
              <i
                className={`fas fa-chevron-down transition-transform ${
                  isProductsOpen ? 'rotate-180' : ''
                }`}
              ></i>
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
      )}

      {/* Products Dropdown */}
      {isProductsOpen && <ProductSubNavBar />}
    </nav>
  );
};

export default Navbar;
