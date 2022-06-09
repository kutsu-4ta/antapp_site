import React from 'react';
import StyledCircle from '../backgrounAnimation/Circle';
import ScrollFader from '../scrollEvent/Fader';
import About from './About';
import Work from './Work';
import Contact from "./Contact";
import FoxLogo from "../../assets/images/fox-white.svg";
import './style.css';

const maxHeight: number = window.innerHeight * 4;

const Home = () => {
    return (
        <>
            <div className={'title-container'}>
                {/*<StyledCircle>*/}
                <div className={'title-logo-area'}>
                    <div>
                        <h1>うんこしたい</h1>
                        <div>
                            トイレに篭って用を足しています。
                        </div>
                    </div>
                </div>
                {/*</StyledCircle>*/}
            </div>

            <div style={{height: maxHeight}}>

                    <ScrollFader>
                        <div className={'content-block'} id={'about'}>
                            <About/>
                        </div>
                    </ScrollFader>

                <ScrollFader>
                    <div className={'content-block'} id={'works'}>
                        <Work/>
                    </div>
                </ScrollFader>

                <ScrollFader>
                    <div className={'content-block'} id={'contact'}>
                        <Contact/>
                    </div>
                </ScrollFader>

            </div>
        </>
    );
}

export default Home;


