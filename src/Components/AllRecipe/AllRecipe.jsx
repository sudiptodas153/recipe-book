import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { Slide, Zoom } from 'react-awesome-reveal';
import Swal from 'sweetalert2';

const AllRecipe = () => {
    const data = useLoaderData();
    const [filteredData, setFilteredData] = useState(data);
    const [sort, setSort] = useState('All');
    const { themes, user } = use(AuthContext);
    useEffect(() => {
        if (sort === 'All') {
            setFilteredData(data);
        }
        else {
            const filtered = data.filter(item => item.cuisine === sort);
            setFilteredData(filtered);
        }
    }, [sort, data]);

    const handleSelect = (e) => {
        setSort(e.target.value);
        // console.log(e.target.value)
    };


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
                fetch(`https://recipe-database-zeta.vercel.app/recipes/${_id}`, {
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

                            const uiUpdate = filteredData.filter(recipeData => recipeData._id !== _id)
                            setFilteredData(uiUpdate);
                        }
                    })


            }
        });
    }


    return (
        <div className='w-11/12 mx-auto my-10 overflow-scroll'>

            <div className='md:flex md:gap-[340px] items-center mb-8'>

                <select value={sort}
                    onChange={handleSelect} className="select w-40 select-info hidden md:flex">

                    <option value="All">All</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Others">Others</option>
                </select>
                <h2 className='text-center my-8 text-4xl font-bold'>All Recipe</h2>
            </div>
            <div className='md:hidden mb-6'>
                <select value={sort}
                    onChange={handleSelect} className="select w-40 select-info ">

                    <option value="All">All</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    filteredData.map(resp =>
                        <div key={resp._id} className=''>
                            <Zoom>
                                <div className={`card border border-gray-500 ${user?.email === 'dadrupu@gmail.com' ? 'md:h-[450px]' : 'md:h-[400px]'}  ${!themes && 'bg-yellow-50'} shadow-sm p-3`}>

                                    <img
                                        src={resp.photo}
                                        alt="food"
                                        className="rounded-xl h-52 w-full " />

                                    <div className=" mt-4">
                                        <h2 className="text-2xl font-bold">{resp.name}</h2>
                                        <div className='mt-3'>
                                            <p className='text-lg font-semibold'>Category: <span className='font-semibold text-sm'>{resp.category}</span></p>

                                        </div>
                                        <div className='flex items-center justify-between '>
                                            <p className='text-lg font-semibold'>Cuisine: <span className='font-semibold text-sm'>{resp.cuisine}</span></p>
                                            <p className='text-lg font-semibold'>Time: <span className='font-semibold'>{resp.time} min</span></p>
                                        </div>

                                        <div className=" mt-2">
                                            <Link to={`/recipe/${resp._id}`}>
                                                <button className="btn w-full bg-yellow-400 font-bold text-white ">See Details</button></Link>
                                            {
                                                user?.email === 'dadrupu@gmail.com' &&
                                                <button onClick={() => handleDelete(resp._id)} className='btn mt-2 w-full bg-red-700 font-bold text-white '>Delete</button>
                                            }
                                        </div>

                                    </div>
                                </div>
                            </Zoom>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllRecipe;