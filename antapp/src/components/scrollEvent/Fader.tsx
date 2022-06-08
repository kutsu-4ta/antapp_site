/**
 * [機能説明]
 * フェードイン、フェードアウトするコンポーネント
 */
import React, {ReactNode, useEffect, useState, RefObject } from 'react';
import {CSSTransition} from 'react-transition-group';
import './style.css';


type UseObserver = (ref?: RefObject<HTMLDivElement>, options?: IntersectionObserverInit ) => boolean;
const useObserver: UseObserver = (ref?: RefObject<HTMLDivElement>, options?: IntersectionObserverInit) => {
    const [intersect, setIntersect] = useState<boolean>(false);

    useEffect(() => {
        function callback(entries: IntersectionObserverEntry[]) {
            entries.forEach(entry => {
                setIntersect(entry.isIntersecting);
            });
        }

    const options = {
        root: null,
        threshold: [0.7, 0.7],
    }

        const observer = new IntersectionObserver(callback, options);

        if ((ref?.current === null) || (ref?.current === undefined)) {
            return;
        }

        // TODO: 間抜けな書き方しているので直す
        const myRef = typeof ref?.current !== undefined ? ref : undefined;
        const myRefCurrent = myRef !== undefined ? myRef.current : undefined;

        if (( myRefCurrent !== undefined ) && ( myRefCurrent !== null )) {
            observer.observe(myRefCurrent);
        }

        return () => {
            if (ref?.current !== null) {
                if (( myRefCurrent !== undefined ) && ( myRefCurrent !== null )) {
                    observer.unobserve(myRefCurrent);
                }
            }
        };
    });
    return intersect;
}

interface Props {
    children: ReactNode;
}

type UseScrollFader = (props: Props) => JSX.Element;
const useScrollFader: UseScrollFader = (props: Props, ref?: React.LegacyRef<HTMLDivElement> | undefined)  => {

    const myRef = React.useRef<HTMLDivElement >(null)
    // myRefを監視
    const intersect = useObserver(myRef);

    return (
        <>
            <div ref={myRef}></div>
            <CSSTransition
                in={intersect}
                timeout={{
                    enter: 50,
                    exit: 50
                }}
                mountOnEnter
                classNames='fader'
            >
                {props.children}
            </CSSTransition>
        </>
    )
}

export default useScrollFader;