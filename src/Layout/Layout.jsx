import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NewsLetter from "../components/NewsLetter/NewsLetter";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
      <Outlet></Outlet>
      <NewsLetter></NewsLetter>
        </div>
    );
};

export default Layout;