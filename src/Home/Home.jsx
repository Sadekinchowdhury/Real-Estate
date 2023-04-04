import React from 'react';

import Banner from './Banner/Banner';
import AboutUs from './About Us/Aboutus';
import MyOffer from './MyOffer/MyOffer';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <div>
                <MyOffer></MyOffer>
            </div>
        </div>
    );
};

export default Home;