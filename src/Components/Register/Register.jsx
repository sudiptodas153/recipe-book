import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {

    const [passCheck, setPassCheck] = useState(false);
    const [passCheck2, setPassCheck2] = useState(false);
    const [passCheck3, setPassCheck3] = useState(false);

    const userInfo = use(AuthContext);
    const navigate = useNavigate();
    const { createUser, profileUpdate, user, setUser, googleSignIn, themes } = userInfo;


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries())




        const name = e.target.name.value;
        const photo = e.target.photo.value;




        const pass1 = /^(?=.*[A-Z]).*$/
        const pass2 = /^(?=.*[a-z]).*$/
        const pass3 = /^.{6,}$/

        setPassCheck(false);
        setPassCheck2(false);
        setPassCheck3(false);


        if (pass1.test(password) === false) {
            setPassCheck(true);
            return;
        }
        if (pass2.test(password) === false) {
            setPassCheck2(true);
            return;
        }
        if (pass3.test(password) === false) {
            setPassCheck3(true);
            return;
        }






        createUser(email, password)
            .then(result => {

                setUser({ ...user, displayName: name, photoURL: photo })
                profileUpdate({ displayName: name, photoURL: photo })


                const userProfile = {
                    email,
                    ...rest,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                fetch('https://recipe-database-zeta.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Registration Successful",
                                icon: "success",
                                draggable: true
                            });
                        }
                    })
                navigate('/')
            })
            .catch(() => {

                Swal.fire({
                    title: "Already registered this email",
                    icon: "error",
                    draggable: true
                });
            })

    }



    const logInWithGoogle = e => {
        e.preventDefault();
        googleSignIn()
            .then((result) => {
                console.log(result)

                const userProfile = {
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    creationTime: user.metadata?.creationTime,
                    lastSignInTime: user.metadata?.lastSignInTime
                };


                fetch('https://recipe-database-zeta.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Login Successful",
                                icon: "success",
                                draggable: true
                            });
                            navigate('/')
                        }
                    })





            })
            .catch(() => {
                Swal.fire({
                    title: "Something went wrong",
                    icon: "error",
                    draggable: true
                });
            })
    }




    return (
        <div className='flex justify-center my-20'>
            <title>Register</title>
            <div className={`${!themes && 'bg-yellow-50'}  ${themes && 'border border-white'} w-80 p-4 rounded-lg`}>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset  p-4">
                        <h2 className='text-center text-3xl font-bold mb-2'>Register</h2>

                        <label className={`label font-bold ${!themes && 'text-black'}`}>Name</label>
                        <input type="text" required name='name' className="input" placeholder="Enter your name" />

                        <label className={`label font-bold ${!themes && 'text-black'}`}>Email</label>
                        <input type="email" required name='email' className="input" placeholder="Enter your email" />

                        <label className={`label font-bold ${!themes && 'text-black'}`}>PhotoURL</label>
                        <input type="text" required name='photo' className="input" placeholder="https://Example.png" />

                        <label className={`label font-bold ${!themes && 'text-black'}`}>Password</label>
                        <input type="password" required name='password' className="input" placeholder="Enter your password" />
                        {
                            passCheck ? <p className='text-[10px] text-red-600 font-bold'>Must have an Uppercase letter in the password.
                            </p> : ''
                        }
                        {
                            passCheck2 && <p className='text-[10px] text-red-600 font-bold'>Must have a Lowercase letter in the password.
                            </p>
                        }
                        {
                            passCheck3 && <p className='text-[10px] text-red-600 font-bold'>Length must be at least 6 characters.
                            </p>
                        }



                        <button type='submit' className='btn w-full bg-yellow-400 border-none text-white' >Register</button>

                        <span className='text-xs flex gap-1 mt-1'>Don't have an account? <Link to={'/login'}><p className='text-blue-600'>Login</p></Link></span>

                    </fieldset>
                </form>
                <div className='my-2'>
                    <h2 className='text-center text-xl '>Or,</h2>
                </div>
                <div className=''>
                    <button onClick={logInWithGoogle} className="btn bg-white w-full text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;