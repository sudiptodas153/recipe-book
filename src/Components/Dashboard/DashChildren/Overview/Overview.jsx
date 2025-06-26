import React, { use } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';
import proIcon from '../../../../assets/resIcon.png'
import proCover from '../../../../assets/myCover.jpg'

const Overview = () => {
    const {user, allData, identifyByEmail} = use(AuthContext)
    console.log()
    return (
        <div>          
            <div className='flex items-center justify-center'>
                <div>

                <div className='flex items-center justify-center mb-32'>
                   <div className='relative'>
                     <img className='md:h-72 rounded-lg md:w-[500px]' src={proCover} alt="" />
                    <div className='absolute left-33 top-57 md:top-59 md:left-10 md:flex items-end'>
                        <img className='rounded-full border border-yellow-400 p-2 bg-yellow-300 w-20 h-20 md:w-30 md:h-30' src={user.photoURL} alt="" />
                   <div className=' text-center -ml-10 md:text-start md:ml-3 mb-2'>
                    <h2 className='text-2xl font-bold'>{user.displayName}</h2>
                   <p>{user.email}</p>
                   </div>
                    </div>
                   </div>
                </div>

                <div className='md:flex border-t border-gray-500 pt-8 md:-mt-6 gap-5 items-center justify-center space-y-3 md:space-y-0'>
                      <div className='border md:w-60 flex items-center justify-center border-gray-400 rounded-lg p-5'>
                        <div>
                            <img className='w-20 ml-7' src={proIcon} alt="" />
                        <h2 className='text-2xl font-bold'>Total Recipe: {allData.length}</h2>
                        </div>
                      </div>
                      <div className='border md:w-60 flex items-center justify-center border-gray-400 rounded-lg p-5'>
                        <div>
                            <img className='w-20 ml-7' src={proIcon} alt="" />
                        <h2 className='text-2xl font-bold'>My Recipe: {identifyByEmail.length}</h2>
                        </div>
                      </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default Overview;