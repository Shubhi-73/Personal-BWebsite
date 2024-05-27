import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { BsChatSquareDots } from 'react-icons/bs';
import {
  FaTwitter,
  FaInstagram,
  FaBars,
} from 'react-icons/fa';

import { CiLinkedin } from "react-icons/ci";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white navbar'>
      <div className='flex justify-between'>
        {/* <CiLinkedin className='mx-4' />
        <FaTwitter className='mx-4' />
        <FaInstagram className='mx-4' /> */}
        <Link to='/'>Snigdha</Link>
      </div>
      <ul className='hidden sm:flex px-4'>
        <li>
          <Link to='/books'>Books</Link>
        </li>
        <li>
          <a href='https://snigdhas.hashnode.dev/'>Tech</a>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
        </li>
        <li>
          <Link to='#contact'>Contact</Link>
        </li>
      </ul>
      
      {/* Hamburger Icon */}
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8'>
            <a href='/' className='hover:text-accent-color'>Books</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#gallery'>Tech</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='/blogs'>Blogs</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { FaTwitter, FaInstagram, FaBars } from 'react-icons/fa';
// import { CiLinkedin } from 'react-icons/ci';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white p-4 bg-primary-darkest'>
//       <div className='flex space-x-4'>
//         <CiLinkedin className='cursor-pointer hover:text-accent-color' />
//         <FaTwitter className='cursor-pointer hover:text-accent-color' />
//         <FaInstagram className='cursor-pointer hover:text-accent-color' />
//       </div>
//       <ul className='hidden sm:flex space-x-6'>
//         <li><a href='/' className='hover:text-accent-color'>Books</a></li>
//         <li><a href='#tech' className='hover:text-accent-color'>Tech</a></li>
//         <li><a href='#blogs' className='hover:text-accent-color'>Blogs</a></li>
//         <li><a href='#contact' className='hover:text-accent-color'>Contact</a></li>
//       </ul>
//       <div onClick={handleNav} className='sm:hidden z-10 cursor-pointer'>
//         <FaBars size={20} />
//       </div>
//       <div
//         className={`${
//           nav ? 'left-0' : 'left-[-100%]'
//         } fixed top-0 w-full h-screen bg-black/90 text-gray-300 flex flex-col items-center justify-center transition-all duration-300`}
//         onClick={handleNav}
//       >
//         <ul className='space-y-8 text-2xl'>
//           <li><a href='/'>Books</a></li>
//           <li><a href='#tech'>Tech</a></li>
//           <li><a href='#blogs'>Blogs</a></li>
//           <li><a href='#contact'>Contact</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

