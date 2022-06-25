import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MyRiviews from './MyRiviews';
import Products from './Products';


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <MyRiviews></MyRiviews>
        </div>
    );
};

export default Home;