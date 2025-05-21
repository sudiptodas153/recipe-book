import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyRecipe = ({ recipe }) => {
    const { _id, like, name, photo, cuisine, Ingredients, Instructions, time, category } = recipe;
    const [likes, setLikes] = useState(0);
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
                fetch(`http://localhost:3000/recipes/${_id}`, {
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
                        }
                    })


            }
        });
    }


    const handleUpdate = () => {
        document.getElementById('my_modal_3').close();
    }

    return (
        <div>
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
                            <p>Like: {like}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>{Ingredients}</p>
                            <p>{Instructions}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Category: {category}</p>
                            <p>{time} min</p>
                        </div>
                        <div className=" mt-2 flex justify-between">

                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn bg-green-600 font-bold text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Update</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <form onSubmit={handleUpdate}>
                                        <fieldset className="fieldset ">
                                            <label className="label text-sm text-black font-semibold">Recipe Name</label>
                                            <input type="text" required className="input w-full" name='name' placeholder="Enter recipe name" />

                                        </fieldset>

                                        <fieldset className="fieldset ">
                                            <label className="label text-sm text-black font-semibold">Recipe Image</label>
                                            <input type="text" className="input w-full" name='photo' placeholder="https://example.png/jpg" />

                                        </fieldset>

                                        <fieldset className="fieldset ">
                                            <label className="label text-sm text-black font-semibold">Ingredients</label>

                                            <textarea rows={6} required className='bg-white border border-base-300 p-3' name="Ingredients" id="" placeholder='- 1 cup flour
- 2 eggs
- 1 tsp salt'></textarea>

                                        </fieldset>

                                        <fieldset className="fieldset ">
                                            <label className="label text-sm text-black font-semibold">Instructions</label>

                                            <textarea name="Instructions" required rows={3} className='bg-white border border-base-300 p-2' id=""></textarea>
                                        </fieldset>

                                        <div className='md:flex items-center md:justify-between'>
                                            <div>
                                                <fieldset className="fieldset">
                                                    <legend className="fieldset-legend text-sm text-black font-semibold">Cuisine Type</legend>
                                                    <select defaultValue="Pick a browser" name='cuisine' className="select w-full">
                                                        <option disabled={true}>Select Cuisine</option>
                                                        <option>Italian</option>
                                                        <option>Mexican</option>
                                                        <option>Indian</option>
                                                        <option>Chinese</option>
                                                        <option>Others</option>
                                                    </select>

                                                </fieldset>
                                            </div>
                                            <div>
                                                <fieldset className="fieldset ">
                                                    <label className="label text-sm text-black font-semibold">Preparation Time <span className='text-xs text-gray-500'>(in minutes)</span></label>
                                                    <input type="number" required name='time' className="input w-20 md:w-full" placeholder="0" />

                                                </fieldset>
                                            </div>
                                        </div>

                                        <fieldset className="fieldset ">
                                            <label className="label text-sm text-black font-semibold">Categories</label>
                                            <div className="grid grid-cols-2 md:flex gap-3 text-gray-700">
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" name='category' value="Breakfast" className="accent-green-600" />
                                                    <span>Breakfast</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" name='category' value="Lunch" className="accent-green-600" />
                                                    <span>Lunch</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" value="Dinner" className="accent-green-600" />
                                                    <span>Dinner</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" value="Dessert" className="accent-green-600" />
                                                    <span>Dessert</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" value="Vegan" className="accent-green-600" />
                                                    <span>Vegan</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" value="Snack" className="accent-green-600" />
                                                    <span>Snack</span>
                                                </label>
                                            </div>
                                        </fieldset>

                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center gap-2'>
                                                <p onClick={() => setLikes(likes + 1)} className='font-bold'><FaRegHeart /></p>
                                                <p className='font-bold' value='0'>{likes} Like</p>
                                            </div>
                                            <div>
                                                <button className='btn bg-green-400 text-white'>Add Recipe</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </dialog>


                            <button onClick={() => handleDelete(_id)} className="btn  bg-red-600 text-white font-bold">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRecipe;