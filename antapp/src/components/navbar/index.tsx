import React from "react";
import {Nav, Bars, NavLink, NavMenu} from './NavbarElements';
import FoxLogo from '../../assets/images/fox.png';
import './style.css';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={FoxLogo} className={'navbar-logo'} alt="Antapp" />
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="about">
                        About
                    </NavLink>
                    <NavLink to="work">
                        Works
                    </NavLink>
                    <NavLink to="contact">
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;