import React, { useState } from 'react';
import { Link } from "wouter";
import "../header.scss";

const MenuItemsD = ({ workOpener, workCloser, className }) => {
  const [ itemSel, setNewItem ] = useState(0)
  const classSelector = i => itemSel === i ? "nav__item land" : "nav__item";


  const MenuItemsDesktop = () => {
    
    const ListItems = ({ i, nameItem, linkItem }) => {
      return (
        <li className={classSelector(i)}
          onClick={() => {setNewItem(i); workCloser()}}
            >
            <Link to={`${linkItem}`}
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
          onClick={() => setNewItem(1)}
          aria-expanded="false"
          aria-controls="menu">
          <button
          className="nav__link"
          onClick={workOpener}
          >WORK</button>
        </li>
        <ListItems
          key={2}
          i={2}
          nameItem={"CONTACT"}
          linkItem={"/#contact"}
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
  // const width = useScreeWidth();
  
      return (
       <MenuItemsDesktop 
        />
    );   
};

export default MenuItemsD;