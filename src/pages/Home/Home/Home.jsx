import BannerSlider from "../BannerSlider/BannerSlider";
import Gallary from "../Gallary/Gallary";
import MyTabs from "../Tabs/MyTabs";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for "aos"
import { AuthContext } from "../../../ContextProvider/AuthContextProvider";
import Spinner from "../../../shared/Spinner/Spinner";
import TopRated from "../TopRated/TopRated";
import NewArrival from "../NewArrival/NewArrival";


const Home = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds (default: 1000)
      delay: 300, // Delay between animations in milliseconds (default: 0)
    }); // Initialize "aos"
  }, []);

 
  return (
    <div>
      <div data-aos="zoom-in">
        <BannerSlider></BannerSlider>
      </div>
      <div data-aos="zoom-in">
        <Gallary></Gallary>
      </div>
      <div data-aos="zoom-in">
        <MyTabs></MyTabs>
      </div>

      <div data-aos="zoom-in">
        <TopRated></TopRated>
      </div>

      <div data-aos="zoom-in">
        <NewArrival></NewArrival>
      </div>

      
    </div>
  );
};

export default Home;
