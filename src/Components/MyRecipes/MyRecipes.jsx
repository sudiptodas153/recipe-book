import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyRecipe from '../MyRecipe/MyRecipe';

const MyRecipes = () => {
    const data = useLoaderData()
    const [storeRecipe, setRecipe] = useState(data)
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-3xl md:text-5xl font-bold text-center mb-5 md:mb-10'>My Recipe</h2>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    storeRecipe.map(recipe => <MyRecipe storeRecipe={storeRecipe} setRecipe={setRecipe} key={recipe._id} recipe={recipe}></MyRecipe>)
                }
            </div>

        </div>
    );
};

export default MyRecipes;