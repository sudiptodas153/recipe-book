import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const AddRecipe = () => {

const handleAddRecipe = e =>{
    e.preventDefault();
    const form = e.target;
}




    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-center text-3xl font-bold'>Add Recipe</h2>
            <div className='mt-10'>

                <form onSubmit={handleAddRecipe} className='w-3/4 mx-auto bg-yellow-100 border-base-300 rounded-box  border p-4'>
                    <fieldset className="fieldset ">
                        <label className="label text-sm text-black font-semibold">Recipe Name</label>
                        <input type="text" className="input w-full" name='name' placeholder="Enter recipe name" />

                    </fieldset>

                    <fieldset className="fieldset ">
                        <label className="label text-sm text-black font-semibold">Recipe Image</label>
                        <input type="text" className="input w-full" name='photo' placeholder="https://example.png/jpg" />

                    </fieldset>

                    <fieldset className="fieldset ">
                        <label className="label text-sm text-black font-semibold">Ingredients</label>

                        <textarea rows={6} className='bg-white border border-base-300 p-3' name="Ingredients" id=""  placeholder='- 1 cup flour
- 2 eggs
- 1 tsp salt'></textarea>

                    </fieldset>

                    <fieldset className="fieldset ">
                        <label className="label text-sm text-black font-semibold">Instructions</label>
                        
                        <textarea name="Instructions" rows={3} className='bg-white border border-base-300 p-2' id=""></textarea>
                    </fieldset>

                    <div className='md:flex items-center md:justify-between'>
                        <div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-sm text-black font-semibold">Cuisine Type</legend>
                                <select defaultValue="Pick a browser" className="select w-full">
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
                                <input type="number" name='time' className="input w-20 md:w-full" placeholder="0" />

                            </fieldset>
                        </div>
                    </div>

                    <fieldset className="fieldset ">
                        <label className="label text-sm text-black font-semibold">Categories</label>
                        <div className="grid grid-cols-2 md:flex gap-3 text-gray-700">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" value="Breakfast" className="accent-green-600" />
                                <span>Breakfast</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" value="Lunch" className="accent-green-600" />
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
                            <button className='font-bold'><FaRegHeart /></button>
                            <p className='font-bold' value='0'>0 Like</p>
                        </div>
                        <div>
                            <button className='btn bg-green-400 text-white'>Add Recipe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;