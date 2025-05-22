import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='my-10 md:my-30 text-center space-y-3'>
            <title>Error Page</title>
            <h2 className='text-7xl text-yellow-300 font-extrabold '>404</h2>
            <p className='text-5xl font-bold'>Page not found</p>
            <Link to={'/'}><button className='btn bg-amber-500 text-white'>Back to home</button></Link>
        </div>
    );
};

export default ErrorPage;