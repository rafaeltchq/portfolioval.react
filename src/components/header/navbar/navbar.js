import React from 'react';
import { Link } from "wouter";
import MenuItems from "./menu-items";
import ToggleBtn from "../mobileSideBar/toggleButton";

const NavBar = (props) => {
    return (
        <nav className="nav dropdown" role="navigation">
        <Link to="/"><img id="logo" alt="Logo" /></Link>
        <MenuItems className={"nav__menu"}
        workOpener={props.workOpener}
        workCloser={props.workCloser} />
        <ToggleBtn trigger={props.trigger}
          trigged={props.trigged}
        />
      </nav>
    );
};

export default NavBar;