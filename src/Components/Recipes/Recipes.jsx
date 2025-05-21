import React from 'react';
import { Link } from 'react-router';

const Recipes = ({ recipe }) => {
    // console.log(recipe);

    const {_id, name, photo, cuisine, } = recipe;

    return (
        <div>
            <div className="card bg-base-300 w-96 shadow-sm p-3">

                <img
                    src={photo}
                    alt="food"
                    className="rounded-xl h-60 " />

                <div className=" mt-4">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <div className='flex items-center justify-between'>
                        <p>{cuisine}</p>
                        <p>Like:</p>
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