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
import ScrollMove from '../scrollEvent/Move';
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
        {/*<div style={{backgroundColor: "rgb(190,184,159)"}}>*/}
        <div>
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
                                                <img src={item.navIcon} className="icon-navbar-item"
                                                     alt={item.pageName}/>
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
                <Grid item xs={8} className="content-title-border">
                    <h2>事業内容</h2>
                    <Grid container justifyContent="center" style={{marginBottom: "2rem"}}>
                        <Grid item xs={4} className="text-center">
                            <img src={HumanIcon} className="icon-content-top" alt={"webシステム"}/><br/>
                            <span>webシステム（仮）</span>
                        </Grid>
                        <Grid item xs={4} className="text-center">
                            <img src={WorksIcon} className="icon-content-top" alt={"LP、webサイト"}/><br/>
                            <span>LP・webサイト（仮）</span>
                        </Grid>
                        <Grid item xs={4} className="text-center">
                            <img src={SkillSetIcon} className="icon-content-top" alt={"スマホアプリ"}/><br/>
                            <span>スマートフォンアプリ（仮）</span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} className="text-center">
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <InfinateUpDown scale={20}>
                    <div>
                        <img src={ArrowDownScroll} className="icon-scroll-arrow-down" alt="scroll"/>
                    </div>
                </InfinateUpDown>
            </Grid>

                <Grid container justifyContent="center">

                    <Grid item xs={10}>
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
                                                    <img src={item.icon} className="icon-topic" alt={item.pageName}/>
                                                    <h2 className="text-topic margin-top-zero padding-top-zero">
                                                        {item.pageName}
                                                    </h2>
                                                </div>
                                                :
                                                ""
                                            }
                                        </Grid>

                                        {/*ボディ*/}
                                        <Grid item xs={10}>
                                            <ScrollFader timeoutEnter={500} timeoutExit={500}>
                                                <div className="content-body">
                                                    {item.pageName === "about" ? <About/> : ''}
                                                    {item.pageName === "skillSet" ? <SkillSet/> : ''}
                                                    {item.pageName === "works" ? <Work/> : ''}
                                                    {item.pageName === "contact" ? <Contact/> : ''}
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
                            <ScrollMove timeoutEnter={2000} timeoutExit={2000}>
                                <Grid item xs={12} className="text-center">
                                    ああああ
                                </Grid>
                            </ScrollMove>
                            <Grid item xs={12} className="background-animation">
                                いいいい
                            </Grid>
                            <Grid item xs={12} className="text-center"　style={{position: "sticky", top: "34px"}}>
                                ううううう
                            </Grid>
                            <Grid item xs={12} className="text-center"　style={{position: "sticky", top: "51px", paddingTop: "30rem"}}>
                                ええええええ
                            </Grid>
                        </Grid>

                    </Grid>

                    <div className={'text-right'}>
                        うんち<br/>
                        うんこ<br/>
                        絶滅危惧種レッドリスト認定うんこ
                    </div>

                </Grid>
            </div>
            {/*</InfinateGradation>*/}
        </>
    );
};