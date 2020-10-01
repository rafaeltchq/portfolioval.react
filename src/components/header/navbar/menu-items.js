import React, { useState } from 'react';
import "../header.scss";
import { Link } from "wouter";

const MenuItems = ({ workOpener, workCloser, ...props }) => {
  const [ itemSel, setNewItem ] = useState(0)
  
    return (
       <ul className={props.className}>
        <li className={itemSel === 0 ? "nav__item land" : "nav__item"}
          onClick={() => {setNewItem(0); workCloser()}}>
          <Link to="#"
          className="nav__link">HOME</Link>
        </li>
        <li
          className={itemSel === 1 ? "nav__item land" : "nav__item"}
          onClick={() => setNewItem(1)}
          aria-expanded="false"
          aria-controls="menu"><Link to="/"
          className="nav__link"
          onClick={workOpener}
          >WORK</Link>
        </li>
        <li
        className={itemSel === 2 ? "nav__item land" : "nav__item"}
          onClick={() => {setNewItem(2); workCloser()}}>
          <Link to="#contact" className="nav__link">CONTACT</Link>
        </li>
        <li
        className={itemSel === 3 ? "nav__item land" : "nav__item"}
          onClick={() => {setNewItem(3); workCloser()}}>
          <Link to="#about" className="nav__link">ABOUT</Link>
        </li>
      </ul>     
    );   
};

export default MenuItems;