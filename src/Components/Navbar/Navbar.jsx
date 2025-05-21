import React, { use } from 'react';
import { Link, NavLink} from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';
import './nav.css'
import Swal from 'sweetalert2';

const Navbar = () => {
   
    const userInfo = use(AuthContext);
    const { user } = userInfo;

    // console.log(user?.displayName)
    // console.log(user?.photoURL)

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
        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to={'/all-recipe'}><li>All Recipes</li></NavLink>
       {
        user &&  <NavLink to={'/add-recipe'}><li>Add Recipe</li></NavLink>
       }
        <NavLink to={'/my-recipes'}><li>My Recipes</li></NavLink>
    </>

    return (
        <div className='container mx-auto  px-2'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className=" text-3xl font-bold text-yellow-400">Yummiary</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-8 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ?

                            <div className='flex items-center gap-2'>
                                {
                                    user?.photoURL && <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                                }
                                
                                <button onClick={handleLogOut} className="btn bg-yellow-400 text-white font-bold">Logout</button>
                            </div>

                            :
                            <div>
                                <Link to={'/login'}><button className="btn bg-yellow-400 text-white font-bold">Login</button></Link>
                                <Link to={'/register'}><button className="btn bg-yellow-400 text-white font-bold">Register</button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;