import React, {  useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import MyRecipe from '../MyRecipe/MyRecipe';
import { AuthContext } from '../../Context/AuthContext';

const MyRecipes = () => {
    const data = useLoaderData()
    const [storeRecipe, setRecipe] = useState(data);
    // const { user } = use(AuthContext);
    // const [userInf, setUserInf] = useState(null);

    // useEffect(() => {
    //     storeRecipe.map(resData => setUserInf(resData))
    // }, [storeRecipe])



    return (
        <div className=' w-11/12 mx-auto my-10'>
            <div className=''>
                <h2 className='text-3xl md:text-5xl font-bold text-center mb-5 md:mb-10'>My Recipe</h2>

                <div >

                        {/* // userInf?.userEmail === user?.email ? */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                        {
                            storeRecipe.map(recipe => <MyRecipe storeRecipe={storeRecipe} setRecipe={setRecipe} key={recipe._id} recipe={recipe}></MyRecipe>)
                        }
                    </div>
                            {/* // : */}
                            {/* // <div className='flex justify-center'>
                            //     < div className='text-center space-y-4 bg-amber-50 rounded-e-lg border border-gray-300 p-10 my-10 '>
                            //         <h2 className='text-4xl font-bold text-yellow-300'>No Recipe added here.</h2>
                            //         <h2 className='text-xl font-bold text-yellow-300'>If you want to add Recipe.</h2>
                            //         <Link to={'/add-recipe'}><button className='btn bg-yellow-300 text-white text-lg'>Add Recipe</button></Link>
                            //     </div>
                            // </div> */}


                </div>
            </div>
        </div >
    );
};

export default MyRecipes;