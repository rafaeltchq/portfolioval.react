import React, { useState, useEffect} from "react";
import NavMenu from "./navmenu";
import NavBar from "./navbar";
import "./header.scss";
import Carousel from "../slider/slider";
import { useSpring, animated } from "react-spring";

export default function Header() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [ carouselOpen, setCarouselOpen ] = useState(false);
  const [mobileMenuOpen, NewMenuState] = useState(false);
  useEffect(() => {
  console.log(scrollPosition);  
  })
  const TopShadow = useSpring({
    backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 50%)",
    backgroundSize: "200% 200%",
    backgroundPosition: !carouselOpen ? "0% 0%" : "100% 100%"
  })
  
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setCarouselOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <animated.header className={ scrollPosition > 0 ? "scrolled" : ""} style={TopShadow}>
      <NavBar
        trigger={() => NewMenuState(!mobileMenuOpen)}
        trigged={mobileMenuOpen}
        workOpen={() => window.innerWidth > 480 ? setCarouselOpen(!carouselOpen) : false}
      />
      <NavMenu active={mobileMenuOpen} />
      <Carousel 
        workOpen={carouselOpen}
      />
    </animated.header>
  );
}
