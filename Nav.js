import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",() =>{});
        };
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img src={process.env.PUBLIC_URL+"/images/logo.png"} alt="Netflix Logo" className="nav_logo" />
        <img src={process.env.PUBLIC_URL+"/images/avatar.jpg"} alt="Netflix Avatar" className="nav_avatar" />
    </div>
  )
}

export default Nav