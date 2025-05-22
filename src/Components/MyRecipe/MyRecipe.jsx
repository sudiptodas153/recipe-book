
// import { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';



const MyRecipe = ({ recipe, storeRecipe, setRecipe, handleModal }) => {

    const { _id, like, name, photo, cuisine, Ingredients, Instructions, time, category } = recipe;
    // const [identifyEmail, setIdentifyEmail] = useState(null)
    // console.log(identifyEmail)
    // const data = useLoaderData();
    // const { user } = use(AuthContext);
    // useEffect(() => {
    //     data.map(i => setIdentifyEmail(i.userEmail))
    // }, [data])

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



    return (
        <div className=''>

            {/* {
                identifyEmail === user?.email
            } */}

            <div>

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
                            <div className='text-xl flex gap-2 font-semibold'>Category: <span className='text-lg font-medium flex gap-2'>{category.map(cate => <p key={cate}>{cate},</p>)}</span></div>
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
                            <button className="btn bg-green-600 font-bold text-white" onClick={() => handleModal(recipe)}>Update</button>



                            <button onClick={() => handleDelete(_id)} className="btn  bg-red-600 text-white font-bold">Delete</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className='flex justify-center'>
                < div className='text-center space-y-4 bg-amber-50 rounded-e-lg border border-gray-300 p-10 my-10 '>
                    <h2 className='text-4xl font-bold text-yellow-300'>No Recipe added here.</h2>
                    <h2 className='text-xl font-bold text-yellow-300'>If you want to add Recipe.</h2>
                    <Link to={'/add-recipe'}><button className='btn bg-yellow-300 text-white text-lg'>Add Recipe</button></Link>
                </div>
            </div> */}

        </div>
    );
};

export default MyRecipe;