import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import FooterBar from '../../shared/FooterBar/FooterBar';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';


const MainLayout = () => {

    const loc = useLocation()

    console.log(loc);

    // useEffect(()=>{


    //     if (loc.state) {
    //           document.title = `HeroVerse - ${loc.state}`
    //     }

    //     else if (loc.pathname === '/') {

    //          document.title = "HeroVerse - Home"
    //     }

    //     else{
    //          document.title = `HeroVerse ${loc.pathname.toUpperCase()}`.replace('/','-')
    //     }

    // },[loc.pathname])
    useEffect(()=>{


        if (loc.state) {
              document.title = `HeroVerse - ${loc.state}`
        }
        if (loc.state?.pathname === '/login') {
              document.title = `HeroVerse - "LOGIN`
        }

        else if (loc.pathname === '/') {

             document.title = "HeroVerse - Home"
        }

        else{
             document.title = `HeroVerse ${loc.pathname.toUpperCase()}`.replace('/','-')
        }

    },[loc.pathname])


   

    return (
        <div>
            <ScrollRestoration></ScrollRestoration>
            <div>
                <NavigationBar></NavigationBar>
            </div>
            <div className='mt-2 lg:mb-20 mb-10'>
                <Outlet></Outlet>
            </div>
            <div>
                <FooterBar></FooterBar>
            </div>
        </div>
    );
};

export default MainLayout;