import React from 'react';
import { Link } from "wouter";
import MenuItems from "./menu-items";
import ToggleBtn from "../mobileSideBar/toggleButton";
import useScrollPosition from "../../hooks/scrollposition";

const NavBar = ({ workOpener, workCloser, trigger, trigged, ...props }) => {
  const scrollPosition = useScrollPosition();
    return (
        <nav
        className={scrollPosition > 10 ? "nav dropdown scrolled" : "nav dropdown"}
        role="navigation">
        <Link to="/"><img id="logo" alt="Logo" /></Link>
        <MenuItems className={"nav__menu"}
        workOpener={workOpener}
        workCloser={workCloser} />
        <ToggleBtn trigger={trigger}
          trigged={trigged}
        />
      </nav>
    );
};

export default NavBar;