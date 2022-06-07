import React from "react";
import Styled from "styled-components";
import StyledCircle from '../backgrounAnimation/Circle';

const StyledTopTitle = Styled.div`
    padding-top: 10rem;
`;

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

            {/*<div style={{height: '1000px'}}>*/}
            {/*    <div style={{marginTop: '15rem'}}>*/}
            {/*        <ScrollFader>*/}
            {/*            <About/>*/}
            {/*        </ScrollFader>*/}
            {/*    </div>*/}
            {/*    <div style={{marginTop: '10rem'}}>*/}
            {/*        <ScrollFader>*/}
            {/*            <Works/>*/}
            {/*        </ScrollFader>*/}
            {/*    </div>*/}
            {/*    <div style={{marginTop: '10rem'}}>*/}
            {/*        <ScrollFader>*/}
            {/*            <Contact/>*/}
            {/*        </ScrollFader>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}

export default Home;


