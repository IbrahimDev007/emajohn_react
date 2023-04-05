import React from 'react';
import { Outlet } from 'react-router-dom';
import Heder from '../Header/Heder';

const Home = () => {
    return (
        <div>
            <Heder/>
            <Outlet/>
        </div>
    );
};

export default Home;