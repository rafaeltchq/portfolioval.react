import React from 'react';
import { Link } from "wouter";
import MenuItems from "./menu-items";
import ToggleBtn from "../mobileSideBar/toggleButton";
import useScrollPosition from "../../scrollposition";

const NavBar = (props) => {
  const scrollPosition = useScrollPosition(0)
  // useEffect(() => {
  //   console.log(scroll)
  // })
  
    return (
        <nav
        className={scrollPosition > 20 ? "nav dropdown scrolled" : "nav dropdown"}
        role="navigation">
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