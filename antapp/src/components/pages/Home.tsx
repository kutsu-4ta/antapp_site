import React from 'react';
import StyledArrow from "../backgrounAnimation/InfinateUpDownArrow";
import ScrollFader from '../scrollEvent/Fader';
import About from './About';
import Work from './Work';
import Contact from "./Contact";
import './style.css';
import Background from '../../assets/images/back_ground_1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowDown} from "@fortawesome/free-solid-svg-icons";

const maxHeight: number = window.innerHeight * 4;

const Home = () => {
    const iconStyle: React.CSSProperties = { padding: 10, fontSize: 40 };

    return (
        <>
            <div className={'title-block title-logo-area'}
                // TODO:背景画像用意する
            >
                <h1>フリーランスでWeb開発を行っています。</h1>
                メモ：もうちょっとなんか書く
                <span>
                    <StyledArrow scale={1000}>
                        {/*アイコン変える*/}
                        <FontAwesomeIcon style={iconStyle} icon={faArrowDown}/>
                    </StyledArrow>
                </span>
            </div>

            <div style={{height: maxHeight}}>
                <ScrollFader>
                    <div className={'content-block'} id={'about'}>
                        <About/>
                        <a href={'/about'}>more
                            <FontAwesomeIcon style={iconStyle} icon={faArrowRight} />
                            (仮)
                        </a>
                    </div>
                </ScrollFader>

                <ScrollFader>
                    <div className={'content-block'} id={'works'}>
                        <Work/>
                        {/* TODO:FAのアイコンに置き換える*/}
                        <a href={'/work'}>more
                            <FontAwesomeIcon style={iconStyle} icon={faArrowRight} />
                            (仮)
                        </a>
                    </div>
                </ScrollFader>

                <ScrollFader>
                    <div className={'content-block'} id={'contact'}>
                        <Contact/>
                    </div>
                </ScrollFader>
            </div>
            <div className={'text-right'}>
                うんち<br/>
                うんこ<br/>
                絶滅危惧種レッドリスト認定うんこ
            </div>
        </>
    );
}

export default Home;


