import React, { useContext } from "react";
import MenuItemsM from "./menu-items-mobile";
import { useTransition, animated } from "react-spring";
import "../header.scss";
import { NavbarContext } from "../../header/navbarContext";

const NavMenu = () => {
  const { sideBarMenu } = useContext(NavbarContext);
  const [ mobileMenuOpen, ] = sideBarMenu;
  const efecto = useTransition(mobileMenuOpen, null, {
    from: {
      transform: "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
        "transformOrigin": "100% 50%",
        filter: "blur(40px)",
        opacity: 0
    },
      enter: {
        transform: "translateX(0) scaleX(1) scaleY(1)",
        "transformOrigin": "50% 50%",
        filter: "blur(0)",
        opacity: 1
      },
      leave: {
        transform: "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
        "transformOrigin": "100% 50%",
        filter: "blur(40px)",
        opacity: 0
        }
  })

  return ( efecto.map(
    ({ item, key, props }) =>
      item && (
      <animated.div
        style={props}
        key={key}
        className="sidebar" 
        id="menu"
        tabindex="-1"
        aria-label="main navigation"
      >
      <MenuItemsM
        className={"nav__menu__sidebar"}
      />
      </animated.div>
    )
  )
  )
};

export default NavMenu;
