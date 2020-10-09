import React, { useContext } from 'react';
import { Link} from "react-router-dom";
import { NavbarContext } from "../navbarContext";
import "../header.scss";

const MenuItemsM = ({ className }) => {
  const [, newMenuState ] = useContext(NavbarContext);
  const MenuItemsMobile = () => {
    const ListItemsM =({ nameItem, linkItem }) => {
        return (
            <li className="nav__item">
                <Link href={`${linkItem}`}
                onClick={() => newMenuState(false)}
                className="nav__link">{nameItem}</Link>
            </li>
        )}
    return (
        <ul
        className={className}
        onClick={() => newMenuState(false)}
       >
        <ListItemsM
       key={0}
        i={0}
        nameItem={"HOME"}
        linkItem={"/"}
       />
       <li
          className="nav__item">
          <a
          className="nav__link"
          href="/#myworks"
          >WORK</a>
        </li>
        <ListItemsM
       key={2}
        i={2}
        nameItem={"CONTACT"}
        linkItem={"#contact"}
       />
       <ListItemsM
       key={3}
        i={3}
        nameItem={"ABOUT"}
        linkItem={"/#bio"}
       />
       </ul>
    )
  }  
      return (
       <MenuItemsMobile />
    );   
};

export default MenuItemsM;