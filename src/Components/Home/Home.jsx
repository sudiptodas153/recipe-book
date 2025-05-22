// import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import TopRecipe from '../TopRecipe/TopRecipe';

const Home = () => {
    const data = useLoaderData()



    return (
        <div className='w-11/12 mx-auto md:space-y-10'>
            <title>Home</title>
            <Banner></Banner>
            <TopRecipe data={data}></TopRecipe>
        </div>
    );
};

export default Home;