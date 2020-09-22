import React from 'react';
import Hamburger from "react-hamburgers";
import { useSpring, animated } from "react-spring";
// import useMeasure from "./useMeasure";
import "../scss/hamburgers/hamburgers.scss";
import "./sidebar.scss";


export default function SideBar(props) {
  const { x } = useSpring({
    x: props.active ? 0 : 70
  })
  // console.log(props.active);
  // const SplashDiv = () => {return <div className="splash"></div>}
  return (
    <div className="nav__toggle">
        <Hamburger 
          active={props.active}
          type="slider"
          onClick={props.trigger}
        />
        <animated.div className="splash"
        style={{ transform: x.interpolate(x => `translate(${ x * -1 }%, 0%)`)}} > 
        </animated.div>
          
    </div>
  )
}