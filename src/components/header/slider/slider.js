import React from 'react';
import SliderItems from "./slider-items";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSpring, animated } from 'react-spring';
import 'swiper/swiper.scss';
import data from "../../projects/projects-data";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "./dropdown.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = (props) => {
    const Items = data;
    const Falling = useSpring({ height: props.carouselOpen ? "212px" : "0px"});
    return (
        <animated.div className="dropdown_menu" style={Falling}>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                pagination={{
                    clickable: false,
                    type: "bullets",
                    dynamicBullets: true
                    }}
                    breakpoints={{
                        480: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        960: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                    }}
            >
                {Items.map(( data ) => {
                    return (
                    <SwiperSlide key={data.id}>
                        <SliderItems 
                            name={data.name}
                            id={data.id}
                            title={data.title}>
                        </SliderItems>
                    </SwiperSlide>
                    )
                })}
            </Swiper>
       </animated.div>
    );
};

export default Carousel;