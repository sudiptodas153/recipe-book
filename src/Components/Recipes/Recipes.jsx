import React from 'react';
import { Link } from 'react-router';

const Recipes = ({ recipe}) => {
    // console.log(recipe);

    const {_id, name,like, photo, cuisine, } = recipe;

    return (
        <div>
            <div className="card bg-base-300 w-96 shadow-sm p-3">

                <img
                    src={photo}
                    alt="food"
                    className="rounded-xl h-60 " />

                <div className=" mt-4">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-lg font-bold'>Cuisine: <span className='font-semibold'>{cuisine}</span></p>
                        <p className='text-lg font-bold'>Like: <span className='font-semibold'>{like}</span></p>
                    </div>
                    <div className=" mt-2">
                        <Link to={`/recipe/${_id}`}>
                            <button className="btn w-full bg-yellow-400 font-bold text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;