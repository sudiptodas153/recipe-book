import React from 'react';
import Swal from 'sweetalert2';

const AddChef = () => {



    const handleChef = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const chefData = Object.fromEntries(formData.entries());

        fetch('https://recipe-database-zeta.vercel.app/chefs', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(chefData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Chef Added Successful",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })

    }

    return (
        <div className='my-10 flex justify-center'>
            <form onSubmit={handleChef} className='border md:w-6/10 border-yellow-500 p-5 rounded-lg'>
                <h2 className='font-bold text-center text-4xl'>Add New Chef</h2>
                <fieldset className="fieldset p-4">
                    <label className="">Chef name</label>
                    <input type="text" name='name' className="input w-full" placeholder="Enter chef name" />
                </fieldset>
                <fieldset className="fieldset  p-4">
                    <label className="">Chef Image</label>
                    <input type="text" name='photo' className="input w-full" placeholder="https://example.png/jpg" />
                </fieldset>
                <fieldset className="fieldset   p-4">
                    <label className="">specialCuisine</label>
                    <input type="text" name='cuisine' className="input w-full" placeholder="Enter cuisine" />
                </fieldset>
                <div className='flex justify-between'>
                    <fieldset className="fieldset  p-4">
                        <label className="">experience</label>
                        <input type="number" name='experience' className="input " placeholder="0" />
                    </fieldset>
                    <fieldset className="fieldset  p-4">
                        <label className="">signatureDish</label>
                        <input type="text" name='dish' className="input" placeholder="........" />
                    </fieldset>
                </div>
                <button className='btn bg-yellow-300 w-full text-lg font-bold text-white'>Add Chef</button>
            </form>
        </div>
    );
};

export default AddChef;