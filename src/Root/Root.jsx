import React, { use} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Context/AuthContext';

const Root = () => {

    const {themes} = use(AuthContext)

    

    return (
        <div className='' data-theme={`${themes? 'dark' : ''}`}>
            <div className=' sticky top-0 z-50'>
            <Navbar></Navbar>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;