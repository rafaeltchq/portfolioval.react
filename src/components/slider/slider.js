import React from 'react';
import SliderItems from "./slider-items";
import { Swiper, SwiperSlide } from 'swiper/react';
// import "../../scss/swiper-bundle.css";
import "./dropdown.scss";
import Datos from "../../img/projects.json";

const Slider = () => {
    const Items = Datos.projectsId
    return (
        <div className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    {Items.map((data, key) => {
                    return (
                        <SliderItems
                            key={data.id}
                            name={data.name}
                            id={data.id}
                            title={data.Title}
                        />)
                    })}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
};

export default Slider;