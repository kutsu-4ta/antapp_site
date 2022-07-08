/**
 * [説明] なんちゃってロード
 * 特にロードを使うタイミングがないので、ページにアクセスした際の読み込み時に擬似的にローディングさせる。
 */


import React, { useState, useEffect, VFC, ReactNode } from 'react'
import Grid from "@mui/material/Grid";
import FoxLogo from "../../assets/images/fox-white.svg";
import { CSSTransition } from 'react-transition-group';
import styled, { keyframes } from "styled-components";
import './styles.css';

type Props = {
    isLoading?: boolean;
    children: ReactNode | null;
    message: string;
};

const Loading: VFC<Props> = ({isLoading = true, message= 'loading...', children = null }) => {
    return (
        <>
            {
                isLoading ?
                    <Grid container justifyContent="center">
                        <Grid item xs={12} className="text-center">
                            <UseAnimation message={message}/>
                        </Grid>
                    </Grid> :
                    children? children : ''
            }
        </>
    );
}

export default Loading;



interface UseAnimationProps {
    message: string;
}
type UseAnimation = (props: UseAnimationProps) => JSX.Element;
export const UseAnimation: UseAnimation = (props) => {
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    });

    const lineAnimation = () => {
        return (
            keyframes`
              0% {
                width: 0%;
                transform: translateX(${window.innerWidth * 0.5 + "px"});
              }
              10% {
                width: 100%; 
              }
              100% {
                width: 0%;
              }
            `
        );
    };

    const Line = styled.div`
      animation: ${() => lineAnimation} 1500ms ease-in;
      width: 0%;
      content: '';
      left: 0%;
      bottom: 0;
      border-bottom: solid 4px #abe1ff;
      text-align: center;
      font-size: 18px;
      z-index: -1;
    `

    const LineBlack = styled.div`
      animation: ${() => lineAnimation} 1500ms ease-in;
      width: 0%;
      content: '';
      left: 0%;
      bottom: 0;
      border-bottom: solid 1px #000000;
      text-align: center;
      font-size: 18px;
      z-index: -1;
    `

    const logoAnimation = () => {
        return (
            keyframes`
              0% {
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              80% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            `
        );
    };

    const Logo = styled.div`
      animation: ${() => logoAnimation} 2000ms ease-in;
      opacity: 0;
      z-index: 2;
    `

    return (
        <>
            <CSSTransition
                in={mount}
                timeout={{
                    enter: 1,
                    exit: 500
                }}
                mountOnEnter
                classNames="fade-in">
                <Logo>
                    <Grid container spacing={10} justifyContent="center">
                        <Grid item xs={12} className="text-center">
                        </Grid>
                        <Grid item xs={12} className="text-center">
                        </Grid>
                        <Grid item xs={12} className="text-center">
                        </Grid>
                        <Grid item xs={12} className="text-center">
                            <img src={FoxLogo} className="icon-logo"/>
                            <p>{props.message}</p>
                        </Grid>
                    </Grid>
                </Logo>
            </CSSTransition>
            <Line/>
            <LineBlack/>
        </>
    );
};