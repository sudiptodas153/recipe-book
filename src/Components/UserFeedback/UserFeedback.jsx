import React, { use } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const UserFeedback = ({ feedback, setFeedback }) => {

    const { user } = use(AuthContext)

    const handleDelate = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://recipe-database-zeta.vercel.app/feedback/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Delete Successful",
                                icon: "success"
                            });

                            const uiUpdate = feedback.filter(recipeData => recipeData._id !== _id)
                            setFeedback(uiUpdate);
                        }
                    })


            }
        });
    }


    return (
        <div className='md:w-11/12 mx-auto my-10 md:my-20'>
            <div className='text-center space-y-3'>
                <h2 className='text-4xl font-bold'>Users Feedback</h2>
                <p className='text-gray-700 md:px-10'>Hear what our users have to say! From taste and presentation to overall experience, their reviews help us grow and inspire others to try new recipes. Your opinion matters and shapes the future of our kitchen.</p>
            </div>
            <div className=' space-y-3 border border-gray-300 p-5 rounded-lg mt-10'>

                {
                    feedback?.map(feed => <div key={feed._id}>

                        <div className='border border-gray-200 p-4 rounded-lg'>
                            {
                                user?.email === 'dadrupu@gmail.com' &&
                                <div className='flex justify-end mb-2'>
                                    <button onClick={() => handleDelate(feed._id)} className=''><RxCross1 color='red' /></button>
                                </div>
                            }
                            <div className='flex border-b border-gray-300 pb-4 items-center justify-between'>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        <img className='rounded-full h-16 w-16' src={feed.userPhoto} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold'>Name: {feed.userName}</h2>
                                        <p>Email: {feed.userEmail}</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className='font-semibold text-xl'>Recipe: {feed.recipeName}</h2>
                                    <p className='font-semibold text-xl'>Cuisine: {feed.recipeCuisine}</p>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <p>{feed.feedback}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserFeedback;