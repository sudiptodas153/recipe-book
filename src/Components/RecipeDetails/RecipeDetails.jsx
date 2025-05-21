import React, { use, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const RecipeDetails = () => {
    const data = useLoaderData()

    const { name, photo, userEmail, Ingredients, Instructions, cuisine, time, like, category } = data;
    const { user } = use(AuthContext);


    const [likes, setLikes] = useState(0)


    const handelLike = () => {


        setLikes(likes + 1)


    }

    return (
        <div className='my-10 w-11\12 mx-auto px-3'>
            <div className=''>
                <div className='md:flex items-center space-y-3 md:-space-y-3 gap-8'>
                    <img className='md:w-3/6 md:h-[500px] rounded-lg' src={photo} alt="" />
                    <div className='space-y-5'>
                        <div className='border-b pb-3 border-b-gray-500'>
                            <h2 className='text-3xl md:text-4xl font-bold '>{name}</h2>
                        </div>
                        <div className='mt-3 items-center md:space-y-4 gap-20 '>
                            <div className='border-b pb-3 border-b-gray-500'>
                                <h2 className='text-xl font-bold'>Ingredients:</h2>
                                <p className='font-semibold text-sm'>{Ingredients}</p>
                                 <h2 className='text-xl font-bold mt-2'>Instructions:</h2>
                                <p className='font-semibold text-sm'>{Instructions}</p>
                            </div>

                            <div className='border-b md:space-y-3 pb-3 border-b-gray-500'>
                                <p className='font-semibold text-lg'><span className='font-bold text-xl'>Cuisine:</span> {cuisine}</p>
                                <p className='text-lg flex items-center gap-3'><span className='font-bold text-xl'>Category:</span> <span className='font-semibold flex gap-3 '>{category?.map(cate => <p key={cate} >{cate},</p>)}</span></p>
                                <p className='font-semibold text-lg'><span className='font-bold text-xl'>Time:</span> {time} min</p>
                                <p className='font-semibold text-xl'><span className='font-bold'>Like:</span> {likes ? like + likes : like}</p>
                            </div>



                        </div>
                        
                        <div className=''>
                            <button  onClick={handelLike} disabled={user?.email === userEmail} className={`btn ${user?.email === userEmail ? 'cursor-not-allowed' :   ''} bg-yellow-400 text-white font-bold`}><AiFillLike />Like Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecipeDetails;