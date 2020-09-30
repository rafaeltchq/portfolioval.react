import React, { useState, useEffect } from 'react';
import "../header.scss";
import { Link } from "wouter";

const MenuItems = (props) => {
  const [ itemSel, setNewItem ] = useState(0)
  // const closeCarousel = (i) => {
  // // console.log(itemSel)
  //     setNewItem(i)
  //     return props.workClose
  //   }
  // }
  // useEffect(() => {
  //   if (itemSel !== 1) {
    // return props.workClose
    // console.log(itemSel);
  // })
    
 

    return (
       <ul className={props.className}>
        <li className={itemSel === 0 ? "nav__item land" : "nav__item"}
          onClick={() => setNewItem(0), props.workClose}>
          <Link to="#"
          className="nav__link">HOME</Link>
        </li>
        <li
          className={itemSel === 1 ? "nav__item land" : "nav__item"}
          onClick={() => setNewItem(1)}
          aria-expanded="false"
          aria-controls="menu"><Link to="/"
          className="nav__link"
          onClick={props.workOpen}
          >WORK</Link>
        </li>
        <li
        className={itemSel === 2 ? "nav__item land" : "nav__item"}
          onClick={() => setNewItem(2), props.workClose}>
          <Link to="#contact" className="nav__link">CONTACT</Link>
        </li>
        <li
        className={itemSel === 3 ? "nav__item land" : "nav__item"}
          onClick={() => setNewItem(3), props.workClose}>
          <Link to="#about" className="nav__link">ABOUT</Link>
        </li>
      </ul>     
    );   
};

export default MenuItems;