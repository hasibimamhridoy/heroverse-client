import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/PublicRouter/PublicRouter.jsx'
import AuthContextProvider from './ContextProvider/AuthContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='lg:px-20 px-2 theme-color'>
    <React.StrictMode>
    <AuthContextProvider><RouterProvider router={router}></RouterProvider></AuthContextProvider>
  </React.StrictMode>
  </div>,
)
