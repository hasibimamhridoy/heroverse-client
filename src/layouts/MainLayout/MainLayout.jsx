import React from 'react';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import FooterBar from '../../shared/FooterBar/FooterBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div>
                <NavigationBar></NavigationBar>
            </div>
            <div className='mt-2'>
                <Outlet></Outlet>
            </div>
            <div>
                <FooterBar></FooterBar>
            </div>
        </div>
    );
};

export default MainLayout;