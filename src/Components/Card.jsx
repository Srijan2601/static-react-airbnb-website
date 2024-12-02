import React from "react";
import star from "../assets/Star.png"
import "./Card.css"

export default function Card(props) {
    return(
        <div className="cardDiv">
            <div className="card">
                <img className="cardImage" src={props.coverImg}/>
                <img className="star" src={star}/>
                <span>{props.rating}</span>
                <span>({props.reviewCount})</span>
                <span> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span>From £{props.price}/person</span></p>
        </div>
    )
}