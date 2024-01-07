import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;