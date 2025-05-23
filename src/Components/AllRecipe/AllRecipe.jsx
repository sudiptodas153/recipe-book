import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { Slide, Zoom } from 'react-awesome-reveal';

const AllRecipe = () => {
    const data = useLoaderData();
    const [filteredData, setFilteredData] = useState(data);
    const [sort, setSort] = useState('All');
    const { themes } = use(AuthContext);
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


    return (
        <div className='w-11/12 mx-auto my-10'>

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
                            <div className={`card border border-gray-500 md:h-[400px] ${!themes && 'bg-yellow-50'} shadow-sm p-3`}>

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
                                        <p className='text-lg font-semibold'>Like: <span className='font-semibold'>{resp.like}</span></p>
                                    </div>

                                    <div className=" mt-2">
                                        <Link to={`/recipe/${resp._id}`}>
                                            <button className="btn w-full bg-yellow-400 font-bold text-white">See Details</button></Link>
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