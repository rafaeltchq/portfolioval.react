import React, { useEffect, useContext } from 'react';
import { useLocation } from "wouter";
import { NavbarContext } from "../navbarContext";
import { HashLink as Link } from 'react-router-hash-link';
import "../header.scss";

const MenuItemsD = ({ workOpener, workCloser, className }) => {
  const { classSelectorNavbar } = useContext(NavbarContext);
  const [ itemSel, setNewItem ] = classSelectorNavbar;
  const [ location, ] = useLocation();
  useEffect(() => {
    if (location !== "/") {
      setNewItem(1)
    }
  },[location, setNewItem]);
  // console.log(location);
  const classSelector = i => itemSel === i ? "nav__item land" : "nav__item";
  const workButtonClickHandler = () => {
    setNewItem(1);
      workOpener();
    }
  const MenuItemsDesktop = () => {
    const ListItems = ({ i, nameItem, linkItem }) => {
      return (
        <li className={classSelector(i)}
          onClick={() => {setNewItem(i); workCloser()}}
            >
            <Link 
            to={`${linkItem}`}
            className="nav__link">{nameItem}</Link>
          </li>
      )
    }
  return (
      <ul
      className={className}>
        <ListItems
          key={0}
          i={0}
          nameItem={"HOME"}
          linkItem={"/"}
        />
        <li
          className={classSelector(1)}
          aria-expanded="false"
          aria-controls="menu">
          <button
          className="nav__link"
          onClick={workButtonClickHandler}
          >WORK</button>
        </li>
        <ListItems
          key={2}
          i={2}
          nameItem={"CONTACT"}
          linkItem={"#contact"}
        />
        <ListItems
          key={3}
          i={3}
          nameItem={"ABOUT"}
          linkItem={"/#bio"}
        />
      </ul>
    )
  }
      return (
       <MenuItemsDesktop 
        />
    );   
};

export default MenuItemsD;