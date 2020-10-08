import React, { useState, createContext } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = props => {
    const [ mobileMenuOpen, newMenuState ] = useState(false);

    return (
        <NavbarContext.Provider
        value={[ mobileMenuOpen, newMenuState ]}
        >
        {props.children}
        </NavbarContext.Provider>
    );
};