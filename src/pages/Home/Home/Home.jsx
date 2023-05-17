import React from 'react';
import BannerSlider from '../BannerSlider/BannerSlider';
import MobileDrawer from '../../../shared/MobileDrawer/MobileDrawer';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <MobileDrawer></MobileDrawer>
        </div>
    );
};

export default Home;