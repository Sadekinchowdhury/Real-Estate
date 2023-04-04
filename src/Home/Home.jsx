import React from 'react';

import Banner from './Banner/Banner';
import AboutUs from './About Us/Aboutus';
import MyOffer from './MyOffer/MyOffer';
import Team from './Team/Team';
import Blogs from './Blogs/Blogs';
import ContactUs from './ContactUs/ContactUs';
import Footer from '../Footer/Footer';

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
            <div>
                <Team></Team>
            </div>
            <div>
                <Blogs></Blogs>
            </div>
            <div>
                <ContactUs></ContactUs>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;