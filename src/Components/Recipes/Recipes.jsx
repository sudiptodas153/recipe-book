import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { Roll } from 'react-awesome-reveal';
import { AiFillLike } from 'react-icons/ai';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';

const Recipes = ({ recipe }) => {
    const { themes, user } = use(AuthContext);

    const { _id, userEmail, name, like, photo, cuisine, } = recipe;
    const [likes, setLikes] = useState(like)
    const [likeCount, setLikeCount] = useState(false)

    console.log(likeCount)

    const handelLike = () => {


        const newLikes = likeCount ? likes - 1 : likes + 1;

        setLikes(newLikes);
        setLikeCount(!likeCount)
        const recipeData = { like: newLikes };

        fetch(`https://recipe-database-zeta.vercel.app/recipes/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(recipeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Updated:", data);
            });






    };


    return (
        <div>
            <Roll duration={2000}>
                <div className={`card border border-gray-500 ${!themes ? 'bg-yellow-50' : ''}  shadow-sm p-3`}>

                    <img
                        src={photo}
                        alt="food"
                        className="rounded-xl h-60 " />

                    <div className=" mt-4">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <div className='flex items-center justify-between mt-3'>
                            <div>
                                <p className='text-lg font-bold'>Cuisine: <span className='font-semibold'>{cuisine}</span></p>
                            </div>

                            <div className='flex items-center'>

                                {
                                    !user ? <p>Like:</p> :

                                        <button onClick={handelLike} disabled={user?.email === userEmail} className={` mt-2 ${user?.email === userEmail ? 'cursor-not-allowed' : ''} `}>{likeCount ? <IoMdHeart size={25} color='red' /> : <IoIosHeartEmpty size={25} />} </button>
                                }
                                <p className='ml-2'>{likes ? likes : like}</p>
                                <input type="text" className='hidden' name='like' />
                            </div>


                        </div>
                        <div className=" mt-2">
                            <Link to={`/recipe/${_id}`}>
                                <button className="btn w-full bg-yellow-400 font-bold text-white">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </Roll>
        </div>
    );
};

export default Recipes;