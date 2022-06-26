/**
 * [説明] アニメーション
 *
 */
import {ReactNode, useEffect, useState} from "react";
import {CSSTransition} from 'react-transition-group';

const useDelay = (msec: number) => {
    const [waiting, setWaiting] = useState(true);

    useEffect(() => {
        setTimeout(() => setWaiting(false), msec)
    }, []);

    return waiting;
}

interface Props{
    children:ReactNode;
    classNames: string;
    timeoutEnter: number | undefined;
    timeoutExit: number | undefined;
}
export const CSSAnimation = (props: Props) => {
    const Enter:number = props.timeoutEnter ? props.timeoutEnter : 1000;
    const Exit:number = props.timeoutExit ? props.timeoutExit : 1000;

    return (
        <CSSTransition
            in={!useDelay(500)}
            mountOnEnter={true}
            timeout={{enter:Enter, exit: Exit}}
            classNames={props.classNames}
        >
            {props.children}
        </CSSTransition>
    );
}