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
import ProductsDetails from '../../pages/ProductsDetails/ProductsDetails';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import UpdateProduct from '../../pages/MyToys/UpdateProduct/UpdateProduct';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<PrivateRouter><MyToys></MyToys></PrivateRouter>
            },
            {
                path:'/addAToy',
                element:<PrivateRouter><AddAToy></AddAToy></PrivateRouter>
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
            {
                path:'/productsDetails/:id',
                element:<PrivateRouter><ProductsDetails></ProductsDetails></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/productsDetails/${params.id}`)
            },
            {
                path:'/updatedProduct/:id',
                element:<PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/productsDetails/${params.id}`)
            },
        ]
    }
])

export default router;