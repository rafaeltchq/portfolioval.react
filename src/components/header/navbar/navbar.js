import React from 'react';
import { Link } from "wouter";
import MenuItemsD from "./menu-items-desktop";
import ToggleBtn from "../mobileSideBar/toggleButton";
import useScrollPosition from "../../hooks/scrollposition";

const NavBar = ({ workOpener1, workCloser1 }) => {
  const scrollPosition = useScrollPosition();
    return (
        <nav
        className={scrollPosition > 10 ? "nav dropdown scrolled" : "nav dropdown"}
        role="navigation">
        <Link to="/"><img id="logo" alt="Logo" /></Link>
        <MenuItemsD
        className={"nav__menu"}
        workOpener={workOpener1}
        workCloser={workCloser1}
        />
        <ToggleBtn
        />
      </nav>
    );
};

export default NavBar;