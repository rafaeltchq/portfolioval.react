import React from 'react';
import { Link } from "react-router-dom";
import MenuItemsD from "./menu-items-desktop";
import ToggleBtn from "../mobileSideBar/toggleButton";
import useScrollPosition from "../../hooks/scrollposition";

const NavBar = ({ workOpener1, workCloser1 }) => {
  const scrollPosition = useScrollPosition();
  const mql = window.matchMedia('(min-width: 480.03px)');
  const MenuItems = () => {
    let mobileView = mql.matches;
    if (mobileView) {
      return (
        <MenuItemsD
        className={"nav__menu"}
        workOpener={workOpener1}
        workCloser={workCloser1}
        />
      )
    } else return null
  }
    return (
        <nav
        className={scrollPosition > 10 ? "nav dropdown scrolled" : "nav dropdown"}
        role="navigation">
        <Link to="/"><img id="logo" alt="Logo" /></Link>
        <MenuItems />
        <ToggleBtn
        />
      </nav>
    );
};

export default NavBar;