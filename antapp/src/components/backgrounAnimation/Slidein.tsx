/**
 * [説明] アニメーション
 * スライドイン、フェードイン
 *
 */
import {ReactNode, useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import {CSSTransition} from 'react-transition-group';

// const useDelay = (animationType: string, msec:number) => {
//     const [waitingSlideIn, setWaitingSlideIn] = useState(true);
//     const [waitingFadeIn, setWaitingFadeIn] = useState(true);
//
//     useEffect(()=>{
//         switch (animationType) {
//             case "slideIn" :
//                 setTimeout(() => setWaitingSlideIn(false), msec);
//                 break;
//
//             case "fadeIn" :
//                 setTimeout(() => setWaitingFadeIn(false), msec);
//                 break;
//
//             default:
//                 break;
//         }
//     }, []);
//
//     switch (animationType){
//         case "slideIn" :
//             return waitingSlideIn;
//             break;
//
//         case "fadeIn" :
//             return waitingFadeIn;
//             break;
//
//         default:
//             break;
//     }
//     return false;
// }

const useDelay = (msec: number) => {
    const [waiting, setWaiting] = useState(true);

    useEffect(() => {
        setTimeout(() => setWaiting(false), msec)
    }, []);

    return waiting;
}

const SlideInFromBottomAnimation = () => {
    return (
        keyframes`
          0% {
            transform: translateY(300px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0.9;
          }
        `
    );
}

export const SlideInFromBottom = styled.div`
  position: absolute;
  opacity: 0.9;
  animation: ${() => SlideInFromBottomAnimation} 2s;
`
interface SlideProps{
    children:ReactNode;
}
export const SlideIn = (props: FadeProps) => {

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
        <CSSTransition
            in={!useDelay(1500)}
            mountOnEnter={true}
            timeout={{enter: 1000, exit: 2000}}
            classNames="slide-in-from-bottom"
            {...callBacks}
        >
            {props.children}
        </CSSTransition>
    );
}




interface FadeProps{
    children:ReactNode;
}
export const FadeIn = (props: FadeProps) => {
    return (
        <CSSTransition
            in={!useDelay(500)}
            mountOnEnter={true}
            timeout={{enter: 1000, exit: 2000}}
            classNames="fade-in"
        >
            {props.children}
        </CSSTransition>
    );
}