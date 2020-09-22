import React, {useState} from 'react'
import { Link } from "wouter"
import SideBar from "./sidebar"
// import { Transition } from "react-spring/renderprops";
import './header.scss'
// import './sidebar.scss'



export default function Header() {
    const [open, NewSte] = useState(false)
    const Toggle = () => NewSte(!open)
    
    const NavMenu = () => {
        return (
            <ul className="nav__menu" id="menu" tabindex="-1" aria-label="main navigation">
                <li className="nav__item land"><Link to="#" className="nav__link">HOME</Link></li>
                <li className="nav__item dropdown-6" aria-expanded="false" aria-controls="menu">WORK
                    <div className="triangle-up"></div>
                </li>
                <li className="nav__item"><Link to="#contact" className="nav__link">CONTACT</Link></li>
                <li className="nav__item"><Link to="#about" className="nav__link">ABOUT</Link></li>
            </ul>
        )
    }
    
    
    const NavBar = () => {  
    return (
            <nav className="nav dropdown" role="navigation">
                <Link to="/"><a><img id="logo" alt="Logo" /></a></Link>
                <NavMenu />
                

                <SideBar
                active={open}
                trigger={Toggle}
                />
           </nav>
    )
}
    return (
        <header className="scrolled">
            <NavBar />
        </header>
    )
}