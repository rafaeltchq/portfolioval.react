import React from 'react';
import { Link } from "wouter";
import MenuItems from "./menu-items";
import ToggleBtn from "../mobileSideBar/toggleButton";

const NavBar = (props) => {
    return (
        <nav className="nav dropdown" role="navigation">
        <Link to="/"><img id="logo" alt="Logo" /></Link>
        <MenuItems className={"nav__menu"}
        workOpen={props.workOpen}
        workClose={props.workClose} />
        <ToggleBtn trigger={props.trigger}
          trigged={props.trigged}
        />
      </nav>
    );
};

export default NavBar;