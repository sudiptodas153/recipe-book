import React from 'react';
import Recipes from '../Recipes/Recipes';
import { Link } from 'react-router';

const TopRecipe = ({ data }) => {
    // console.log(data)
    return (
        <div>
            <h2 className='text-3xl md:text-5xl font-bold text-center mb-5 md:mb-10'>Top Recipe</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    data.map(recipe => <Recipes key={recipe._id} recipe={recipe}></Recipes>)
                }
            </div>
            <div className='flex justify-center'><Link to={'/all-recipe'}><button className='btn mt-5 bg-yellow-300 text-lg text-white font-bold'>See All Recipes</button></Link></div>
        </div>
    );
};

export default TopRecipe;