import React from 'react';
import "./dropdown.scss"
import { Link } from "wouter";
const SliderItems = (props) => {
    return (
        <>
            <Link to={`/${props.name}`} target="_blank" rel="noopener noreferrer">
                <img className={`swiper-slide-${props.id}`} alt={`Portada-${props.id}`} />
                <p>{props.title}</p>
            </Link>
        </>
        )
};

export default SliderItems;