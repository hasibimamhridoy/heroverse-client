import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Home from '../../pages/Home/Home/Home';
import AllToys from '../../pages/AllToys/AllToys';
import MyToys from '../../pages/MyToys/MyToys';
import AddAToy from '../../pages/AddAToy/AddAToy';
import Blogs from '../../pages/Blogs/Blogs';
import Login from '../../pages/LoginRegister/Login/Login';
import Register from '../../pages/LoginRegister/Register/Register';

const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allToys',
                element:<AllToys></AllToys>
            },
            {
                path:'/myToys',
                element:<MyToys></MyToys>
            },
            {
                path:'/addAToy',
                element:<AddAToy></AddAToy>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])

export default router;