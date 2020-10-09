import React, { useState, createContext } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = props => {
    const [ mobileMenuOpen, newMenuState ] = useState(false);
    const [ itemSel, setNewItem ] = useState(0);
    return (
        <NavbarContext.Provider
        value={
            {sideBarMenu: [ mobileMenuOpen, newMenuState ],
            classSelectorNavbar: [ itemSel, setNewItem ]}
            }
        >
        {props.children}
        </NavbarContext.Provider>
    );
};