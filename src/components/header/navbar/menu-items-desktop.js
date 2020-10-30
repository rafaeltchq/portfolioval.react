import React, { useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { NavbarContext } from "../navbarContext";
import { HashLink as Link } from 'react-router-hash-link';
import "../header.scss";

const MenuItemsD = ({ workOpener, workCloser, className }) => {
  const { classSelectorNavbar } = useContext(NavbarContext);
  const [ itemSel, setNewItem ] = classSelectorNavbar;
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setNewItem(1)
    }
  },[location.pathname, setNewItem]);
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
          >
          <button
          className="nav__link"
          onClick={workButtonClickHandler}
          >WORK</button>
        </li>
        <ListItems
          key={2}
          i={2}
          nameItem={"ABOUT"}
          linkItem={"/#bio"}
        />
        <ListItems
          key={3}
          i={3}
          nameItem={"CONTACT"}
          linkItem={"#contact"}
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