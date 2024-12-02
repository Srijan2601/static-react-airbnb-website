import React from "react";
import heroImage from "../assets/airbnb_image_collage.png"
import "./Hero.css"

export default function Hero() {
    return (
        <div className="heroDiv">
            <img className = "heroImage" src={heroImage}/>
            <h1>Online Experiences</h1>
            <p className="heroText">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home</p>
        </div>
    )
}

