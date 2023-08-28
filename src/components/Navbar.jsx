/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

/**
 * Renders a navigation bar with a responsive menu.
 * @returns {JSX.Element} The navigation bar component.
 */
const Navbar = () => {
  const [nav, setNav] = useState(false);

  /**
   * Toggles the value of `nav`.
   */
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
    <ul className='hidden md:flex space-x-6'>
      <li className='relative'>
        <a
          href='#'
          className='p-4 transition-colors duration-300 border-b border-transparent hover:border-[#00df9a]'>
          Home
        </a>
      </li>
      <li className='relative'>
        <a
          href='#'
          className='p-4 transition-colors duration-300 border-b border-transparent hover:border-[#00df9a]'>
          Company
        </a>
      </li>
      <li className='relative'>
        <a
          href='#'
          className='p-4 transition-colors duration-300 border-b border-transparent hover:border-[#00df9a]'>
          Resources
        </a>
      </li>
      <li className='relative'>
        <a
          href='#'
          className='p-4 transition-colors duration-300 border-b border-transparent hover:border-[#00df9a]'>
          About
        </a>
      </li>
      <li className='relative'>
        <a
          href='#'
          className='p-4 transition-colors duration-300 border-b border-transparent hover:border-[#00df9a]'>
          Contact
        </a>
      </li>
    </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

