import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ShopCategory from "../Pages/ShopCategory/ShopCategory";
import Product from "../Pages/Product/Product";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import SigUp from "../Pages/Signup/SigUp";
import Shop from "../Pages/Home/Shop.jsx/Shop";

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
          element: <ShopCategory category="men"></ShopCategory>
        },
        {
          path:'women',
          element: <ShopCategory category="women"></ShopCategory>
        },
        {
          path:'kid',
          element: <ShopCategory category="kid"></ShopCategory>
        },
        {
          path:'product:id',
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