import React from 'react';
import Carousel from "../Carousel"
import Banner from './Banner';
import Stack from './Stack';
import Offer from './Offer';
import Teacher from './Teacher';
import Courses from './Courses';

const Home = () => {
    return (
        <div>
           <Carousel></Carousel> 
           <Stack></Stack>
           <Offer></Offer>
           <Teacher></Teacher>
           <Courses></Courses>
           <Banner></Banner>
        </div>
    );
};

export default Home;