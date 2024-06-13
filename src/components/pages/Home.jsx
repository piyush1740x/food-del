import React, { useState } from 'react';
import Header from '../Header';
import ExploreMunu from '../ExploreMunu';
import Fooddisplay from '../Fooddisplay';

const Home = () => {
  const [Category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreMunu Category={Category} setCategory={setCategory}/>
        <Fooddisplay Category={Category}/>
    </div>
  );
};

export default Home;
