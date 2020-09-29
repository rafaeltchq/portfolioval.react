import React from 'react';
import "./header.scss";
import { Link } from "wouter";

const MenuItems = (props) => {
  
    
    return (
       <ul className={props.className}>
        <li className="nav__item">
          <Link to="#" className="nav__link">HOME</Link>
        </li>
        <li
          className="nav__item"
          aria-expanded="false"
          aria-controls="menu"><Link to="/" onClick={props.workOpen} className="nav__link">WORK</Link>
        </li>
        <li className="nav__item">
          <Link to="#contact" className="nav__link">CONTACT</Link>
        </li>
        <li className="nav__item">
          <Link to="#about" className="nav__link">ABOUT</Link>
        </li>
      </ul>     
    );   
};

export default MenuItems;