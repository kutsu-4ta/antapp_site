import React from "react";
import {Nav, Bars, NavLink, NavMenu} from './NavbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="">
                    <h1>Logo</h1>
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