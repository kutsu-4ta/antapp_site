import React from 'react';
import MainTitle from '../heading/MainTitle';
import StyledCircle from '../backgrounAnimation/Circle';
import ScrollFader from '../scrollEvent/Fader';
import UseScroll from "../Utility/UseScroll";
// import useOffsetTop from "../Utility/UseOffsetTop";
// import {getActiveElement} from "@testing-library/user-event/dist/utils";

const Home = () => {

    // フェードのしきい値
    const scrollPosition: number = UseScroll();
    const threshold: number  = scrollPosition % window.innerHeight > window.innerHeight / 3 ? scrollPosition % window.innerHeight : window.innerHeight / 3;

    console.log(Element.name);

    return (
        <>
            <>
                <StyledCircle>
                    <h1>
                        Antapp
                    </h1>
                </StyledCircle>
            </>

            <div style={{height: '1000px'}}>
                <div style={{marginTop: '15rem'}} id={'about'}>
                    <ScrollFader>
                        <MainTitle>About</MainTitle>
                    </ScrollFader>
                </div>

                <div style={{marginTop: '10rem'}} id={'works'}>
                    <ScrollFader>
                        <MainTitle>Works</MainTitle>
                    </ScrollFader>
                </div>

                <div style={{marginTop: '10rem'}} id={'contact'}>
                    <ScrollFader>
                        <MainTitle>Contact</MainTitle>
                    </ScrollFader>
                </div>
            </div>
        </>
    );
}

export default Home;


