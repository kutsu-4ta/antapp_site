import Styled from 'styled-components';
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom';

export const Nav = Styled.nav`
    // background: ;
    // border-bottom: 0.1rem solid white;
    // color: black;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    z-index: 10;
`;

export const NavLink = Styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursol: pointer;

    &.active {
        color: #15cdfc;
    }
`;

export  const Bars = Styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-siza: 1.8rem;
        cursol: pointer;
    }
`

export const NavMenu = Styled.div`
    display: flex;
    align-items: center;
    margin-right: 4rem;

    @media screen and (max-width: 768px) {
        // display: none;
    }
`;

