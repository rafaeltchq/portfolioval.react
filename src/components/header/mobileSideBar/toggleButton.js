import React, { useContext } from 'react';
import { NavbarContext } from "../../header/navbarContext";
// import { useSpring, animated } from "react-spring";
import "./toggleButton.scss";
import { ReactComponent as Burger } from "./burger.svg";

export default function ToggleBtn() {
  const { sideBarMenu } = useContext(NavbarContext);
  const [ mobileMenuOpen, newMenuState ] = sideBarMenu;
  return (
    <button onClick={() => newMenuState(!mobileMenuOpen)} className="nav__toggle">
    <Burger className={!mobileMenuOpen ? "menuicon" : "menuicon trigged"} />
    </button>
  )
}