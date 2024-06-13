import React from 'react';
import { menu_list } from '../assets/assets';

// Fixed: Corrected the function signature to destructure props
const ExploreMunu = ({ Category, setCategory }) => {
  return (
    <div className='explore-menu flex justify-center items-center flex-col' id='explore-menu'>
        <h1 className='text-3xl mb-4 text-zinc-700 font-bold'>
          Explore Our <span className='text-orange-600'>Menu</span>
        </h1>
        <p className='text-black font-serif ml-4 mr-4 text-center'>
          Welcome to our culinary adventure! Our menu offers diverse flavors, from refreshing appetizers to special main courses and decadent desserts.
        </p>
        <div className="explore-menu-list flex gap-3 m-9 text-center overflow-scroll hide-scrollbar w-[90%]">
            {menu_list.map((item, index) => (
                <div 
                  onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                  key={index} 
                  className="explore-menu-list-item cursor-pointer"
                >
                    <img className={Category === item.menu_name ? "active" : ""} id='menu-img' src={item.menu_image} alt={item.menu_name} />
                    <p className='font-bold m-3 text-center'>{item.menu_name}</p>
                </div>
            ))}
        </div>
        <div className='h-[2px] w-[90%] bg-zinc-400'>.</div>
    </div>
  );
};

export default ExploreMunu;
