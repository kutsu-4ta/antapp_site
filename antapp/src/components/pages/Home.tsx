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

import React, {useRef} from 'react';
import Grid from "@mui/material/Grid";
import './style.css';
// スタイル
import InfinateGradation from '../backgrounAnimation/InfinateGradation';
import ScrollFader from '../scrollEvent/Fader';
import InfinateUpDown from "../backgrounAnimation/InfinateUpDown";
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
// ナビゲーションバー
import FoxLogo from "../../assets/images/fox-white.svg";
import HumanNavIcon from "../../assets/images/icons/human_small_white.svg";
import WorksNavIcon from "../../assets/images/icons/works_small_white.svg";
import ContactNavIcon from "../../assets/images/icons/mail_small_white.svg";
import SkillSetNavIcon from "../../assets/images/icons/skillset_small_white.svg";
import {Bars, Nav, NavLink, NavMenu} from "../navbar/NavbarElements";

type BodyItem = {
    pageName: string;
    icon: any | undefined;
    navIcon: any | undefined;
    backGroundColor: string;
};

const BodyItems: BodyItem[] = [
    {pageName: "about", icon: HumanIcon, navIcon: HumanNavIcon,backGroundColor: "#b4b44c"},
    {pageName: "skillSet", icon: SkillSetIcon, navIcon: SkillSetNavIcon,backGroundColor: "#ff7f50"},
    {pageName: "works", icon: WorksIcon, navIcon: WorksNavIcon,backGroundColor: "#4a9b9b"},
    {pageName: "contact", icon: ContactIcon, navIcon: ContactNavIcon,backGroundColor: "#2a6b23"}
];

export default () => {
    // ボディ
    const ref = useRef(BodyItems.map(() => React.createRef<HTMLDivElement>()));
    const scrollToView = (id: number | undefined | null) => id ? ref.current[id]!.current!.scrollIntoView({behavior: "smooth"}) : window.scroll({top: 0, behavior: 'smooth'});

    // ナビゲーションバー
    const navRef = useRef(BodyItems.map(() => React.createRef<HTMLDivElement>()));
    const navItemStyle:string = ' border-bottom: solid;' + 'border-bottom-color: azure;' + 'height: 2.5rem;' + 'padding-bottom: 0.3rem;';
    const navItemStyleActive:string = 'border-bottom: solid;' + 'border-bottom-color: black;' + 'height: 3.0rem;' + 'padding-bottom: 0.3rem;';
    const handleMouseEnter = (id: number) => navRef.current[id].current?.getAttribute('style') ? navRef.current[id].current?.setAttribute('style',navItemStyleActive) : '';
    const handleMouseLeave = (id: number) => navRef.current[id].current?.getAttribute('style') ? navRef.current[id].current?.setAttribute('style',navItemStyle) : '';

    return (
        <>
            <InfinateGradation scale={4} >
                <Nav>
                    <NavLink to="/">
                        <img src={FoxLogo} className="icon-navbar-logo" alt="antapp"/>
                    </NavLink>
                    <Bars/>
                    <NavMenu>
                        {BodyItems.map((item, id) => {
                            return (
                                <div>
                                    <NavLink to={item.pageName}>
                                        <Grid container justifyContent="center">
                                            <Grid item xs={12} className="text-center">
                                                <div
                                                    key={id}
                                                    ref={navRef.current[id]}
                                                    id={"nav-" + item.pageName}
                                                    style={{
                                                        paddingBottom: "0.3rem",
                                                        border: "solid",
                                                        backgroundColor: item.backGroundColor,
                                                        opacity: "0.9",
                                                        paddingInline: "1rem",
                                                        // borderBottom: "solid",
                                                        borderColor: "azure"
                                                    }}
                                                    onMouseEnter={() => handleMouseEnter(id)}
                                                    onMouseLeave={() => handleMouseLeave(id)}
                                                    onClick={() => scrollToView(id)}
                                                >
                                                    <img src={item.navIcon} className="icon-navbar-item" alt={item.pageName}/>
                                                    <span className="text-navbar">{item.pageName}</span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </NavMenu>
                </Nav>

            <Grid container justifyContent="center" className="content-title" id="home">
                <Grid item xs={12}>
                    <h1>Web開発のご依頼をお待ちしております！</h1>
                </Grid>
                <Grid item xs={2} className="text-center">
                </Grid>
                <Grid item xs={8} className="content-title-border text-center">
                    <h2>事業内容</h2>
                    <Grid container justifyContent="center" style={{marginBottom: "3rem"}}>
                        <Grid item xs={4} className="text-center">
                            <img src={HumanNavIcon} className="icon-content-top" alt={"webシステム"}/><br/>
                            <span>webシステム</span>
                        </Grid>
                        <Grid item xs={4} className="text-center">
                            <img src={WorksNavIcon} className="icon-content-top" alt={"LP、webサイト"}/><br/>
                            <span>LP・webサイト</span>
                        </Grid>
                        <Grid item xs={4} className="text-center">
                            <img src={SkillSetNavIcon} className="icon-content-top" alt={"スマホアプリ"}/><br/>
                            <span>スマートフォンアプリ</span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} className="text-center">
                </Grid>
            </Grid>
                <Grid container justifyContent="center">
                    <InfinateUpDown scale={20}>
                        <div style={{
                            paddingTop: "5rem"
                        }}>
                            <img src={ArrowDownScroll} className="icon-sub-title" alt="scroll"/>
                        </div>
                    </InfinateUpDown>
                </Grid>
            <div
                style={{backgroundColor: "rgb(238,228,194)"}}
            >
                {BodyItems.map((item, id) => {
                    return (
                        <>
                            <Grid container
                                  justifyContent="center"
                                  id={item.pageName}
                                  key={id}
                                  ref={ref.current[id]}
                                  style={{
                                      border: "solid",
                                      borderBottom: "black"
                                  }}
                            >
                                <Grid item xs={2}
                                      style={{position: "sticky", top: "0"}}>
                                    <div style={{position: "sticky", top: "0"}}>
                                        {item.icon ? <div><img src={item.icon} className="icon-sub-title space-1-vertical " alt={item.pageName}/><h2 className="text-align-sub-title margin-top-zero padding-top-zero">{item.pageName}</h2></div> : ""}
                                    </div>
                                </Grid>

                                <Grid item xs={8}>
                                    <div className="content-body">
                                        <ScrollFader timeout={500}>
                                            <div>
                                                {item.pageName === "about" ? <About/> : ''}
                                                {item.pageName === "skillSet" ? <SkillSet/> : ''}
                                                {item.pageName === "works" ? <Work/> : ''}
                                                {item.pageName === "contact" ? <Contact/> : ''}
                                            </div>
                                        </ScrollFader>
                                    </div>
                                </Grid>

                                <Grid item xs={2}>
                                    <div style={{position: "sticky", top: "0", paddingLeft: "5rem"}} className="text-center">
                                        {/* 次のページへスクロール */}
                                        {BodyItems[id + 1] ?
                                            <Grid container justifyContent="center" style={{position: "sticky", top: "20px", paddingBottom:"3rem", marginTop:"3rem"}}>
                                                <Grid item xs={12} className="text-right line-vertical" style={{paddingRight:"2rem", paddingBottom:"1rem", backgroundColor:item.backGroundColor, opacity: "0.5"}} onClick={() => scrollToView(id + 1)}>next is <br/>{BodyItems[id + 1].pageName}</Grid>
                                            </Grid>
                                            :
                                            <Grid container justifyContent="center" style={{position: "sticky", top: "20px", paddingBottom:"3rem", marginTop:"3rem"}}>
                                                <Grid item xs={12} className="text-right line-vertical" style={{paddingRight:"2rem", paddingBottom:"1rem", opacity: "0.5"}} onClick={() => scrollToView(null)}>back to<br/>top</Grid>
                                            </Grid>
                                        }

                                        {BodyItems[id - 1] ?
                                            <Grid item xs={12} className="text-left" style={{position: "sticky", top: "0", paddingTop: "10rem", paddingLeft:"2rem"}}>
                                                <div style={{paddingBottom:"1rem", backgroundColor:item.backGroundColor, opacity: "0.5"}}  onClick={() => scrollToView(id - 1)}>back to<br/>{BodyItems[id - 1].pageName}</div>
                                            </Grid>
                                            :
                                            <Grid item xs={12} className="text-left" style={{position: "sticky", top: "0", paddingTop: "10rem", paddingLeft:"2rem", backgroundColor:item.backGroundColor, opacity: "0.5"}}>
                                                <div style={{paddingBottom:"1rem"}}  onClick={() => scrollToView(null)}>back to<br/>top</div>
                                            </Grid>
                                        }
                                    </div>
                                </Grid>
                            </Grid>
                        </>
                    );
                })}
                <div className={'text-right'}>
                    うんち<br/>
                    うんこ<br/>
                    絶滅危惧種レッドリスト認定うんこ
                </div>
            </div>
            </InfinateGradation>
        </>
    );
};