import React from 'react';
import StyledCircle from '../backgrounAnimation/Circle';
import ScrollFader from '../scrollEvent/Fader';
import About from './About';
import Work from './Work';
import Contact from "./Contact";
import FoxLogo from "../../assets/images/fox-white.svg";
import './style.css';

const Home = () => {
    return (
        <>
            <div className={'title-container'}>
                <StyledCircle>
                    <img src={FoxLogo} className={'logo-main'} alt="antapp" />
                </StyledCircle>
            </div>

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


