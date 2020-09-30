import React, { useState, useEffect} from "react";
import NavMenu from "./mobileSideBar/sideBarMenu";
import NavBar from "./navbar/navbar";
import "./header.scss";
import Carousel from "./slider/slider";
import { useSpring, animated } from 'react-spring';

export default function Header() {
  const [ carouselOpen, setCarouselOpen ] = useState(false);
  const [mobileMenuOpen, NewMenuState] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setSrollPosition(position)
  }
  const closeWhenScroll = () => {
    setTimeout(() => {
      setCarouselOpen(false)
    }, 700);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('scroll', closeWhenScroll, { passive: true })
    return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('scroll', closeWhenScroll)
    }
  }, [])

  
  // useEffect(() => {
  // console.log(carouselOpen);  
  // })
  
  
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setCarouselOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  
  const BgHeader = useSpring({ 
    background: (scrollPosition <= 0) && !carouselOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.6)",
    config: { duration: 100 }
  })
  return (
    <animated.header className={ scrollPosition > 0 ? "scrolled" : ""} style={BgHeader}>
      <NavBar
        trigger={() => NewMenuState(!mobileMenuOpen)}
        trigged={mobileMenuOpen}
        workOpen={() => window.innerWidth > 480 ? setCarouselOpen(!carouselOpen) : false}
        workClose={() => setCarouselOpen(false)}
      />
      <NavMenu active={mobileMenuOpen} />
      <Carousel 
        workOpen={carouselOpen}
      />
    </animated.header>
  );
}
