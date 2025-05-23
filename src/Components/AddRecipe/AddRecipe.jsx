
import { use, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';

const AddRecipe = () => {
    const { user, themes } = use(AuthContext);

    // console.log(user.email)
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleAddRecipe = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const like = likes;
        const categories = formData.getAll('category[]')
        console.log(categories)
        const recipeData = Object.fromEntries(formData.entries());
        recipeData.userEmail = user.email
        recipeData.category = categories;
        recipeData.like = likes
        // console.log(recipeData)


        fetch('https://recipe-database-zeta.vercel.app/recipes', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(recipeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Recipe Added Successful",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })

    }



    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
            likes.reset()
        }
    };



    return (
        <div className='container mx-auto my-10'>
            <title>Add Recipe</title>
            <h2 className='text-center text-3xl font-bold'>Add Recipe</h2>
            <div className='mt-10'>

                <form onSubmit={handleAddRecipe} className={`w-3/4 text-white mx-auto ${!themes ? 'bg-yellow-100 border border-base-300' : 'border border-white'}  rounded-box   p-4`}>
                    <fieldset className="fieldset ">
                        <label className={`label text-sm ${!themes && 'text-black'} font-semibold`}>Recipe Name</label>
                        <input type="text" className={`input w-full ${!themes && 'text-black'}`} required name='name' placeholder="Enter recipe name" />

                    </fieldset>

                    <fieldset className="fieldset ">
                        <label className={`label text-sm ${!themes && 'text-black'}  font-semibold`}>Recipe Image</label>
                        <input type="text" className={`input w-full ${!themes && 'text-black'}`} required name='photo' placeholder="https://example.png/jpg" />

                    </fieldset>

                    <fieldset className="fieldset ">
                        <label className={`label text-sm ${!themes && 'text-black'}  font-semibold`}>Ingredients</label>

                        <textarea rows={6} required className={` border border-base-300 p-3 ${!themes && 'text-black bg-white'}`} name="Ingredients" id="" placeholder='- 1 cup flour
- 2 eggs
- 1 tsp salt'></textarea>

                    </fieldset>

                    <fieldset className="fieldset ">
                        <label className={`label text-sm ${!themes && 'text-black'}  font-semibold`}>Instructions</label>

                        <textarea name="Instructions" rows={3} required className={`${!themes && 'text-black bg-white'} border border-base-300 p-2`} id=""></textarea>
                    </fieldset>

                    <div className='md:flex items-center md:justify-between'>
                        <div>
                            <fieldset className="fieldset">
                                <legend className={`fieldset-legend text-sm ${!themes && 'text-black'} font-semibold`}>Cuisine Type</legend>
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
                                <label className={`label text-sm ${!themes && 'text-black'}  font-semibold`}>Preparation Time <span className='text-xs text-gray-500'>(in minutes)</span></label>
                                <input type="number" name='time' required className="input w-20 md:w-full" placeholder="0" />

                            </fieldset>
                        </div>
                    </div>

                    <fieldset className="fieldset ">
                        <label className={`label text-sm ${!themes && 'text-black'}  font-semibold`}>Categories</label>
                        <div className="grid grid-cols-2 md:flex gap-3 text-gray-700">
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

                    <div className='mt-2 space-y-2 md:flex md:justify-between md:items-center'>
                        <div className='flex items-center gap-1'>
                            <p onClick={handleLike} className={`font-bold cursor-pointer ${liked ? ' cursor-not-allowed' : ''}`}>{likes > 0 ? <FaHeart color='red' /> : <FaRegHeart />} </p>
                            <p className={`font-bold ${!themes && 'text-black'}`} value='0'>{likes} Like</p>
                            <input type="text" name='like' />
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