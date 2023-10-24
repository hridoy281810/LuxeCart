import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes.jsx'
import ShopContextProvider from './Provider/ShopProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ShopContextProvider>
   <RouterProvider router={router} />
   </ShopContextProvider>
  </React.StrictMode>,
)
