import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const data = useLoaderData()

    const { name, photo, Ingredients, Instructions, cuisine, time, like, category } = data;


    
    const [likes, setLikes] = useState(0)


    const handelLike =() =>{
        
           
            setLikes(likes + 1)

        
    }

    return (
        <div className='my-10 w-11\12 mx-auto px-3'>
            <div className=''>
                <div className='md:flex items-center gap-8'>
                    <img className='md:w-3/6 h-[450px]' src={photo} alt="" />
                    <div className='space-y-5'>
                        <div className='border-b pb-3 border-b-gray-500'>
                            <h2 className='text-3xl md:text-5xl font-bold '>{name}</h2>
                        </div>
                        <div className='mt-3 items-center md:space-y-4 gap-20 '>
                            <div className='border-b pb-3 border-b-gray-500'>
                                <p className='font-semibold text-xl'>{Ingredients}</p>
                                <p className='font-semibold text-xl'>{Instructions}</p>
                            </div>

                            <div className='border-b md:space-y-3 pb-3 border-b-gray-500'>
                                <p className='font-semibold text-xl'><span className='font-bold'>Cuisine:</span> {cuisine}</p>
                                <p className='text-xl flex items-center gap-3'><span className='font-bold '>Category:</span> <span className='font-semibold flex gap-3 '>{category?.map(cate=><p key={cate} >{cate},</p>)}</span></p>
                                <p className='font-semibold text-xl'><span className='font-bold'>Time:</span> {time} min</p>
                                <p className='font-semibold text-xl'><span className='font-bold'>Like:</span> {likes? like+likes : like}</p>
                            </div>



                        </div>
                        <div className='mt-3 flex items-center gap-72 md:justify-between'>

                        </div>
                        <div className=''>
                            <button onClick={handelLike}  className={`btn bg-yellow-400 text-white font-bold`}><AiFillLike />Like Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecipeDetails;