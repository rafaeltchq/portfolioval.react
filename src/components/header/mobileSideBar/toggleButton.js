import React from 'react';
// import { useSpring, animated } from "react-spring";
import "./toggleButton.scss";
import { ReactComponent as Burger } from "./burger.svg";

export default function ToggleBtn(props) {
  return (
    <button onClick={props.trigger} className="nav__toggle">
    <Burger className={!props.trigged ? "menuicon" : "menuicon trigged"} />
    </button>
  )
}