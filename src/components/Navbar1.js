'use client'
// 'use client';

// import { Avatar, Dropdown, Navbar,Button } from 'flowbite-react';

// export default function Component() {
//   return (
//     <Navbar fluid rounded>
//       <Navbar.Brand href="https://flowbite-react.com">
//         <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
//           }
//         >
//           <Dropdown.Header>
//             <span className="block text-sm">Bonnie Green</span>
//             <span className="block truncate text-sm font-medium">name@flowbite.com</span>
//           </Dropdown.Header>
//           <Dropdown.Item>Dashboard</Dropdown.Item>
//           <Dropdown.Item>Settings</Dropdown.Item>
//           <Dropdown.Item>Earnings</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item>Sign out</Dropdown.Item>
//         </Dropdown>
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//         <Navbar.Link href="#" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link href="#">About</Navbar.Link>
//         <Navbar.Link href="#">Services</Navbar.Link>
//         <Navbar.Link href="#">Pricing</Navbar.Link>
//         <Navbar.Link href="#">Contact</Navbar.Link>
//         <div>
//       <Button>Click me</Button>
//     </div>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>

      
    </div>
  );
};




export default Navbar;
