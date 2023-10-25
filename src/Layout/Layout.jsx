import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Layout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isSignUpPage = location.pathname === '/signup';

    // Show Navbar and NewsLetter on all pages except login and signup
    if (!isLoginPage && !isSignUpPage) {
        return (
            <div>
                <Navbar />
                <div className="min-h-[calc(100vh-611px)]">
                    <Outlet />
                </div>
                <NewsLetter />
            </div>
        );
    }

    // Show only the content on login and signup pages
    return (
        <div>
            <div className="min-h-[calc(100vh-0px)]">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
