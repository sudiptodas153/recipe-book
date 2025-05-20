import React from 'react';

const ErrorPage = () => {
    return (
        <div className='my-10 text-center space-y-3'>
            <h2 className='text-7xl text-yellow-300 font-extrabold '>404</h2>
            <p className='text-5xl font-bold'>Page not found</p>
            <button className='btn'>Back to home</button>
        </div>
    );
};

export default ErrorPage;