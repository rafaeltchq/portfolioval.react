import React from 'react';
import { Link } from "wouter";
const SliderItems = (props) => {
    return (
        <div className="swiper-slide">
            <Link to={`/${props.name}`} target="_blank" rel="noopener noreferrer">
                <img className={`swiper-slide-${props.id}`} alt={`Portada-${props.id}`} />
                <p>{props.title}</p>
            </Link>
        </div>
    );
};

export default SliderItems;