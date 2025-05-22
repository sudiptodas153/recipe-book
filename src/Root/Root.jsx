import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {

    const [themes, setThemes] = useState(false)

    return (
        <div className='' data-theme={`${themes? 'dark' : ''}`}>
            <Navbar setThemes={setThemes} themes={themes}></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;