import React from "react";
import Styled from "styled-components";
import StyledCircle from '../backgrounAnimation/Circle';
import ScrollFader from "../scrollEvent/Fader";
// const StyledTopTitle = Styled.div`
//     padding-top: 10rem;
// `;

const Home = () => {
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
                <div style={{marginTop: '15rem'}}>
                    <ScrollFader>
                        <h1>About</h1>
                    </ScrollFader>
                </div>
                <div style={{marginTop: '10rem'}}>
                    <ScrollFader>
                        <div>Works</div>
                    </ScrollFader>
                </div>
                <div style={{marginTop: '10rem'}}>
                    <ScrollFader>
                        <div>Contact</div>
                    </ScrollFader>
                </div>
            </div>
        </>
    );
}

export default Home;


