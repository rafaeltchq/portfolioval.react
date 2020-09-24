import React from "react";
import MenuItems from "./menu-items";
import { useTransition, animated, config } from "react-spring";
import "./header.scss";
// import { Transition } from "react-spring/renderprops";

const NavMenu = (props) => {
  const SideBarMobile = () => {
    if (window.innerWidth <= 480) {
      return <MenuItems />
    }
  }
  const efecto = useTransition(props.active, null, {
    from: {
      transform: "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
        "transform-origin": "100% 50%",
        filter: "blur(40px)",
        opacity: 0
    },
      enter: {
        transform: "translateX(0) scaleX(1) scaleY(1)",
        "transform-origin": "50% 50%",
        filter: "blur(0)",
        opacity: 1
      },
      leave: {
        transform: "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
        "transform-origin": "100% 50%",
        filter: "blur(40px)",
        opacity: 0
        },
      config: config.default
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
      <SideBarMobile />
      </animated.div>
    )
  )
  )
};

export default NavMenu;
