/**
 * NOTE: [機能] homeコンポーネント
 *
 * 当初はルーティングで各ページに飛ばそうと思っていたが、一ページで完結させる方向にした。
 * スクロールを効果的に使ってUXを高めたいので、少しややこしくなったが、各要素にrefを貼った。
 * BodyItemに各ページの情報を定義して、homeコンポーネントのreturnの中でmapでループすることで各ページの要素をレンダリングしている。
 * その際にindex値をidに指定することで、ref.currentから要素にアクセスできるようになっている。
 *
 * ナビゲーションバーは当初App.tsxに配置していたが、同じrefを使うかもと思ったので、home.tsxにまとめて書いた。
 * この辺りは今後共通化やリファクタリングを進めたい。
 */

import React, {useRef, useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import './style.css';
import  {IsPc, IsMobile} from "../utility/Responsive";
import Background from "../../assets/images/profile_kari.png";
// スタイル
import ScrollFader from '../scrollEvent/Fader';
import InfinateUpDown from "../backgrounAnimation/InfinateUpDown";
import {NavAnimation, ScrollAnimation} from "../scrollEvent/TrigerAnimation";
import {UseTriangleAnimation} from "../backgrounAnimation/Triangle";
import InfinateGradation from "../backgrounAnimation/InfinateGradation";
import {CSSAnimation} from "../backgrounAnimation/Slidein";
import Sentence from "../atoms/texts/Sentence";
// 各ページ
import About from "./About";
import SkillSet from "./Skillset";
import Work from './Work';
import Contact from "./Contact";
import Loading from "../loading/Loading";
// アイコン
import HumanIcon from "../../assets/images/icons/about_human.svg";
import WorksIcon from "../../assets/images/icons/works_pc_phone.svg";
import ContactIcon from "../../assets/images/icons/contact_mail.svg";
import SkillSetIcon from "../../assets/images/icons/skillsets_dev.svg";
import ArrowDownScroll from "../../assets/images/icons/arrow_down_scroll.svg";
// ナビゲーションバー
import FoxLogo from "../../assets/images/fox-white.svg";
import HumanNavIcon from "../../assets/images/icons/human_small_white.svg";
import WorksNavIcon from "../../assets/images/icons/works_small_white.svg";
import ContactNavIcon from "../../assets/images/icons/mail_small_white.svg";
import SkillSetNavIcon from "../../assets/images/icons/skillset_small_white.svg";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Typography} from "@mui/material";

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1025,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "#16abe5",
            light: "#843eee",
            dark: "#818181",
        },
        background: {
            default:  "#fcfcfc",
        },
        text: { primary: "#2a2929" },
    }
});

type BodyItem = {
    pageName: string;
    icon: any | undefined;
    navIcon: any | undefined;
    backGroundColor: string;
};

const BodyItems: BodyItem[] = [
    {pageName: "about", icon: HumanIcon, navIcon: HumanNavIcon,backGroundColor: "#fa9f3b"},
    {pageName: "skillSet", icon: SkillSetIcon, navIcon: SkillSetNavIcon,backGroundColor: "#ff7f50"},
    {pageName: "works", icon: WorksIcon, navIcon: WorksNavIcon,backGroundColor: "#4a9b9b"},
    {pageName: "contact", icon: ContactIcon, navIcon: ContactNavIcon,backGroundColor: "#649f5d"}
];

export default () => {
    // ナビゲーションバー
    const navRef = useRef(BodyItems.map(() => React.createRef<HTMLDivElement>()));
    type StyleActiveNavButton = (id: number) => string;
    const styleActiveNavButton: StyleActiveNavButton = (id) => 'border: solid #808080; opacity: 1; background:' + BodyItems[id].backGroundColor + ';';
    const styleNavButton = 'border: solid #808080; opacity: 0.8;';

    const handleMouseEnter = (id: number) => navRef.current[id].current?.getAttribute('style') ? navRef.current[id].current?.setAttribute('style', styleActiveNavButton(id)) : '';

    const handleMouseLeave = (id: number) => navRef.current[id].current?.getAttribute('style') ? navRef.current[id].current?.setAttribute('style', styleNavButton) : '';

    // ボディ
    const ref = useRef(BodyItems.map(() => React.createRef<HTMLDivElement>()));
    const scrollToView = (id: number | undefined | null) => (id !== null) && (id !== undefined) ? ref.current[id]!.current!.scrollIntoView({behavior: "smooth"}) : window.scroll({top: 0, behavior: 'smooth'});
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* PC端末 */}
            <IsPc>
                <div id="target">
                    <NavAnimation>
                        <InfinateGradation
                            color1="#778899"
                            color2="#b0c4de"
                            color3="#87cefa"
                            scale={20}
                            style={{height: window.innerHeight, position: "sticky", top: "0", border: "none"}} >

                            <UseTriangleAnimation/>
                            <img onClick={() => scrollToView(null)} src={FoxLogo} className="icon-navbar-logo" style={{ paddingLeft: window.innerWidth * 0.9 + "px"}} alt="antapp"/>
                            <div  id="nav-item-target">
                                <Grid container justifyContent="center" className="content-title" id="home">
                                    <Grid item xs={12} style={{height: "5rem"}}>
                                        <CSSAnimation timeoutEnter={500} timeoutExit={200} classNames="fade-in">
                                            <h1 style={{fontFamily: "Noto Serif JP"}}>Masafumi Yamashita</h1>
                                        </CSSAnimation>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" style={{paddingTop: window.innerHeight * 0.1}}>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={8}>
                                        <Grid container justifyContent="center" className="nav-menu"
                                              style={{position: "sticky", top: "0", zIndex: "3"}}>
                                            {BodyItems.map((item, id) => {
                                                return (
                                                    <Grid item xs={3} className="padding-3 padding-zero">
                                                        <CSSAnimation timeoutEnter={800} timeoutExit={200} classNames="slide-in-from-bottom">
                                                            <Grid container justifyContent="center">
                                                                <Grid item xs={12} className="text-center" >
                                                                    <InfinateGradation scale={10}
                                                                                       color1="#c0c0c0"
                                                                                       color2={BodyItems[id].backGroundColor}
                                                                                       color3="#c0c0c0"
                                                                                       style={{border:"none"}}
                                                                    >
                                                                        <div
                                                                            key={id}
                                                                            ref={navRef.current[id]}
                                                                            id={"nav-" + item.pageName}
                                                                            style={{
                                                                                borderColor: "#808080",
                                                                            }}
                                                                            onMouseEnter={() => handleMouseEnter(id)}
                                                                            onMouseLeave={() => handleMouseLeave(id)}
                                                                            onClick={() => scrollToView(id)}
                                                                            className="icon-navbar-button"
                                                                        >
                                                                            <img src={item.navIcon}
                                                                                 className="icon-navbar-item"
                                                                                 alt={item.pageName}/>
                                                                            <p className="text-navbar">{item.pageName}</p>
                                                                        </div>
                                                                    </InfinateGradation>
                                                                </Grid>
                                                            </Grid>
                                                        </CSSAnimation>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2}></Grid>
                                </Grid>

                                <Grid container justifyContent="center" style={{paddingTop: window.innerHeight * 0.1}} id="nav-item-trigger">
                                    <Grid item xs={12} className="content-flex-center">
                                        <InfinateUpDown scale={20}>
                                            <div className="content-flex-center">
                                                <CSSAnimation timeoutEnter={2500} timeoutExit={200}
                                                              classNames="fade-in">
                                                    <img src={ArrowDownScroll} className="icon-scroll-arrow-down"
                                                         alt="scroll"
                                                         onClick={() => scrollToView(0)}/>
                                                </CSSAnimation>
                                            </div>
                                        </InfinateUpDown>
                                    </Grid>
                                </Grid>
                            </div>
                        </InfinateGradation>

                        <Grid container justifyContent="center">
                            <Grid item xs={10} className="content-front">
                                <Grid container justifyContent="center">
                                    {BodyItems.map((item, id) => {
                                        return (
                                            <>
                                                {/*トピックのアイコン*/}
                                                <Grid item xs={2}
                                                      id={item.pageName}
                                                      key={id}
                                                      ref={ref.current[id]}
                                                      className="text-center"
                                                >
                                                    {item.icon ?
                                                        <div style={{position: "sticky", top: "0"}}>
                                                            <img src={item.icon} className="icon-topic"
                                                                 alt={item.pageName}
                                                                 onClick={() => scrollToView(id)}
                                                            />
                                                            <h2 className="text-topic">
                                                                {item.pageName}
                                                            </h2>
                                                        </div>
                                                        :
                                                        ""
                                                    }
                                                </Grid>

                                                {/*ボディ*/}
                                                <Grid item xs={10}>
                                                    <ScrollFader timeoutEnter={200} timeoutExit={500}>
                                                        <div className="content-body background-content">
                                                            {item.pageName === "about" ? <About/> : ''}
                                                            {item.pageName === "skillSet" ? <SkillSet/> : ''}
                                                            {item.pageName === "works" ? <Work/> : ''}
                                                            {item.pageName === "contact" ? <Contact/>: ''}
                                                        </div>
                                                    </ScrollFader>
                                                </Grid>
                                            </>
                                        );
                                    })}
                                </Grid>
                            </Grid>

                            {/*アニメーション*/}
                            <Grid item xs={2}>
                                <Grid container justifyContent="center">
                                    <Grid item xs={12} className="text-center content-animation background-sticky">
                                    </Grid>
                                    <Grid item xs={12} className="text-center content-animation background-sticky">
                                    </Grid>
                                </Grid>
                            </Grid>
                            <div className={"text-right margin-top-10"}>
                                <Typography component="p" variant="body1" textAlign="center">
                                    thank you for your comming !!
                                </Typography>
                            </div>
                        </Grid>
                    </NavAnimation>
                    {/*<div className={"text-right margin-top-10"}>*/}
                    {/*    <Typography component="p" variant="body1" textAlign="right">*/}
                    {/*        {"特定商取引方に基づく記載事項"}*/}
                    {/*    </Typography>*/}
                    {/*    {"代表責任者名: 山下 将史"}<br/>*/}
                    {/*    {"所在地: メールにて遅滞なく提供いたします"}<br/>*/}
                    {/*    {"電話番号: メールにて遅滞なく提供いたします"}<br/>*/}
                    {/*</div>*/}
                </div>
                </IsPc>

                {/* Mobile端末 */}
                <IsMobile>
                    <NavAnimation>
                        <InfinateGradation
                            color1="#778899"
                            color2="#b0c4de"
                            color3="#87cefa"
                            scale={20}
                            style={{height: window.innerHeight, position: "sticky", top: "0", border: "none"}} >
                        <UseTriangleAnimation/>
                        <img onClick={() => scrollToView(null)} src={FoxLogo} className="mobile-icon-navbar-logo" style={{ paddingLeft: window.innerWidth * 0.9 + "px"}} alt="antapp"/>

                            <Grid container justifyContent="center" className="mobile-content-title" id="home">
                                <Grid item xs={12} style={{height: "5rem"}}>
                                    <CSSAnimation timeoutEnter={500} timeoutExit={200} classNames="fade-in">
                                        <h1 style={{fontFamily: "Noto Serif JP"}} className="mobile-text-size-title">良いモノ、つくります。</h1>
                                    </CSSAnimation>
                                </Grid>
                            </Grid>

                                    <Grid container justifyContent="center" className="nav-menu" spacing={1}
                                          style={{position: "sticky", top: "0", zIndex: "3"}}>
                                        {BodyItems.map((item, id) => {
                                            return (
                                                <Grid item xs={3} className="padding-zero text-center">
                                                    <CSSAnimation timeoutEnter={800} timeoutExit={200} classNames="slide-in-from-bottom">
                                                        <InfinateGradation scale={10}
                                                                           color1="#c0c0c0"
                                                                           color2={BodyItems[id].backGroundColor}
                                                                           color3="#c0c0c0"
                                                                           style={{border: "none"}}
                                                        >
                                                            <div
                                                                key={id}
                                                                ref={navRef.current[id]}
                                                                id={"nav-" + item.pageName}
                                                                style={{
                                                                    borderColor: "#808080",
                                                                }}
                                                                onMouseEnter={() => handleMouseEnter(id)}
                                                                onMouseLeave={() => handleMouseLeave(id)}
                                                                onClick={() => scrollToView(id)}
                                                                className="icon-navbar-button"
                                                            >
                                                                <img src={item.navIcon}
                                                                     className="icon-navbar-item"
                                                                     alt={item.pageName}/>
                                                                <p className="mobile-text-navbar">{item.pageName}</p>
                                                            </div>
                                                        </InfinateGradation>
                                                    </CSSAnimation>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>

                        </InfinateGradation>
                        {/*<div>*/}
                        {/*    <Grid container justifyContent="center" className="content-title" id="home">*/}
                        {/*        <Grid item xs={12}>*/}
                        {/*            <h1 className="mobile-h1">Web制作のご依頼をお待ちしております。</h1>*/}
                        {/*        </Grid>*/}
                        {/*    </Grid>*/}

                        {/*    <Grid container justifyContent="center"*/}
                        {/*          style={{position: "sticky", top: "10px", zIndex: "3"}}*/}
                        {/*    >*/}
                        {/*        <Grid xs={12} className="content-flex-center"*/}
                        {/*              style={{position: "sticky", top: "10px", zIndex: "3"}}>*/}
                        {/*            <img onClick={() => scrollToView(null)} src={FoxLogo}*/}
                        {/*                 className="mobile-icon-navbar-logo" alt="antapp" id="mobile-nav-item-target"/>*/}
                        {/*        </Grid>*/}
                        {/*    </Grid>*/}

                        {/*    <Grid container justifyContent="center">*/}

                        {/*        <Grid item xs={1}></Grid>*/}
                        {/*        <Grid item xs={10} className="mobile-content-title-border text-center">*/}
                        {/*            <h2 className="mobile-text-size-title">事業内容</h2>*/}
                        {/*            <Grid container justifyContent="center" spacing={4} style={{marginBottom: "2rem"}}>*/}
                        {/*                <Grid item xs={6} className="text-center">*/}
                        {/*                    <img src={HumanIcon} className="mobile-icon-content-top"*/}
                        {/*                         alt={"webシステム"}/><br/>*/}
                        {/*                    <span className="mobile-text-size-sub-title mobile-title">webシステム（仮）</span>*/}
                        {/*                </Grid>*/}
                        {/*                <Grid item xs={6} className="text-center">*/}
                        {/*                    <img src={WorksIcon} className="mobile-icon-content-top"*/}
                        {/*                         alt={"LP、webサイト"}/><br/>*/}
                        {/*                    <span className="mobile-text-size-sub-title">LP・webサイト（仮）</span>*/}
                        {/*                </Grid>*/}
                        {/*                <Grid item xs={12} className="text-center">*/}
                        {/*                    <img src={SkillSetIcon} className="mobile-icon-content-top"*/}
                        {/*                         alt={"スマホアプリ"}/><br/>*/}
                        {/*                    <span className="mobile-text-size-sub-title">スマートフォンアプリ（仮）</span>*/}
                        {/*                </Grid>*/}
                        {/*            </Grid>*/}
                        {/*        </Grid>*/}
                        {/*        <Grid item xs={1}></Grid>*/}

                        {/*    </Grid>*/}

                        {/*    <Grid container justifyContent="center" spacing={1}*/}
                        {/*          className="padding-top-3 margin-bottom-3"*/}
                        {/*        // style={{position: "sticky", top: "10px", zIndex: "3"}}*/}
                        {/*    >*/}
                        {/*        {BodyItems.map((item, id) => {*/}
                        {/*            return (*/}
                        {/*                <Grid item xs={3}>*/}
                        {/*                    <div>*/}
                        {/*                        <NavLink to={item.pageName}>*/}
                        {/*                            <Grid container justifyContent="center">*/}
                        {/*                                <Grid item xs={12} className="text-center">*/}
                        {/*                                    /!* ボーダーカラーはstyleプロップスで指定する必要があるので注意 *!/*/}
                        {/*                                    <div*/}
                        {/*                                        key={id}*/}
                        {/*                                        ref={navRef.current[id]}*/}
                        {/*                                        id={"nav-" + item.pageName}*/}
                        {/*                                        style={{*/}
                        {/*                                            backgroundColor: item.backGroundColor,*/}
                        {/*                                            borderColor: "#808080"*/}
                        {/*                                        }}*/}
                        {/*                                        onMouseEnter={() => handleMouseEnter(id)}*/}
                        {/*                                        onMouseLeave={() => handleMouseLeave(id)}*/}
                        {/*                                        onClick={() => scrollToView(id)}*/}
                        {/*                                        className="icon-navbar-button"*/}
                        {/*                                    >*/}
                        {/*                                        <img src={item.navIcon} className="icon-navbar-item"*/}
                        {/*                                             alt={item.pageName}/>*/}
                        {/*                                        <span className="text-navbar">{item.pageName}</span>*/}
                        {/*                                    </div>*/}
                        {/*                                </Grid>*/}
                        {/*                            </Grid>*/}
                        {/*                        </NavLink>*/}
                        {/*                    </div>*/}
                        {/*                </Grid>*/}
                        {/*            );*/}
                        {/*        })}*/}
                        {/*    </Grid>*/}

                        {/*    <Grid container justifyContent="center" className="margin-bottom-2"*/}
                        {/*          id="mobile-nav-item-trigger">*/}
                        {/*        <Grid item xs={12}>*/}
                        {/*            <InfinateUpDown scale={20}>*/}
                        {/*                <div className="content-flex-center">*/}
                        {/*                    <img src={ArrowDownScroll} className="mobile-icon-scroll-arrow-down"*/}
                        {/*                         alt="scroll" onClick={() => scrollToView(0)}/>*/}
                        {/*                </div>*/}
                        {/*            </InfinateUpDown>*/}
                        {/*        </Grid>*/}
                        {/*    </Grid>*/}

                        {/*    <Grid container justifyContent="center">*/}
                        {/*        <Grid item xs={10} className="content-front">*/}
                        {/*            <Grid container justifyContent="center" style={{position: "sticky", top: "0"}}>*/}
                        {/*                {BodyItems.map((item, id) => {*/}
                        {/*                    return (*/}
                        {/*                        <>*/}
                        {/*                            /!*トピックのアイコン*!/*/}
                        {/*                            <Grid item xs={2} id={item.pageName} key={id} ref={ref.current[id]}*/}
                        {/*                                  className="text-center">*/}
                        {/*                                {item.icon ?*/}
                        {/*                                    <div style={{position: "sticky", top: "0"}}>*/}
                        {/*                                        <img src={item.icon} className="mobile-icon-topic"*/}
                        {/*                                             alt={item.pageName}*/}
                        {/*                                             onClick={() => scrollToView(id)}*/}
                        {/*                                        />*/}
                        {/*                                        <h2 className="mobile-text-topic">*/}
                        {/*                                            {item.pageName}*/}
                        {/*                                        </h2>*/}
                        {/*                                    </div>*/}
                        {/*                                    :*/}
                        {/*                                    ""*/}
                        {/*                                }*/}
                        {/*                            </Grid>*/}

                        {/*                            /!*ボディ*!/*/}
                        {/*                            <Grid item xs={10}>*/}
                        {/*                                <ScrollFader timeoutEnter={500} timeoutExit={500}>*/}
                        {/*                                    <div className="mobile-content-body">*/}
                        {/*                                        {item.pageName === "about" ? <About/> : ''}*/}
                        {/*                                        {item.pageName === "skillSet" ? <SkillSet/> : ''}*/}
                        {/*                                        {item.pageName === "works" ? <Work/> : ''}*/}
                        {/*                                        {item.pageName === "contact" ? <Contact/> : ''}*/}
                        {/*                                    </div>*/}
                        {/*                                </ScrollFader>*/}
                        {/*                            </Grid>*/}
                        {/*                        </>*/}
                        {/*                    );*/}
                        {/*                })}*/}
                        {/*            </Grid>*/}
                        {/*        </Grid>*/}

                        {/*        /!*アニメーション*!/*/}
                        {/*        <Grid item xs={2}>*/}
                        {/*            <Grid container justifyContent="center">*/}
                        {/*                <Grid item xs={12}>*/}
                        {/*                </Grid>*/}
                        {/*            </Grid>*/}
                        {/*        </Grid>*/}

                        {/*        <div className={'text-right'}>*/}
                        {/*            特定商取引法のやつ<br/>*/}
                        {/*            絶滅危惧種レッドリスト認定うんこ(仮)*/}
                        {/*        </div>*/}
                        {/*    </Grid>*/}
                        {/*</div>*/}
                    </NavAnimation>
                </IsMobile>

        </ThemeProvider>
    );
};