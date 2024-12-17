import React, { useContext } from 'react';
import Product from '../components/Products';
import Delivery from '../components/Delivery';
import Slider from '../components/Slider';
import Subscribe from '../components/Subscribe';
import Client from '../components/Client';
import Arrival from '../components/Arrival';

const Home = () => {
  return <div>
            <Slider/>
            <Delivery/>
            <Arrival/>
            <Product/>
            <Subscribe/>
            <Client/>
        </div>;
};

export default Home;
