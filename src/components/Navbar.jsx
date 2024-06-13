import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="flex items-center justify-between">
      <img src={assets.logo} alt="Logo" className="logo h-[4rem] mix-blend-multiply" />
      <ul className="flex text-sm font-bold font-serif text-zinc-800 gap-3">
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
      <div className="right flex items-center space-x-4 mr-7">
        <img src={assets.search_icon} alt="Search icon" className="h-5 cursor-pointer" />
        <div className="right relative">
          <img src={assets.basket_icon} alt="Cart" className="h-5 cursor-pointer" />
          <div className="dot w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <button className='sign-up rounded-2xl border  bg-orange-600 transition-all hover:bg-orange-500  px-3 text-center  py-1 text-[1rem] text-zinc-700 mr-10'>Sign-up</button>
      </div>
    </nav>
  );
};

export default Navbar;
