import React, { use, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router';


const MyRecipe = ({ recipe, storeRecipe, setRecipe }) => {
    const { _id, like, name, userEmail, photo, cuisine, Ingredients, Instructions, time, category } = recipe;
    const [likes, setLikes] = useState(0);
    const [modalData, setModalData] = useState(null);
    const [recipeName, setRecipeName] = useState('');
    const [liked, setLiked] = useState(false);
    const { user } = use(AuthContext);
    // const [addUser, setAddUser] = useState(null);

    // const navigate = useNavigate();
    console.log(userEmail === user?.email)







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

                            const uiUpdate = storeRecipe.filter(recipe => recipe._id !== _id)
                            setRecipe(uiUpdate);
                        }
                    })


            }
        });
    }


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const like = likes;
        const categories = formData.getAll('category[]')
        console.log(categories)
        const recipeData = Object.fromEntries(formData.entries());

        recipeData.category = categories;
        recipeData.like = likes

    }

    const updateProfile = (recipe) => {
        setModalData(recipe)
        setRecipeName(recipe?.name)
        // navigate('/update')
    }




    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
            likes.reset()
        }
    };
    return (
        <div className=''>
            <div>
                {userEmail === user.email ?
                    <div className="card border border-gray-300  shadow-sm p-5">

                        <img
                            src={photo}
                            alt="food"
                            className="rounded-xl md:h-72 " />

                        <div className=" mt-4 space-y-2">
                            <h2 className="text-3xl font-bold">{name}</h2>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-semibold'>Cuisine: <span className='text-lg font-medium'>{cuisine}</span></p>
                                <p className='text-xl font-semibold'>Like: <span className='text-lg font-medium'>{like}</span></p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-semibold'>Category: <span className='text-lg font-medium'>{category}</span></p>
                                <p className='text-xl font-semibold'>Time: <span className='text-lg font-medium'>{time} min</span></p>
                            </div>
                            <div className=''>
                                <div>
                                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                                    <p>{Ingredients}</p>
                                </div>
                                <div>
                                    <h2 className='text-xl font-bold mt-2'>Instructions:</h2>
                                    <p>{Instructions}</p>
                                </div>
                            </div>

                            <div className=" mt-2 flex justify-between">

                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn bg-green-600 font-bold text-white" onClick={() => { document.getElementById('my_modal_3').showModal(), updateProfile(recipe) }}>Update</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">

                                        <form onSubmit={handleUpdate} className='w-3/4 mx-auto bg-yellow-100 border-base-300 rounded-box  border p-4'>
                                            <fieldset className="fieldset ">
                                                <label className="label text-sm text-black font-semibold">Recipe Name</label>
                                                <input type="text" className="input w-full" required name='name' onChange={(e) => setRecipeName(e.target.value)} defaultValue={recipeName} placeholder="Enter recipe name" />

                                            </fieldset>

                                            <fieldset className="fieldset ">
                                                <label className="label text-sm text-black font-semibold">Recipe Image</label>
                                                <input type="text" className="input w-full" required name='photo' placeholder="https://example.png/jpg" />

                                            </fieldset>

                                            <fieldset className="fieldset ">
                                                <label className="label text-sm text-black font-semibold">Ingredients</label>

                                                <textarea rows={6} required className='bg-white border border-base-300 p-3' name="Ingredients" id="" placeholder='- 1 cup flour
- 2 eggs
- 1 tsp salt'></textarea>

                                            </fieldset>

                                            <fieldset className="fieldset ">
                                                <label className="label text-sm text-black font-semibold">Instructions</label>

                                                <textarea name="Instructions" rows={3} required className='bg-white border border-base-300 p-2' id=""></textarea>
                                            </fieldset>

                                            <div className='md:flex gap-4 items-center md:justify-between'>
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
                                                        <input type="number" name='time' required className="input w-20 " placeholder="0" />

                                                    </fieldset>
                                                </div>
                                            </div>

                                            <fieldset className="fieldset ">
                                                <label className="label text-sm text-black font-semibold">Categories</label>
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
                                                <div className='flex items-center gap-1'>
                                                    <p onClick={handleLike} className={`font-bold cursor-pointer  ${liked ? ' cursor-not-allowed' : ''}`}>{likes > 0 ? <FaHeart color='red' /> : <FaRegHeart />} </p>
                                                    <p className='font-bold' value='0'>{likes} Like</p>
                                                    <input type="text" name='like' />
                                                </div>
                                                <div className='mt-4'>
                                                    <button className='btn bg-green-400 text-white'>Update Recipe</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </dialog>


                                <button onClick={() => handleDelete(_id)} className="btn  bg-red-600 text-white font-bold">Delete</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center'>
                        < div className='text-center space-y-4 bg-amber-50 rounded-e-lg border border-gray-300 p-10 my-10 '>
                            <h2 className='text-4xl font-bold text-yellow-300'>No Recipe added here.</h2>
                            <h2 className='text-xl font-bold text-yellow-300'>If you want to add Recipe.</h2>
                            <Link to={'/add-recipe'}><button className='btn bg-yellow-300 text-white text-lg'>Add Recipe</button></Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyRecipe;