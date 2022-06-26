import React, {useState, useEffect, ReactNode} from 'react'
import {CSSTransition} from 'react-transition-group';
import './style.css';
import styled, {keyframes} from "styled-components";

type UseTriangleAnimation = () => JSX.Element;

export const UseTriangleAnimation: UseTriangleAnimation = () => {
    //マウントの状態を管理
    const [mount, setMount] = useState(false);

    // コンポーネントのマウント時にだけ実行
    useEffect(() => {
        // Update the document title using the browser API
        setMount(true);
    });

    const TriangleAnimation = () => {
        return (
            keyframes`
              0% {
                border-right: 0px solid transparent;
              }
              100% {
                   border-right: ${window.innerWidth -20 + "px"} solid transparent;
              }
            `
        );
    };

    const Triangle = styled.div`
      border-top: ${() => window.innerHeight * 0.5 + "px"} solid #f2ff54; /* 高さ */
      border-bottom: ${() => window.innerHeight - window.innerHeight * 0.5 + "px"} solid #f2ff54; /* 高さ */
      border-right: ${() => window.innerWidth - 20 + "px"} solid transparent; /* スクロールバーの幅20px引いてる */
      animation: ${() => TriangleAnimation} 500ms ease-in;
      //background-color: #4f5045;

      position: absolute;
      z-index: -1;
    `

    const Background = styled.div`
      background-color: #4f5045;
    `

    // NOTE:高さと幅のみ画面サイズを取りたいのでコールバックで書き換える
    const callBacks = {
        onEnter: () => {
            console.log('enter')
        },
        onEntered: () => {
            console.log('entered')
        },
        onExit: () => {
            console.log('exit')
        },
        onExited: () => {
            console.log('exited')
        }
    };

    return (
        <>
            <CSSTransition
                in={mount}
                timeout={{
                    enter: 0,
                    exit: 500
                }}
                mountOnEnter
                classNames="rectangular-triangle"
            >
                <Triangle/>
            </CSSTransition>
        </>
    )
};