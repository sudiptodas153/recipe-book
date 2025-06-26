import React, { use } from 'react';
import { NavLink, Outlet } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { MdDashboard } from 'react-icons/md';
import { GiCrossedBones } from 'react-icons/gi';

const Dashboard = () => {
const {user} = use(AuthContext)

const links = <>
        <li className='border border-yellow-500 px-3 py-1 rounded-lg w-full'><NavLink to={'/'}>Home</NavLink></li>
        <li className='border border-yellow-500 px-3 py-1 rounded-lg w-full'><NavLink to={'/dash/all-recipeDash'}>All Recipes</NavLink></li>
        <li className='border border-yellow-500 px-3 py-1 rounded-lg w-full'><NavLink to={'/dash/add-recipeDash'}>Add Recipe</NavLink></li>
        <li className='border border-yellow-500 px-3 py-1 rounded-lg w-full'><NavLink to={'/dash/my-recipesDash'}>My Recipes</NavLink></li>
        
        
        
        {
            user?.email === 'dadrupu@gmail.com' &&
            <NavLink to={'/add-Chef'}><li>Add New Chef</li></NavLink>
        }

    </>


    return (
        <div className='max-w-11/12 mx-auto my-10'>
            
           <div className='md:border border-gray-300 md:rounded-lg p-5 md:flex gap-4 mt-10'>

           <div className='hidden md:flex md:w-64 border bg-yellow-50 border-gray-300 rounded-lg justify-center py-5'>
             <aside className='w-64 px-3'>
                <h2 className='text-2xl md:text-3xl font-bold text-center'>Dashboard</h2>
                <ul className='space-y-3 list-none no-underline mt-5'>
                    {links}
                </ul>
            </aside>
           </div>

          <div className="drawer z-20 md:hidden mb-5">
           <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
           {/* Page content here */}
                <label htmlFor="my-drawer" className=" drawer-button"><MdDashboard size={30}/></label>
    
                  </div>
                      <div className="drawer-side">
    
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                     <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
                      <button
                      onClick={() => document.getElementById('my-drawer').checked = false}
                         className="flex justify-end">
                       <GiCrossedBones />
                      </button>
                      <h2 className='text-2xl md:text-3xl font-bold text-center'>Dashboard</h2>
                        {links}
                        </ul>
                      </div>
          </div>

            <div className='md:flex-1'>
                <Outlet></Outlet>
            </div>
           </div>

           
        </div>
    );
};

export default Dashboard;