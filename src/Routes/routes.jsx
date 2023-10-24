import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ShopCategory from "../Pages/ShopCategory/ShopCategory";
import Product from "../Pages/Product/Product";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import SigUp from "../Pages/Signup/SigUp";
import Shop from "../Pages/Home/Shop.jsx/Shop";
import banner_m from '../assets/banner/banner_mens.png'
import banner_w from '../assets/banner/banner_women.png'
import banner_k from '../assets/banner/banner_kids.png'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element: <Shop></Shop>
        },
        {
          path:'men',
          element: <ShopCategory banner={banner_m} category="men"></ShopCategory>
        },
        {
          path:'women',
          element: <ShopCategory banner={banner_w} category="women"></ShopCategory>
        },
        {
          path:'kid',
          element: <ShopCategory banner={banner_k} category="kid"></ShopCategory>
        },
        {
          path:'/product/:id',
          element: <Product></Product>
        },
        {
          path:'cart',
          element: <Cart></Cart>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element: <SigUp></SigUp>
        },

      ]
    },
  ]);
  export default router;