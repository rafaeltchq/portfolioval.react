import React from 'react';
import Hamburger from "react-hamburgers";
import { Spring } from "react-spring/renderprops";
// import useMeasure from "./useMeasure";
import "../scss/hamburgers/hamburgers.scss";
import "./sidebar.scss";


export default function SideBar(props) {
  
  // console.log(props.active);
  // const SplashDiv = () => {return <div className="splash"></div>}
  return (
    <div className="nav__toggle">
        <Hamburger 
          active={props.active}
          type="slider"
          onClick={props.trigger}
        />
      
      <Spring >
          <div style={ transform: `scale(${props.active ? 1 : 0}`} className="splash"></div>
      </Spring>
    </div>
  )
}