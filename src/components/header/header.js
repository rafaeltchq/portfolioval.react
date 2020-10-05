import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import NavMenu from "./mobileSideBar/sideBarMenu";
import NavBar from "./navbar/navbar";
import Carousel from "./slider/slider";
import useScrollPosition from "../scrollposition";
import "./header.scss";

export default function Header(props) {
  const [ carouselOpen, setCarouselOpen ] = useState(false);
  const [mobileMenuOpen, NewMenuState] = useState(false);
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
  // console.log(props.isHome);
  useEffect(() => {
    window.addEventListener('scroll', closeWhenScroll, { passive: true })
    document.addEventListener("keydown", keyHandler);
    return () => {
    window.removeEventListener('scroll', closeWhenScroll)
    document.removeEventListener("keydown", keyHandler);
  }
  },[carouselOpen])
  const BgHeader = useSpring({ 
    background: (scrollPosition <= 0) && !carouselOpen && props.isHome ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.6)",
    config: { duration: 100 }
  })
  return (
    <animated.header
    style={BgHeader}>
      <NavBar
        trigger={() => NewMenuState(!mobileMenuOpen)}
        trigged={mobileMenuOpen}
        workOpener={() => window.innerWidth > 480 ? setCarouselOpen(!carouselOpen) : false}
        workCloser={() => setCarouselOpen(false)}
      />
      <NavMenu active={mobileMenuOpen} />
      <Carousel 
        carouselOpen={carouselOpen}
      />
    </animated.header>
  );
}
