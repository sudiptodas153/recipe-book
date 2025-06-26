import React, { use } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../../../Context/AuthContext';

const AllRecipeDash = () => {
    const data = useLoaderData();
    const {themes} = use(AuthContext)
    return (
        <div>
            <div className="h-[500px] w-full rounded-box overflow-x-auto">
  <table className="table table-pin-rows">
    {/* head */}
    <thead>
      <tr className={`${!themes ? 'bg-yellow-300' : ' bg-gray-800'}`}>
        
        <th className={`font-bold  ${!themes && 'text-black'}`}>Image</th>
        <th className={`font-bold  ${!themes && 'text-black'}`}>Recipe Name</th>
        <th className={`font-bold  ${!themes && 'text-black'}`}>Cuisine</th>
        <th className={`font-bold  ${!themes && 'text-black'}`}>Time</th>
        <th><FaHeart color='red' size={20}/></th>
      </tr>
    </thead>
    {
        data.map(resp => 
    <tbody className='border-b border-gray-400'>
      {/* row 1 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={resp.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td className='font-bold md:text-xl'>
         {resp.name}
        </td>
        <td>{resp.cuisine}</td>
        <td>{resp.time} min</td>
        <td>{resp.like}</td>
      </tr>
    
    </tbody>
    
 )
    }
  </table>
            </div>

           
        </div>
    );
};

export default AllRecipeDash;