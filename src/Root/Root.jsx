import React, { use} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Context/AuthContext';

const Root = () => {

    const {themes} = use(AuthContext)

    

    return (
        <div className='' data-theme={`${themes? 'dark' : ''}`}>
            <Navbar></Navbar>
            <div className='mb-80'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;