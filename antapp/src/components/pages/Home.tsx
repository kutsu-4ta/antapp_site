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
import Slider from "@mui/material/Slider";
import './style.css';
import  {IsPc, IsMobile} from "../utility/Responsive";
// スタイル
import ScrollFader, {useObserver} from '../scrollEvent/Fader';
import InfinateUpDown from "../backgrounAnimation/InfinateUpDown";
import {NavAnimation} from "../scrollEvent/TrigerAnimation";
import InfinateGradation from "../backgrounAnimation/InfinateGradation";
import {CSSAnimation} from "../backgrounAnimation/Slidein";
import HomeSmall from "../../assets/images/Home_small.png";
import HomeMiddle from "../../assets/images/Home_middle.png";
import HomeLarge from "../../assets/images/Home_large.png";
import HomeXXLarge from "../../assets/images/Home_xxlarge.png";
import HomeMobile from "../../assets/images/PlayerUI.png";
// 各ページ
import About from "./About";
import SkillSet from "./Skillset";
import Work from './Work';
import Contact from "./Contact";
// アイコン
import HumanIcon from "../../assets/images/icons/about_human.svg";
import WorksIcon from "../../assets/images/icons/works_pc_phone.svg";
import ContactIcon from "../../assets/images/icons/contact_mail.svg";
import SkillSetIcon from "../../assets/images/icons/skillsets_dev.svg";
import ArrowDownScroll from "../../assets/images/icons/arrow_down_scroll.svg";
import ShareIcon from '@mui/icons-material/Share';
import MobileLeft from '../../assets/images/icons/mobile_left.svg';
import MobileRight from '../../assets/images/icons/mobile_right.svg';
import MenuIcon from '@mui/icons-material/Menu';
// ナビゲーションバー
import FoxLogo from "../../assets/images/fox-white.svg";
import HumanNavIcon from "../../assets/images/icons/human_small_white.svg";
import WorksNavIcon from "../../assets/images/icons/works_small_white.svg";
import ContactNavIcon from "../../assets/images/icons/mail_small_white.svg";
import SkillSetNavIcon from "../../assets/images/icons/skillset_small_white.svg";
import {Typography} from "@mui/material";

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

    const [widthState, setWidthState] = useState(window.innerWidth);
    const [heightState, setHeightState] = useState(window.innerHeight);
    const [homePicture, setHomePicture] = useState(HomeXXLarge);
    const [displayColorState, setDisplayColorState] = useState("#00ffff");
    // モバイル機能
    const [activeIdState, setActiveIdState] = useState<number | undefined>(undefined);
    const [value, setValue] = React.useState<number | string | Array<number | string>>(
        30,
    );

    useEffect(() => {
        resize();
        // console.log(isWork);
    })

    // ナビゲーションバー
    const navRef = useRef(BodyItems.map(() => React.createRef<HTMLDivElement>()));
    type StyleActiveNavButton = (id: number) => string;
    const styleActiveNavButton: StyleActiveNavButton = (id) => 'border: solid #808080; opacity: 1; background:' + BodyItems[id].backGroundColor + ';';
    const styleNavButton = 'border: solid #808080; opacity: 0.8;';

    const handleMouseEnter = (id: number) => {
        setDisplayColorState(BodyItems[id].backGroundColor)
        return (navRef.current[id].current?.getAttribute('style') ? navRef.current[id].current?.setAttribute('style', styleActiveNavButton(id)) : '');
    }

    const handleMouseLeave = (id: number) => {
        setDisplayColorState("#00ffff")
        return (navRef.current[id].current?.getAttribute('style') ? navRef.current[id].current?.setAttribute('style', styleNavButton) : '');
    }

    // モバイルの機能
    const onScroll = () => {
        console.log('スクロール')
        getActiveElementId();
        setValue(window.scrollY);
    }
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
        window.scroll(0,typeof value === 'number' ? value : 0);
    };

    // const getActiveElementName = () =>{
    //     let elementName = 'home';
    //     BodyItems.map((item, id) => {
    //         if(useObserver(ref.current[id])){
    //             console.log(BodyItems[id].pageName)
    //             console.log(id)
    //             elementName = BodyItems[id].pageName;
    //         }
    //     });
    //     return (elementName);
    // }

    const getActiveElementId = () =>{
        if(aboutRef){
            setActiveIdState(0)
            // console.log('ok');
        }else if(skillSetRef){
            setActiveIdState(1)
            // console.log('OK')
        }else if(workRef){
            setActiveIdState(2)
            // console.log('OK')
        }else if(contactRef){
            setActiveIdState(3)
            // console.log('OK')
        }
    }

    // ボディ
    const ref = useRef(BodyItems.map(() => React.createRef<HTMLDivElement>()));

    const aboutRef = useObserver(ref.current[0]);
    const skillSetRef = useObserver(ref.current[1]);
    const workRef = useObserver(ref.current[2]);
    const contactRef = useObserver(ref.current[3]);


    const scrollToView = (id: number | undefined | null) => {
        setActiveIdState(typeof id === 'number' ? id : undefined )

        return ((id !== null) && (id !== undefined) ? ref.current[id]!.current!.scrollIntoView({behavior: "smooth"}) : window.scroll({top: 0, behavior: 'smooth'}));
    }
    const resize = () => {
        console.log('resize');
        setWidthState(window.innerWidth);
        setHeightState(window.innerHeight);
        console.log(widthState);
        if (widthState < 900 && heightState < 200) {
            setHomePicture(HomeSmall);
        } else if (widthState < 1400 && heightState < 800) {
            setHomePicture(HomeMiddle);
        } else if (widthState < 1500 && heightState < 950) {
            setHomePicture(HomeLarge);
        } else {
            setHomePicture(HomeXXLarge);
        }

    }
    return (
        <>
            {/* PC端末 */}
            <IsPc>
                {window.addEventListener('resize', resize)}
                <Grid container justifyContent="center" style={{
                    position: "fixed",
                    height: "4rem",
                    top: "0",
                    zIndex: "10",
                    backgroundColor: "rgba(169,169,169,0.9)",
                }}>
                    <Grid item xs={8}>
                        <img onClick={() => scrollToView(null)} src={FoxLogo} className="icon-navbar-logo" alt="antapp"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container justifyContent="center" spacing={2}>
                            {BodyItems.map((item, id) => {
                                return (
                                    <Grid item xs={3} className="text-center">
                                        <InfinateGradation scale={10}
                                                           color1="#c0c0c0"
                                                           color2={BodyItems[id].backGroundColor}
                                                           color3="#696969"
                                                           style={{border: "none"}}
                                        >
                                            <div
                                                key={id}
                                                ref={navRef.current[id]}
                                                id={"nav-" + item.pageName}
                                                style={{borderColor: "#808080",}}
                                                onMouseEnter={() => handleMouseEnter(id)}
                                                onMouseLeave={() => handleMouseLeave(id)}
                                                onClick={() => scrollToView(id)}
                                                className="icon-navbar-button"
                                            >
                                                {/*<img src={item.navIcon}*/}
                                                {/*     className="icon-navbar-item"*/}
                                                {/*     alt={item.pageName}/>*/}
                                                <p className="text-navbar">{item.pageName}</p>
                                            </div>
                                        </InfinateGradation>

                                    </Grid>

                                );
                            })}
                        </Grid>

                        <Grid container justifyContent="center">
                        </Grid>
                    </Grid>
                </Grid>

                {/*</div>*/}


                {/*<div id="target">*/}
                <NavAnimation>
                    <InfinateGradation
                        color1="#c0c0c0"
                        color2={displayColorState}
                        color3="#696969"
                        scale={2}
                        style={{
                            height: '100vh',
                            width: `${widthState}`,
                            position: "sticky",
                            top: "0",
                            border: "none"
                        }}>

                        <div
                            style={{
                                top: "0",
                                position: 'sticky',
                                backgroundImage: `url(${homePicture})`,
                                backgroundRepeat: 'no-repeat',
                                width: `${widthState}`,
                                height: '100vh'
                            }}
                        >
                            <div id="nav-item-target">
                                <Grid container justifyContent="center" className="content-title" id="home">
                                    <Grid item xs={12} style={{height: "5rem", marginTop: "5rem"}}>
                                        <CSSAnimation timeoutEnter={500} timeoutExit={200} classNames="fade-in">
                                            <h1 style={{fontFamily: "Noto Serif JP"}}>Masafumi Yamashita</h1>
                                        </CSSAnimation>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" style={{paddingTop: heightState * 0.1}}>
                                    <Grid item xs={8}>
                                        <Grid container justifyContent="center" className="nav-menu"
                                              style={{position: "sticky", top: "0", zIndex: "3"}}>

                                            <Grid item xs={12} className="text-center">
                                                {/*<CSSAnimation timeoutEnter={800} timeoutExit={200} classNames="slide-in-from-bottom">*/}
                                                {/*</CSSAnimation>*/}
                                            </Grid>

                                            {BodyItems.map((item, id) => {
                                                return (
                                                    <Grid item xs={3} className="padding-3 padding-zero">
                                                        {/*<CSSAnimation timeoutEnter={800} timeoutExit={200} classNames="slide-in-from-bottom">*/}
                                                        {/*    <Grid container justifyContent="center">*/}
                                                        {/*        <Grid item xs={12} className="text-center">*/}
                                                        {/*            <InfinateGradation scale={10}*/}
                                                        {/*                               color1="#c0c0c0"*/}
                                                        {/*                               color2={BodyItems[id].backGroundColor}*/}
                                                        {/*                               color3="#c0c0c0"*/}
                                                        {/*                               style={{border: "none"}}*/}
                                                        {/*            >*/}
                                                        {/*                <div*/}
                                                        {/*                    key={id}*/}
                                                        {/*                    ref={navRef.current[id]}*/}
                                                        {/*                    id={"nav-" + item.pageName}*/}
                                                        {/*                    style={{*/}
                                                        {/*                        borderColor: "#808080",*/}
                                                        {/*                    }}*/}
                                                        {/*                    onMouseEnter={() => handleMouseEnter(id)}*/}
                                                        {/*                    onMouseLeave={() => handleMouseLeave(id)}*/}
                                                        {/*                    onClick={() => scrollToView(id)}*/}
                                                        {/*                    className="icon-navbar-button"*/}
                                                        {/*                >*/}
                                                        {/*                    <img src={item.navIcon}*/}
                                                        {/*                         className="icon-navbar-item"*/}
                                                        {/*                         alt={item.pageName}/>*/}
                                                        {/*                    <p className="text-navbar">{item.pageName}</p>*/}
                                                        {/*                </div>*/}
                                                        {/*            </InfinateGradation>*/}
                                                        {/*        </Grid>*/}
                                                        {/*    </Grid>*/}
                                                        {/*</CSSAnimation>*/}
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" style={{paddingTop: heightState * 0.1}} id="nav-item-trigger">
                                    <Grid item xs={12} className="content-flex-center">
                                        <InfinateUpDown scale={20}>
                                            <div className="content-flex-center">
                                                <CSSAnimation timeoutEnter={2000} timeoutExit={200}
                                                              classNames="fade-in">
                                                    <img src={ArrowDownScroll} className="icon-scroll-arrow-down"
                                                         alt="scroll" onClick={() => scrollToView(0)}/>
                                                </CSSAnimation>
                                            </div>
                                        </InfinateUpDown>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </InfinateGradation>

                    <Grid container justifyContent="center">
                        {BodyItems.map((item, id) => {
                            return (
                                <>
                                    {/*トピックのアイコン*/}
                                    <Grid item xs={1}
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
                                                     style={{marginTop: "5rem"}}
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
                                        <Grid container justifyContent="center">
                                            <ScrollFader timeoutEnter={150} timeoutExit={1000}>
                                                <Grid item xs={12}>
                                                    <div className="content-body background-content"
                                                         style={{marginTop: "5rem"}}>
                                                        {item.pageName === "about" ? <About/> : ''}
                                                        {item.pageName === "skillSet" ? <SkillSet/> : ''}
                                                        {item.pageName === "works" ? <Work/> : ''}
                                                        {item.pageName === "contact" ? <Contact/> : ''}
                                                    </div>
                                                </Grid>
                                            </ScrollFader>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>

                    <div className={"text-right margin-top-10"}>
                        <Typography component="p" variant="body1" textAlign="center">
                            thank you for your coming !!
                        </Typography>
                    </div>

                </NavAnimation>
                {/*</div>*/}
            </IsPc>

            {/* Mobile端末 */}
            <IsMobile>
                {document.addEventListener('scroll', onScroll)}
                <Grid container justifyContent="center"
                      style={{
                          backgroundColor: "black",
                          color: "white",
                          height: '15vh',
                          position: "fixed",
                          top: "0",
                          zIndex: "10"
                      }}
                      className="text-center"
                >
                    <Grid item xs={12}>
                        <h1 style={{fontSize: "1.5rem"}}>Masafumi Yamashita</h1>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center">

                    <Grid item xs={1}
                          id="home"
                          className="text-center"
                          style={{backgroundColor: "black", color: "white"}}
                    />

                    {/*ボディ*/}
                    <Grid item xs={10}>
                        <Grid container justifyContent="center">
                            <Grid item xs={12}>

                                <InfinateGradation
                                    color1="#c0c0c0"
                                    color2={displayColorState}
                                    color3="#696969"
                                    scale={2}
                                    style={{
                                        width: `${widthState}`,
                                        height: '45vh',
                                        position: "sticky",
                                        top: "0",
                                        border: "none"
                                    }}>

                                    <div
                                        style={{
                                            marginTop: "15vh",
                                            backgroundImage: `url(${HomeMobile})`,
                                            backgroundRepeat: 'no-repeat',
                                            width: `${widthState}`,
                                            height: '65vh',
                                            position: "sticky",
                                            top: "0",
                                        }}
                                    >
                                        <Grid container justifyContent="center" className="content-title" id="home">
                                            <Grid item xs={12} style={{height: "5rem", marginTop: "3rem"}}>
                                                <CSSAnimation timeoutEnter={500} timeoutExit={200} classNames="fade-in">
                                                    <h2 style={{fontFamily: "Noto Serif JP"}}>I'm a Web Developer</h2>
                                                </CSSAnimation>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </InfinateGradation>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} style={{backgroundColor: "black", color: "white"}}>
                    </Grid>

                    {BodyItems.map((item, id) => {
                        return (
                            <>
                                <Grid item xs={1}
                                      id={item.pageName}
                                      key={id}
                                      ref={ref.current[id]}
                                      className="text-center"
                                      style={{backgroundColor: "black", color: "white"}}
                                />

                                {/*ボディ*/}
                                <Grid item xs={10}>
                                    <Grid container justifyContent="center">
                                        {/*<ScrollFader timeoutEnter={150} timeoutExit={1000}>*/}
                                        <Grid item xs={12}>
                                            <div className="content-body padding-3"
                                                 style={{marginTop: "5rem"}}>
                                                {item.pageName === "about" ? <About/> : ''}
                                                {item.pageName === "skillSet" ? <SkillSet/> : ''}
                                                {item.pageName === "works" ? <Work/> : ''}
                                                {item.pageName === "contact" ? <Contact/> : ''}
                                            </div>
                                        </Grid>
                                        {/*</ScrollFader>*/}
                                    </Grid>
                                </Grid>
                                <Grid item xs={1} style={{backgroundColor: "black", color: "white"}}>
                                </Grid>
                            </>
                        );
                    })}
                </Grid>

                <Grid container justifyContent="center"
                      style={{
                          backgroundColor: "black",
                          color: "white",
                          height: '26vh',
                          position: "fixed",
                          top: "68vh",
                          zIndex: "10"
                      }}
                      className="text-center"
                >

                    {/*タイトル*/}
                    <Grid container justifyContent="center" style={{height: '5vh', padding: "0"}}>
                        <Grid item xs={12}>
                            <h4>
                                {typeof activeIdState === 'number' ? BodyItems[activeIdState].pageName : 'hone'}
                            </h4>
                                {/*{ activeIdState!==undefined ? BodyItems[activeIdState].pageName : 'home'}*/}
                                {/*{getActiveElementName()}*/}
                                {/*{getActiveElementId()}*/}
                        </Grid>
                    </Grid>

                    {/*スライダー*/}
                    <Grid container justifyContent="center" style={{height: '7vh', padding: "0.5rem"}}>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                aria-label="Temperature"
                                onChange={handleSliderChange}
                                defaultValue={0}
                                valueLabelDisplay="auto"
                                // step={1}
                                marks
                                min={0}
                                max={document.documentElement.getBoundingClientRect().height - window.innerHeight}
                            />
                        </Grid>
                        <Grid item xs={1}/>
                    </Grid>

                    {/*コントロール*/}
                    <Grid container justifyContent="center" style={{height: "25vh", padding: "0", backgroundColor: "black"}}>
                        <Grid item xs={2}>
                            <ShareIcon/>
                        </Grid>
                        <Grid item xs={2}>
                            <img
                                src={MobileLeft}
                                style={{height: "5vh", margin: "0"}}
                                onClick={()=>scrollToView(activeIdState!==undefined && BodyItems[activeIdState - 1] ? activeIdState - 1 : null )}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <img
                                src={FoxLogo}
                                style={{height: "7vh", margin: "0"}}
                                onClick={()=>scrollToView(null)}
                            />

                        </Grid>
                        <Grid item xs={2}>
                            <img
                                src={MobileRight}
                                style={{height: "5vh", margin: "0"}}
                                onClick={()=>scrollToView(activeIdState!==undefined && BodyItems[activeIdState + 1] ? activeIdState + 1 : 0 )}
                            />

                        </Grid>
                        <Grid item xs={2}>
                            <MenuIcon/>
                        </Grid>
                    </Grid>
                </Grid>
            </IsMobile>
        </>
    );
};