import React from 'react';
import SliderItems from "./slider-items";
import Datos from "../../img/proyectos";

const Slider = () => {
    // const PrjItems = Object.key(Data.projectsId)
    // const ItemAmnt = Datos.projectsId
    return (
        <div className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    {Datos.map((data, key) => {
                    return (
                        <SliderItems
                            key={key}
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