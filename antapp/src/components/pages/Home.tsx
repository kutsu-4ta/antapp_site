import React, {useRef} from 'react';
import InfinateGradation from '../backgrounAnimation/InfinateGradation';
import InfinateUpDown from "../backgrounAnimation/InfinateUpDown";
import ScrollFader from '../scrollEvent/Fader';
import About from "./About";
import SkillSet from "./Skillset";
import Work from './Work';
import Contact from "./Contact";
import './style.css';

import HumanIcon from "../../assets/images/icons/about_human.svg";
import WorksIcon from "../../assets/images/icons/works_pc_phone.svg";
import ContactIcon from "../../assets/images/icons/contact_mail.svg";
import SkillSetIcon from "../../assets/images/icons/skillsets_dev.svg";
import ArrowDownScroll from "../../assets/images/icons/arrow_down_scroll.svg";
import Grid from "@mui/material/Grid";
import {Bars, Nav, NavLink, NavMenu} from "../navbar/NavbarElements";
import FoxLogo from "../../assets/images/fox-white.svg";

type BodyItem = {
    pageName: string;
    icon: any | undefined;
    backGroundColor: string;
};

const BodyItems: BodyItem[] = [
    {pageName: "about", icon: HumanIcon, backGroundColor: "green"},
    {pageName: "skillSet", icon: SkillSetIcon, backGroundColor: "red"},
    {pageName: "works", icon: WorksIcon, backGroundColor: "yellow"},
    {pageName: "contact", icon: ContactIcon, backGroundColor: "orange"}
];

export default () => {
    const ref = useRef(BodyItems.map(() => React.createRef<HTMLDivElement>()));

    const scrollToView = (id: number | undefined | null) => {
        id ? ref.current[id]!.current!.scrollIntoView({behavior: "smooth"}) : window.scroll({top: 0, behavior: 'smooth'})
    };

    const navItemStyle:string = ' border-bottom: solid;' + 'border-bottom-color: azure;' + 'height: 2.5rem;' + 'padding-bottom: 0.3rem;';
    const navItemStyleActive:string = 'border-bottom: solid;' + 'border-bottom-color: black;' + 'height: 3.0rem;' + 'padding-bottom: 0.3rem;';
    const handleMouseEnter = (id: number) => ref.current[id].current?.getAttribute('style') ? ref.current[id].current?.setAttribute('style',navItemStyleActive) : '';
    const handleMouseLeave = (id: number) => ref.current[id].current?.getAttribute('style') ? ref.current[id].current?.setAttribute('style',navItemStyle) : '';

    return (
        <>
            <InfinateGradation scale={4}>
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
                                                    style={{
                                                        paddingBottom: "0.3rem",
                                                        borderBottom: "solid",
                                                        borderColor: "azure",
                                                    }}
                                                    onMouseEnter={() => handleMouseEnter(id)}
                                                    onMouseLeave={() => handleMouseLeave(id)}
                                                    onClick={() => {
                                                        scrollToView(id)
                                                    }}
                                                >
                                                    <img src={item.icon} className="icon-navbar-item"
                                                         alt={item.pageName}/>
                                                    <span>{item.pageName}</span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </NavMenu>
                </Nav>
            </InfinateGradation>
            <div className="title-block" id="home">
                <h1>Web開発のご依頼をお待ちしております！</h1>
                <div>
                    <h2>事業内容</h2>
                </div>
                メモ：もうちょっとなんか書く<br/>
                メモ：もうちょっとなんか書く<br/>
                メモ：もうちょっとなんか書く<br/>
                メモ：もうちょっとなんか書く<br/>
                メモ：もうちょっとなんか書く<br/>
                メモ：もうちょっとなんか書く<br/>
                <InfinateUpDown scale={20}>
                    <div style={{
                        paddingTop: "5rem"
                    }}>
                        <img src={ArrowDownScroll} className="icon-sub-title" alt="scroll"/>
                    </div>
                </InfinateUpDown>
            </div>

            <div
                style={{backgroundColor: "rgb(238,228,194)", marginBottom: '10rem', marginTop: "22rem"}}
            >
                {BodyItems.map((item, id) => {
                    return (
                        <>
                            <Grid container
                                  justifyContent="center"
                                  id={item.pageName}
                                  key={id}
                                  ref={ref.current[id]}
                            >
                                <Grid item xs={2}
                                      style={{position: "sticky", top: "0"}}>
                                    <div style={{position: "sticky", top: "0"}}>
                                        {item.icon ? <div><img src={item.icon} className="icon-sub-title space-1-vertical " alt={item.pageName}/><h2 className="text-align-sub-title margin-top-zero padding-top-zero">{item.pageName}</h2></div> : ""}
                                    </div>
                                </Grid>

                                <Grid item xs={8}>
                                    <div className="margin-top-1">
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

                                <Grid item xs={2}
                                      style={{
                                          textAlign: "right",
                                          position: "sticky",
                                          top: "0"
                                      }}
                                >
                                    <div
                                        style={{
                                            position: "sticky",
                                            top: "50%",
                                            paddingRight: "50%"
                                        }}
                                        className="text-center"
                                    >
                                        {/* 次のページへスクロール */}
                                        {BodyItems[id + 1] ?
                                            <div className="line-vertical"
                                                 onClick={() => scrollToView(id + 1)}>{BodyItems[id + 1].pageName} </div>
                                            :
                                            <div className="line-vertical"
                                                 onClick={() => scrollToView(null)}> Top </div>
                                        }
                                        <InfinateUpDown scale={500}>
                                        </InfinateUpDown>
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
        </>
    );
};