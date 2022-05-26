import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import Stat from './Stat';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Stat></Stat>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;