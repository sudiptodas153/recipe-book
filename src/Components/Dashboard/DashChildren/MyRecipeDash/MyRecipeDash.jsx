import React, { use } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';
import { FaHeart } from 'react-icons/fa';

const MyRecipeDash = () => {
    const {identifyByEmail, themes} = use(AuthContext)
    console.log(identifyByEmail)
    return (
        <div>
            <div className="h-[500px] rounded-box overflow-x-auto">
              <table className="table table-pin-rows">
                {/* head */}
                <thead>
                  <tr className={`${!themes ? 'bg-yellow-200' : ' bg-gray-800'}`}>
                    
                    <th className={`font-bold  ${!themes && 'text-black'}`}>Image</th>
                    <th className={`font-bold  ${!themes && 'text-black'}`}>Recipe Name</th>
                    <th className={`font-bold  ${!themes && 'text-black'}`}>Instructions</th>
                    <th className={`font-bold  ${!themes && 'text-black'}`}>Time</th>
                  </tr>
                </thead>
                {
                    identifyByEmail.map(resp => 
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
                    <td>{resp.Instructions}</td>
                    <td>{resp.time} min</td>
                    
                  </tr>
                
                </tbody>
                
             )
                }
              </table>
                        </div>
        </div>
    );
};

export default MyRecipeDash;