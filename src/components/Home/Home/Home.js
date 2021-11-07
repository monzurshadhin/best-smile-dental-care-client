import 'aos/dist/aos.css';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BestOfBest from '../BestOfBest/BestOfBest';
import Services from '../Services/Services';
import SuccessStory from '../SuccessStory/SuccessStory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <BestOfBest></BestOfBest>
            <SuccessStory></SuccessStory>
            <Footer></Footer>
        </div>
    );
};

export default Home;