import React, { use } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';
import { FaHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyRecipeDash = () => {
    const {identifyByEmail, themes, data, setData} = use(AuthContext)
    





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
                    .then(d => {
                        if (d.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Delete Successful",
                                icon: "success"
                            });
                          const uiUpdate = data.filter(recipeData => recipeData._id !== _id)
                            setData(uiUpdate);
                           
                        }
                    })


            }
        });
    }




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
                    <th className={`font-bold  ${!themes && 'text-black'}`}></th>
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
                    <td>
                      <button onClick={() => handleDelete(resp._id)} className="btn  bg-red-600 text-white font-bold">Delete</button>
                    </td>
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