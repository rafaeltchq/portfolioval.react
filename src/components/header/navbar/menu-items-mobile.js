import React, { useContext } from 'react';
import { Link } from "wouter";
// import useScreeWidth from '../../hooks/screenwidth';
import { NavbarContext } from "../navbarContext";
import "../header.scss";

const MenuItemsM = ({ className }) => {
  // const [ itemSel, setNewItem ] = useState(0)
  const [, newMenuState ] = useContext(NavbarContext);
  const MenuItemsMobile = () => {
    const ListItemsM =({ nameItem, linkItem }) => {
        return (
            <li className="nav__item">
                <Link to={`${linkItem}`}
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
          className="nav__item"
        //   onClick={width > 480 ? () => setNewItem(1) : null}
          aria-expanded="false"
          aria-controls="menu">
          <Link
          className="nav__link"
          to="/#myworks"
        //   onClick={workOpener}
          >WORK</Link>
        </li>
        <ListItemsM
       key={2}
        i={2}
        nameItem={"CONTACT"}
        linkItem={"/#contact"}
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
  // const width = useScreeWidth();
  
      return (
       <MenuItemsMobile />
    );   
};

export default MenuItemsM;