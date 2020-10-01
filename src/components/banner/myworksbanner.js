import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import "./myworks.scss";
const WorksBanner = () => {
    const ref = useRef(null)
    const [ isHere, setIsHere ] = useState(false)
    const [scrollPosition, setSrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset + window.innerHeight
        setSrollPosition(position)
    }
    const leftRoll = () => {
        if (scrollPosition >= ref.current.offsetTop) {
            setIsHere(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('scroll', leftRoll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('scroll', leftRoll)
        }
    })
    const inFromLeft = useSpring({
        left: isHere ? "5%" : "200%",
        opacity: isHere ? 1 : 0,
        config: config.stiff
    })
    return (
        <div className="banner-1" id="my-work" ref={ref}>
            <animated.img className="banner-1-works" alt="My works" style={inFromLeft}/>
        </div>
    );
};

export default WorksBanner;