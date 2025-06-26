import React, { use } from 'react';

import { RxCross1 } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';

const Modal = ({ modalData, verifyId,fetchUpdatedRecipes }) => {
    const {themes} = use(AuthContext)
    // console.log(verifyId)
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const categories = formData.getAll('category[]')
        const recipeData = Object.fromEntries(formData.entries());
        recipeData.category = categories;

        // console.log(recipeData)


        fetch(`https://recipe-database-zeta.vercel.app/recipes/${verifyId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(recipeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    document.getElementById('my_modal_3').close()
                    Swal.fire({
                        title: "Recipe update successful",
                        icon: "success",
                        draggable: true
                    });
                    if(fetchUpdatedRecipes){
                        fetchUpdatedRecipes()
                    }
                }
            })

    }

    return (
        <div >
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <div className='flex justify-end mb-3'>
                        <button onClick={() => document.getElementById('my_modal_3').close()} className={`btn ${!themes && ' text-white'}`}><RxCross1 color={!themes && 'black'} size={25}/></button>
                    </div>
                    <form onSubmit={handleUpdate} className={`md:w-4/4 ${!themes && 'bg-yellow-100 '} mx-auto border-base-300 rounded-box  border p-4`}>
                        <fieldset className="fieldset ">
                            <label className={`label text-sm ${!themes && 'text-black'} font-semibold`}>Recipe Name</label>
                            <input type="text" className="input w-full" required name='name' defaultValue={modalData?.name && modalData.name} placeholder="Enter recipe name" />


                        </fieldset>
                        {/* {
                                            console.log(modalData?.name)
                                        } */}

                        <fieldset className="fieldset ">
                            <label className={`label text-sm ${!themes && 'text-black'} font-semibold`}>Recipe Image</label>
                            <input type="text" defaultValue={modalData?.photo} className="input w-full" required name='photo' placeholder="https://example.png/jpg" />

                        </fieldset>

                        <fieldset className="fieldset ">
                            <label className={`label text-sm ${!themes && 'text-black'} font-semibold`}>Ingredients</label>

                            <textarea rows={6} defaultValue={modalData?.
                                Ingredients
                            } required className={`${!themes && 'bg-white'} border border-base-300 p-3`} name="Ingredients" id="" placeholder='- 1 cup flour
- 2 eggs
- 1 tsp salt'></textarea>

                        </fieldset>

                        <fieldset className="fieldset ">
                            <label className={`label text-sm ${!themes && 'text-black'} font-semibold`}>Instructions</label>

                            <textarea name="Instructions" defaultValue={modalData?.Instructions} rows={3} required className={`${!themes && 'bg-white'} border border-base-300 p-2`} id=""></textarea>
                        </fieldset>

                        <div className='md:flex gap-4 items-center md:justify-between'>
                            <div>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-sm ${!themes && 'text-black'} font-semibold">Cuisine Type</legend>
                                    <select defaultValue={modalData?.cuisine} name='cuisine' className="select w-full">
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
                                    <label className={`label text-sm ${!themes && 'text-black'} font-semibold`}>Preparation Time <span className='text-xs text-gray-500'>(in minutes)</span></label>
                                    <input type="number" defaultValue={modalData?.time} name='time' required className="input w-20 " placeholder="0" />

                                </fieldset>
                            </div>
                        </div>

                        <fieldset className="fieldset ">
                            <label className={`label text-sm ${!themes && 'text-black'} font-semibold`}>Categories</label>
                            <div className="grid grid-cols-2  gap-3 text-gray-700">
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" name='category[]' value="Breakfast" className="accent-green-600" />
                                    <span>Breakfast</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" name='category[]' value="Lunch" className="accent-green-600" />
                                    <span>Lunch</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" name='category[]' value="Dinner" className="accent-green-600" />
                                    <span>Dinner</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" name='category[]' value="Dessert" className="accent-green-600" />
                                    <span>Dessert</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" name='category[]' value="Vegan" className="accent-green-600" />
                                    <span>Vegan</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" name='category[]' value="Snack" className="accent-green-600" />
                                    <span>Snack</span>
                                </label>
                            </div>
                        </fieldset>

                        <div className='mt-3'>

                            <div className='mt-4 flex justify-between'>
                                <button className='btn bg-green-400 text-white'>Update Recipe</button>

                            </div>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;