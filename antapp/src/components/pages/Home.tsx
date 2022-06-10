import React from 'react';
import StyledCircle from '../backgrounAnimation/Circle';
import ScrollFader from '../scrollEvent/Fader';
import About from './About';
import Work from './Work';
import Contact from "./Contact";
import './style.css';
import Biwa from '../../assets/images/biwa.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowDown} from "@fortawesome/free-solid-svg-icons";

const maxHeight: number = window.innerHeight * 4;

const Home = () => {
    const iconStyle: React.CSSProperties = { padding: 10, fontSize: 40 };

    return (
        <>
            <div className={'title-block title-logo-area'}
                 // TODO:背景画像用意する
                 // style={{backgroundImage: `url(${Biwa})`}}
            >
                {/*<StyledCircle>*/}
                <h1>うんこしたい</h1>
                <div>
                    トイレにこもって日々用を足しています。
                </div>
                {/* TODO:FAのアイコンに置き換える*/}
                メモ:アニメーションで「↓」みたいなの入れる
                <p className={'text-left'}>
                    <FontAwesomeIcon style={iconStyle} icon={faArrowDown} />
                    Scroll!(仮)
                </p>
                {/*</StyledCircle>*/}
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


