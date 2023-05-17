import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/PublicRouter/PublicRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='lg:px-20 px-2 theme-color'>
    <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  </div>,
)
