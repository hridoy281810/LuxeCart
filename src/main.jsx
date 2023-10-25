import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes.jsx'
import ShopContextProvider from './Provider/ShopProvider'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <ShopContextProvider>
   <RouterProvider router={router} />
   </ShopContextProvider>
   </AuthProvider>
  </React.StrictMode>,
)
