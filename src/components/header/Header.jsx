"use client"
import React, { useState, useEffect } from "react";
import HeaderWeb from "./HeaderWeb/HeaderWeb"
import HeaderTablet from "./HeaderTablet/HeaderTablet"
import HeaderMovil from "./HeaderMovil/HeaderMovil"
const Header = () => {
    const [width, setWidth] = useState(null);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    let component;
    
     
    const renderHeader = () =>{
        if (width > 1100) {
            component = <HeaderWeb />;
        } else if (width > 600) {
            component = <HeaderTablet />;
        } else {
            component = <HeaderMovil />;
        }
    }
    width>1?renderHeader():null;
    return <>{component}</> ;
}
export default Header;