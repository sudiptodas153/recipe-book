// import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import TopRecipe from '../TopRecipe/TopRecipe';
import Chef from '../Chef/Chef';
import { useEffect, useState } from 'react';
import UserFeedback from '../UserFeedback/UserFeedback';

const Home = () => {
    const data = useLoaderData()
    const [chefData, setChefData] = useState(null);
    const [feedback, setFeedback] = useState(null);


    useEffect(() => {
        fetch('https://recipe-database-zeta.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [setChefData])

    useEffect(() => {
        fetch('https://recipe-database-zeta.vercel.app/feedback')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [setFeedback])


    return (
        <div className='max-w-11/12 mx-auto md:space-y-10'>
            <title>Home</title>
            <Banner></Banner>
            <TopRecipe data={data}></TopRecipe>
            <Chef chefData={chefData} setChefData={setChefData}></Chef>
            <UserFeedback feedback={feedback} setFeedback={setFeedback}></UserFeedback>

        </div>
    );
};

export default Home;