import React from 'react';
import StyledCircle from '../backgrounAnimation/Circle';
import ScrollFader from '../scrollEvent/Fader';
import MainTitle from "../heading/MainTitle";
import About from './About';
import Work from './Work';
import Contact from "./Contact";

const Home = () => {
    return (
        <>
            <ScrollFader>
                <div>
                    <MainTitle>Antapp</MainTitle>
                    <StyledCircle/>
                </div>
            </ScrollFader>

            <div style={{height: '1000px'}}>
                <div style={{marginTop: '15rem'}} id={'about'}>
                    <ScrollFader>
                        <About/>
                    </ScrollFader>
                </div>

                <div style={{marginTop: '10rem'}} id={'works'}>
                    <ScrollFader>
                        <Work/>
                    </ScrollFader>
                </div>

                <div style={{marginTop: '10rem'}} id={'contact'}>
                    <ScrollFader>
                        <Contact/>
                    </ScrollFader>
                </div>
            </div>
        </>
    );
}

export default Home;


