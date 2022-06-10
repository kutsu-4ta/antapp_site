import React from 'react';
import StyledCircle from '../backgrounAnimation/Circle';
import ScrollFader from '../scrollEvent/Fader';
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import About from './About';
import Work from './Work';
import Contact from "./Contact";
import './style.css';
import Biwa from '../../assets/images/biwa.png';

const maxHeight: number = window.innerHeight * 4;

const Home = () => {
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
                {/*</StyledCircle>*/}
            </div>

            <div style={{height: maxHeight}}>
                <ScrollFader>
                    <div className={'content-block'} id={'about'}>
                        <About/>
                        <a href={'/about'}>more !(仮)</a>
                    </div>
                </ScrollFader>

                <ScrollFader>
                    <div className={'content-block'} id={'works'}>
                        <Work/>
                        {/* TODO:FAのアイコンに置き換える*/}
                        <a href={'/work'}>more !(仮)</a>
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


