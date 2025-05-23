import React, { use, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const RecipeDetails = () => {
    const data = useLoaderData()

    const { _id, name, photo, userEmail, Ingredients, Instructions, cuisine, time, like, category } = data;
    const { user } = use(AuthContext);


    const [likes, setLikes] = useState(like)

    // console.log(likes)
    // console.log(data)

    const handelLike = () => {
        setLikes(likes + 1)
    }



    const likeHandle = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const like = likes + 1;
        const recipeData = Object.fromEntries(formData.entries());

        recipeData.like = likes


        fetch(`https://recipe-database-zeta.vercel.app/recipes/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(recipeData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    const handleFeedback = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const feedbackData = Object.fromEntries(formData.entries());
        feedbackData.userName = user.displayName
        feedbackData.userEmail = user.email
        feedbackData.userPhoto = user.photoURL
        feedbackData.recipeName = name
        // console.log(feedbackData)

        fetch('https://recipe-database-zeta.vercel.app/feedback', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(feedbackData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Thank you for your feedback",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
    }


    return (
        <div className='my-10 w-11\12 mx-auto px-3'>
            <title>Recipe Details</title>
            <div className=''>
                <div className='md:flex items-center space-y-3 md:-space-y-3 gap-8'>
                    <img className='md:w-3/6 md:h-[500px] rounded-lg' src={photo} alt="" />
                    <div className='space-y-3'>
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

                            <div className=' md:space-y-3 '>
                                <p className='font-semibold text-lg'><span className='font-bold text-xl'>Cuisine:</span> {cuisine}</p>
                                <span className='text-lg flex items-center gap-3'><span className='font-bold text-xl'>Category:</span> <span className='font-semibold flex gap-3 '>{category?.map(cate => <p key={cate} >{cate},</p>)}</span></span>
                                <p className='font-semibold text-lg'><span className='font-bold text-xl'>Time:</span> {time} min</p>

                            </div>



                        </div>

                        <div className=''>
                            <form onSubmit={likeHandle}>
                                <div>
                                    <p className='font-semibold text-xl'><span className='font-bold'>Like:</span> {likes ? likes : like}</p>
                                    <input type="text" name='like' />
                                </div>
                                <button onClick={handelLike} disabled={user?.email === userEmail} className={`btn mt-2 ${user?.email === userEmail ? 'cursor-not-allowed' : ''} bg-yellow-400 text-white font-bold`}><AiFillLike />Like Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20'>
                    <h2 className='text-2xl md:text-4xl font-bold text-center'>Feedback About this Recipe</h2>

                    <form onSubmit={handleFeedback}>
                        <fieldset className="fieldset mt-5">
                            <textarea name="feedback" rows={5} required placeholder='Say something about this recipe......' className={`text-black  border rounded-lg border-gray-500 p-2 text-lg`} id=""></textarea>
                        </fieldset>
                        <button className='btn bg-yellow-400 font-bold text-white text-sm'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;