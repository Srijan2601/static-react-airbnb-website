import React from "react";
import airbnbLogo from "../assets/airbnb_logo.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbarDiv"> 
            <img className="navbarImg" src = {airbnbLogo} />
        </div>
    )
}