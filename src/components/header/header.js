import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from 'react-spring';
import NavMenu from "./mobileSideBar/sideBarMenu";
import NavBar from "./navbar/navbar";
import Carousel from "./slider/slider";
import useScrollPosition from "../hooks/scrollposition";
import "./header.scss";

export default function Header(props) {
  const [ carouselOpen, setCarouselOpen ] = useState(false);
  const [mobileMenuOpen, newMenuState] = useState(false);
  const scrollPosition = useScrollPosition(0);
  const closeWhenScroll = () => {
    setTimeout(() => {
      setCarouselOpen(false)
    }, 700);
  }
  const keyHandler = ({ keyCode }) => {
    if (keyCode !== 27) return;
    setCarouselOpen(false);
  };
  const node = useRef()
  const handleClick = (e) => {
    if (!node.current.contains(e.target)) {
       setCarouselOpen(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', closeWhenScroll, { passive: true })
    document.addEventListener("keydown", keyHandler);
    window.addEventListener("mousedown", handleClick);
    return () => {
    window.removeEventListener('scroll', closeWhenScroll)
    document.removeEventListener("keydown", keyHandler);
    window.removeEventListener("mousedown", handleClick);
  }
  },[carouselOpen])
  const BgHeader = useSpring({ 
    background: (scrollPosition <= 0) && !carouselOpen && props.isHome ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.6)",
    config: { duration: 100 }
  })
  return (
    <animated.header
    ref={node}
    style={BgHeader}>
      <NavBar
        trigger={() => newMenuState(!mobileMenuOpen)}
        trigged={mobileMenuOpen}
        workOpener={() => window.innerWidth > 480 ? setCarouselOpen(!carouselOpen) : false}
        workCloser={() => setCarouselOpen(false)}
      />
      <NavMenu
      active={mobileMenuOpen}
      sideBarCloser={() => newMenuState(false)}
      />
      <Carousel 
        carouselOpen={carouselOpen}
      />
    </animated.header>
  );
}
