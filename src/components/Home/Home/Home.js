import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BestOfBest from '../BestOfBest/BestOfBest';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <BestOfBest></BestOfBest>
            <Footer></Footer>
        </div>
    );
};

export default Home;