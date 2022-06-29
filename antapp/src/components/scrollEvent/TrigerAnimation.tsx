/**
 * [説明]
 * ちゃんと動くが、とりあえず使い所が思いつかなかったので、放置
 *
 */

import React, {ReactElement, ReactNode, useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

interface Props {
    children: ReactNode;
}
 type NavAnimationType = (props: Props) => JSX.Element
export const NavAnimation: NavAnimationType = (props: Props): ReactElement => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        setNavAnimation();
        setMobileNavAnimation();
    }, []);

    type SetNavAnimation = () => void
    const setNavAnimation: SetNavAnimation = () => {
        gsap.fromTo(
            '#nav-item-target', // 動かしたい要素のid
            {   // fromの設定
                // x: (window.innerWidth - 50) * 0.5 - 30
                x: 0
            },
            {   // toの設定
                scrollTrigger: {
                    trigger: '#nav-item-trigger', // この要素がviewPortに入ったときに発火
                    start: 'bottom center', // 開始位置
                    // scrub: true, // スクロールに追従
                    // markers: true, // 確認
                    // onEnter: () => {
                    //     console.log('scroll In')
                    // },
                    // onEnterBack: () => {
                    //     console.log('scroll Back')
                    // },
                    toggleActions: 'play none none reverse'
                },
                x: - window.innerWidth
            }
        );
    }

    type SetMobileNavAnimation = () => void
    const setMobileNavAnimation: SetMobileNavAnimation = () => {
        gsap.fromTo(
            '#mobile-nav-item-target',
            {   // fromの設定
                x: 0
            },
            {   // toの設定
                scrollTrigger: {
                    trigger: '#mobile-nav-item-trigger',
                    start: 'bottom center',
                    // scrub: true,
                    // markers: true,
                    onEnter: () => {
                        console.log('scroll In')
                    },
                    onEnterBack: () => {
                        console.log('scroll Back')
                    },
                    toggleActions: 'play none none reverse'
                },
                x: 140
            }
        );
    }
    return (
        <div className="front-animation-wrapper">
            {props.children}
        </div>
    );
}

interface AnimationProps {
    children: ReactNode;
    target: string;
    trigger: string;
}

type ScrollAnimation = (props: AnimationProps) => JSX.Element
export const ScrollAnimation: ScrollAnimation = (props: AnimationProps): ReactElement => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        setNavItemActive();
        setAbout();
        setSkillSet();
        setWorks();
        setContact();
    }, []);

    type SetNavItemActive = () => void
    const setNavItemActive: SetNavItemActive = () => {
        gsap.fromTo(
            '#' + props.target, // 動かしたい要素のid
            {   // fromの設定
                borderColor: "#a1a0a0",
                x: 0,
            },
            {   // toの設定
                scrollTrigger: {
                    trigger: '#' + props.trigger, // この要素がviewPortに入ったときに発火
                    start: 'top center', // 開始位置
                    end: 'bottom center',
                    onEnter: () => {
                        console.log('アバウトIn')
                    },
                    onEnterBack: () => {
                        console.log('アバウトBack')
                    },
                    toggleActions: 'play none none reverse'
                },
                borderColor: "black",
                x: 10,
            }
        );
    }

    type SetAbout = () => void
    const setAbout: SetAbout = () => {
        if (props.target == 'aboutAnimation') {

            gsap.fromTo(
                '#' + props.target,
                {
                    rotation: 180,
                    width: 10,
                    height: 10,
                },
                {
                    scrollTrigger: {
                        trigger: '#' + props.trigger,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: true,
                        // markers: true,
                        onEnter: () => {
                            console.log('アバウトIn')
                        },
                        onEnterBack: () => {
                            console.log('アバウトBack')
                        },
                        toggleActions: 'play none none reverse'
                    },
                    borderColor: "black",
                    rotation: 360, // 開始〜終了までの回転
                    width: 100,
                    height: 100,
                    y: -100,
                }
            );
        }
    }

    type SetSkillSet = () => void
    const setSkillSet: SetSkillSet = () => {
        if (props.trigger == 'skillSet') {
            gsap.fromTo(
                '#' + props.target, // 動かしたい要素のid
                {   // fromの設定
                    borderColor: "#a1a0a0",
                    x: 0,
                },
                {   // toの設定
                    scrollTrigger: {
                        trigger: '#' + props.trigger, // この要素がviewPortに入ったときに発火
                        start: 'top center', // 開始位置
                        end: 'bottom center',
                        // scrub: true, // スクロールに追従
                        // markers: true, // 確認
                        onEnter: () => {
                            console.log('スキルセットin')
                        },
                        onEnterBack: () => {
                            console.log('スキルセットback')
                        },
                        toggleActions: 'play none none reverse'
                    },
                    borderColor: "black",
                    x: 10,
                    // rotation: 360, // 開始〜終了までの回転
                }
            );
        }
    }

    type SetWorks = () => void
    const setWorks: SetWorks = () => {
        if (props.trigger == 'works') {

            gsap.fromTo(
                '#' + props.target, // 動かしたい要素のid
                {   // fromの設定
                    borderColor: "#a1a0a0",
                    x: 0,
                    // backgroundAbout: "blue",
                },
                {   // toの設定
                    scrollTrigger: {
                        trigger: '#' + props.trigger, // この要素がviewPortに入ったときに発火
                        start: 'top center', // 開始位置
                        end: 'bottom center',
                        // scrub: true, // スクロールに追従
                        // markers: true, // 確認
                        onEnter: () => {
                            console.log('アバウトIn')
                        },
                        onEnterBack: () => {
                            console.log('アバウトBack')
                        },
                        toggleActions: 'play none none reverse'
                    },
                    borderColor: "black",
                    x: 10,
                    // rotation: 360, // 開始〜終了までの回転
                }
            );
        }
    }

    type SetContact = () => void
    const setContact: SetAbout = () => {
        if (props.trigger == 'contact') {

            gsap.fromTo(
                '#' + props.target, // 動かしたい要素のid
                {   // fromの設定
                    borderColor: "#a1a0a0",
                    x: 0,
                    // backgroundAbout: "blue",
                },
                {   // toの設定
                    scrollTrigger: {
                        trigger: '#' + props.trigger, // この要素がviewPortに入ったときに発火
                        start: 'top center', // 開始位置
                        end: 'bottom center',
                        // scrub: true, // スクロールに追従
                        // markers: true, // 確認
                        onEnter: () => {
                            console.log('アバウトIn')
                        },
                        onEnterBack: () => {
                            console.log('アバウトBack')
                        },
                        toggleActions: 'play none none reverse'
                    },
                    borderColor: "black",
                    x: 10,
                    // rotation: 360, // 開始〜終了までの回転
                }
            );
        }
    }

    return (
        <div className="background-animation">
            {props.children}
        </div>
    );
}
