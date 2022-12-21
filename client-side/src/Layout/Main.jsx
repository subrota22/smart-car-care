import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Share/Footer/Footer';
import TopNavbar from '../components/Share/TopNavbar/TopNavbar';

const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;