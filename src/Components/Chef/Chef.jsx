import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const Chef = ({ chefData, setChefData }) => {

    const { user } = use(AuthContext);


    const handleDelete = (_id) => {
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
                fetch(`https://recipe-database-zeta.vercel.app/chefs/${_id}`, {
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

                            const uiUpdate = chefData.filter(recipeData => recipeData._id !== _id)
                            setChefData(uiUpdate);
                        }
                    })


            }
        });
    }



    return (

        <div className='md:w-11/12 mx-auto mt-10 md:mt-20'>
            <div className='text-center space-y-3'>
                <h2 className='text-4xl font-bold'>Meet Our Top Chefs</h2>
                <p className='text-gray-700'>Get introduced to the skilled chefs who craft the delicious recipes you love. With years of experience and a passion for cooking, they bring creativity and authenticity to every dish. Discover their stories and signature styles that make our kitchen truly special.

                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-5'>
                {
                    chefData?.map(chef => <div key={chef._id}>
                        <div className="card border border-gray-400 p-5 shadow-sm">

                            <div className='flex justify-center'>
                                <img className='rounded-full border border-l-violet-500 border-t-lime-500 border-r-yellow-500 border-b-pink-500 p-2 w-52 h-52'
                                    src={chef.photo}
                                    alt="Shoes" />
                            </div>

                            <div className="mt-4">
                                <h2 className="text-2xl font-bold">Chef Name: {chef.name}</h2>

                                <div className="flex justify-between mt-3">
                                    <div className="border bg-green-50 border-green-500 px-3 rounded-xl  text-green-500 text-sm font-bold">Experience: {chef.experience} Years</div>
                                    <div className="border text-sm bg-pink-50 border-pink-500 px-3 rounded-xl  text-pink-500 font-bold">{chef.dish}</div>
                                </div>
                                <div className=''>
                                    <p className='mt-3 font-semibold text-lg'>Special Cuisine: {chef.cuisine}</p>
                                    {
                                        user?.email === 'dadrupu@gmail.com' &&
                                        <button onClick={() => handleDelete(chef._id)} className='btn mt-2 bg-red-600 font-bold text-white'>Delete</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Chef;