import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import MyRecipe from '../MyRecipe/MyRecipe';
import { AuthContext } from '../../Context/AuthContext';
import Modal from '../Modal/Modal';

const MyRecipes = () => {

    const data = useLoaderData()
    const { user } = use(AuthContext);
    const [modalData, setModalData] = useState(null);
    const [identifyByEmail, setIdentifyByEmail] = useState([]);
    const [verifyId, setVerifyId] = useState(null);
    const [deleteHandle, setDeleteHandle] = useState(data)


    useEffect(() => {
        //    const filtered =  data.filter(r=>r.userEmail === user.email);
        const filteredItems = deleteHandle.filter(item => item.userEmail === user?.email);
        // console.log(filteredItems)
        setIdentifyByEmail(filteredItems);
    }, [deleteHandle, user?.email])
    // console.log(identifyByEmail)

    const handleModal = (data, _id) => {
        setModalData(data)
        setVerifyId(_id)
        setTimeout(() => {
            document.getElementById('my_modal_3').showModal();
        }, 500);

    }


    return (
        <div className=' w-11/12 mx-auto my-10'>
            <title>My Recipe</title>
            <div className=''>
                {
                    identifyByEmail.length > 0 &&
                    <div className='text-center mb-5 md:mb-10 space-y-3'>
                        <h2 className='text-3xl md:text-5xl font-bold '>My Recipe</h2>
                        <p className='text-gray-700'>Your personal space to save and share your favorite creations. Whether it's a family secret or your latest kitchen experiment, keep all your recipes in one place and revisit the magic anytime.</p>
                    </div>

                }

                <div >

                    {identifyByEmail.length > 0 ?
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                            {
                                identifyByEmail.map(recipe => <MyRecipe handleModal={handleModal} deleteHandle={deleteHandle} setDeleteHandle={setDeleteHandle} key={recipe._id} recipe={recipe}></MyRecipe>)
                            }

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

                    <Modal modalData={modalData} verifyId={verifyId} ></Modal>
                </div>
            </div>
        </div >
    );
};

export default MyRecipes;