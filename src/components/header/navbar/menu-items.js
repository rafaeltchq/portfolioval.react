import React, { useState, useEffect } from 'react';
import "../header.scss";
import { Link } from "wouter";

const MenuItems = ({ workOpener, workCloser, sideBarCloser, className, ...props }) => {
  const [ itemSel, setNewItem ] = useState(0)
  const classSelector = i => itemSel === i ? "nav__item land" : "nav__item"
  
  const clickCloser = i => {
    // if ( window.innerWidth > 480 ) {
      setNewItem(i);
      workCloser();
      console.log("clicked1");
    // }
    // else {
      
      // console.log("clicked2");
      // () => sideBarCloser()
    // }
  }
  // useEffect(() => {
  //   document.addEventListener("mousedown", clickCloser)
  //   return () => 
  //   document.removeEventListener("mousedown", clickCloser)
  // },[])
    return (
       <ul
       className={className}
       >
        <li className={classSelector(0)}
          onClick={clickCloser(0)}>
          <Link to="/"
          className="nav__link">HOME</Link>
        </li>
        <li
          className={classSelector(1)}
          onClick={() => setNewItem(1)}
          aria-expanded="false"
          aria-controls="menu">
          <button
          className="nav__link"
          onClick={workOpener}
          >WORK</button>
        </li>
        <li
        className={classSelector(2)}
          onClick={clickCloser(2)}>
          <Link to="/#contact" className="nav__link">CONTACT</Link>
        </li>
        <li
        className={classSelector(3)}
          onClick={clickCloser(3)}>
          <Link to="/#bio" className="nav__link">ABOUT</Link>
        </li>
      </ul>     
    );   
};

export default MenuItems;