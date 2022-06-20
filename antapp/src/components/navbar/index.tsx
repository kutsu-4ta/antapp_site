import React, {useRef} from "react";
import {Nav, Bars, NavLink, NavMenu} from './NavbarElements';
import FoxLogo from '../../assets/images/fox-white.svg';
import './style.css';
import Grid from "@mui/material/Grid";
import Human from "../../assets/images/icons/about_human.svg";
import Works from "../../assets/images/icons/works_pc_phone.svg";
import Contact from "../../assets/images/icons/contact_mail.svg";

const Navbar = () => {

    type Item = {
        pageName: string;
        icon: any;
    };

    const navBarItems: Item[] = [
        {pageName: "about", icon: Human},
        {pageName: "works", icon: Works},
        {pageName: "contact", icon: Contact}
    ];

    let ref = useRef(navBarItems.map( () => React.createRef<HTMLDivElement>()));

    const handleMouseEnter = (id: number) => {
        console.log(ref.current[id].current);
        if (ref.current[id].current?.getAttribute('style')){
            ref.current[id].current?.setAttribute('style',
                ' border-bottom: solid;' +
                'border-bottom-color: black;' +
                'height: 3.0rem;' +
                'padding-bottom: 0.3rem;'
            );
        }
        return;
    };

    const handleMouseLeave = (id: number) => {
        if (ref.current[id].current?.getAttribute('style')){
            ref.current[id].current?.setAttribute('style',
                ' border-bottom: solid;' +
                'border-bottom-color: azure;' +
                'height: 2.5rem;' +
                'padding-bottom: 0.3rem;'
            );
        }
        return;
    };

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={FoxLogo} className={'logo-navbar'} alt="antapp"/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    {navBarItems.map((item, id) => {
                        return (
                            <div>
                                <NavLink to={item.pageName}>
                                    <Grid container justifyContent="center">
                                        <Grid item xs={12} className="text-center">
                                            <div
                                                key={id}
                                                // className="navbar-navlink-item"
                                                style={{
                                                    paddingBottom: "0.3rem",
                                                    borderBottom: "solid",
                                                    borderColor: "azure",
                                                    // height: "2rem",
                                                }}
                                                onMouseEnter={() => handleMouseEnter(id)}
                                                onMouseLeave={() => handleMouseLeave(id)}
                                                ref={ref.current[id]}
                                            >
                                                <img src={item.icon} className="icon-navbar-item"
                                                     alt={item.pageName}/>
                                                <span>{item.pageName}</span>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </NavLink>
                            </div>
                        );
                    })}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;