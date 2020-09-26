import React from 'react';
import "./header.scss";
import { Link } from "wouter";

const MenuItems = (props) => {
    return (
       <ul className={props.className}>
        <li className="nav__item land">
          <Link to="#" className="nav__link">HOME</Link>
        </li>
        <li
          className="nav__item dropdown-6"
          aria-expanded="false"
          aria-controls="menu">WORK
          <div className="triangle-up"></div>
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