import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Recipes = ({ recipe }) => {
    const { themes } = use(AuthContext);

    const { _id, name, like, photo, cuisine, } = recipe;

    return (
        <div>
            <div className={`card border border-gray-500 ${!themes ? 'bg-yellow-50' :''}  shadow-sm p-3`}>

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