import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from '../DarkMode';
import { FaCaretDown } from 'react-icons/fa';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Top Rated',
    link: '/#services',
  },
  {
    id: 3,
    name: 'Kids Wear',
    link: '/#',
  },
  {
    id: 4,
    name: 'Mans Wear',
    link: '/#',
  },
  {
    id: 5,
    name: 'Electronics',
    link: '/#',
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: 'Trending Product',
    link: '/#',
  },
  {
    id: 2,
    name: 'Best Selling',
    link: '/#',
  },
  {
    id: 3,
    name: 'Top Rated',
    link: '/#',
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="shadow-md bg-white dark:bg-gray-600 dark:text-white duration-200 relative z-40">
        {/* Upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src="/logo.png" alt="Logo" className="w-10" />
                Shopsy
              </a>
            </div>
            {/* search bar */}
            <div className="flex justify-between items-center gap-4 dark:text-white">
              <div className="group hidden relative sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border
                border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
              {/* order button */}
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping />
              </button>
              {/* Dark Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
        {/* Lower Navbar */}
        <div className="flex justify-center">
          <ul className="sm:flex justify-center items-center gap-4 hidden">
            {Menu.map(data => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="hover:text-primary px-4 duration-200 inline-block"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown manu */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Tranding Product
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] text-black bg-white rounded-md  p-2 shadow-md">
                <ul>
                  {DropdownLinks.map(data => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="hover:bg-primary/20 w-full inline-block p-2"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <marquee
          behavior=""
          direction="right"
          className="bg-gradient-to-r from-primary/40"
        >
          <span className=" dark:text-black text-sm">
            Presented by Md.Shahriear Shuvo. Published Date: 21-10-2024.
            Gazipur-1703. E-commerce website.
          </span>
        </marquee>
      </div>
    </div>
  );
};

export default Navbar;
