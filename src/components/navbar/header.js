import React, { useState } from "react";
import { Link } from "wouter";
import NavMenu from "./navmenu";
import ToggleBtn from "./toggleButton";
import "./header.scss";
import MenuItems from "./menu-items";
// import Slider from "../slider/slider";

export default function Header() {

  const [open, NewSte] = useState(false);
  const Toggle = () => NewSte(!open);

  const NavBar = () => {
    return (
      <nav className="nav dropdown" role="navigation">
        <Link to="/"><img id="logo" alt="Logo" /></Link>
        <MenuItems className={"nav__menu"} />
        <ToggleBtn trigger={Toggle}
          trigged={open}
        />
        {/* <Slider /> */}
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
