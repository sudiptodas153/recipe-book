import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';
import './nav.css'
import Swal from 'sweetalert2';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';
import { Typewriter } from 'react-simple-typewriter';
import icon from '../../assets/icon.png'
import Loader from '../Loader/Loader';

const Navbar = () => {

    const userInfo = use(AuthContext);
    const { user, themes, setThemes, loading } = userInfo;
    const [tooltipSet, setTooltipSet] = useState(false)
    // console.log(user?.displayName)
    // console.log(user?.photoURL)

    if (loading) {
        return <h2></h2>; 
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    title: "Logout Successful",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(() => {
                Swal.fire({
                    title: "Something went wrong",
                    icon: "error",
                    draggable: true
                });
            })
    }



    // console.log(user)
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-recipe'}>All Recipes</NavLink></li>
        <li><NavLink to={'/add-recipe'}>Add Recipe</NavLink></li>
        <li><NavLink to={'/my-recipes'}>My Recipes</NavLink></li>
        <li><NavLink to={'/about'}>About us</NavLink></li>
        <li><NavLink to={'/dash'}>Dashboard</NavLink></li>
        
        {
            user?.email === 'dadrupu@gmail.com' &&
            <NavLink to={'/add-Chef'}><li>Add New Chef</li></NavLink>
        }

    </>

    return (
        <div className=''>
            <div className={`navbar ${themes && 'border border-gray-100 bg-gray-700'} ${!themes && 'bg-yellow-50'} rounded-b-lg md:px-10 shadow-sm`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`${themes && 'text-black'} menu menu-sm dropdown-content border border-gray-300 bg-base-100 rounded-box z-1 mt-3 w-96 h-52 p-2 shadow`}>

                            {links}

                        </ul>
                    </div>

                    <div className='md:flex items-center'>
                        <img className='hidden md:flex w-20 mt-5' src={icon} alt="" />
                        <h2 className=" text-3xl font-bold text-yellow-400">
                            <Typewriter
                                words={['Yummiary']}
                                loop={Infinity}
                                cursor
                                cursorStyle='...'
                                typeSpeed={300}
                                deleteSpeed={100}
                                delaySpeed={2000}
                            />
                        </h2>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`${!themes && 'text-black'} menu font-bold menu-horizontal gap-3 px-1`}>
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className='mt-2 hidden md:flex '>
                        <div>
                            {
                                themes ?
                                    <div>
                                        <button onClick={() => setThemes(!themes)}><MdOutlineWbSunny color={!themes && 'black'} size={40} /></button>
                                    </div>
                                    :
                                    <div>
                                        <button onClick={() => setThemes(!themes)}><IoMoonOutline color={!themes && 'black'} size={40} /></button>
                                    </div>
                            }
                        </div>


                    </div>
                    {
                        user ?

                            <div className='flex items-center gap-2'>
                                {
                                    user?.photoURL &&
                                  <div className='flex gap-3'>


                                      <div className='md:hidden'>
                                    <Link to={'/'}>
                                        <button onClick={handleLogOut} className="btn text-yellow-400  text-lg  border-yellow-400 font-bold">Logout</button></Link>
                                </div>

                                    <div className='relative'>
                                        <img onClick={() => setTooltipSet(!tooltipSet)} className=' w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                                        <p className={`absolute md:w-30 text-center rounded-lg font-bold text-white bg-rose-600 px-3 ${tooltipSet ? ' md:-right-3 right-11 top-3  md:top-13' : '-top-80'}`}>{user.displayName}</p>
                                    </div>

                                   
                                </div>
                                }

                                <button onClick={handleLogOut} className="btn hidden md:flex bg-yellow-400 text-white font-bold">Logout</button>
                            </div>

                            :
                            <div className='flex items-center gap-1'>
                                <Link to={'/login'}><button className="btn bg-yellow-400 text-white font-bold">Login</button></Link>
                                <Link to={'/register'}><button className="btn  bg-yellow-400 text-white font-bold">Register</button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;