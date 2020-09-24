import React, { useState } from "react";
import { Link } from "wouter";
import NavMenu from "./navmenu";
import ToggleBtn from "./toggleButton";
import "./header.scss";
import MenuItems from "./menu-items";
// import { Transition } from "react-spring/renderprops";

export default function Header() {
  const MenuItemsDsktop = () => {
    if (window.innerWidth > 480) {
      return <MenuItems />
    } else {
      return <></>
    }
  }

  const [open, NewSte] = useState(false);
  const Toggle = () => NewSte(!open);

  const NavBar = () => {
    return (
      <nav className="nav dropdown" role="navigation">
        <Link to="/"><a><img id="logo" alt="Logo" /></a></Link>
        <MenuItemsDsktop />
        <ToggleBtn trigger={Toggle}
          trigged={open}
        />
      </nav>
    );
  };
  return (
    <header className="scrolled">
      <NavBar />
      <NavMenu active={open} />
    </header>
  );
}
