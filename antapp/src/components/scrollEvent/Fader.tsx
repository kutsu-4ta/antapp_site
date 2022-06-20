/**
 * [機能説明]
 * フェードイン、フェードアウトするコンポーネント
 */

/**
 * HACK: 96行目 リファクタリングが必要.
 * CSSTransitionのトランジションでvisibilityが使えずopacityしか使えなかったので高さを残して非表示ができなかった.
 * スクロールの実装の関係で,レンダリング時に全要素を展開した時の高さを知っておく必要があったので,
 * 高さ確保のために本命が非表示の時にvisibilityでダミーのデータを描画させて対処.苦肉の策です.
 * 汚い実装なので,いい方法を思いついたらリファクタリングする。
 */

import React, {ReactNode, useEffect, useState, RefObject } from 'react';
import {CSSTransition} from 'react-transition-group';
import './style.css';

// TODO:ファイル切り分ける
type UseObserver = (ref?: RefObject<HTMLDivElement>, options?: IntersectionObserverInit ) => boolean;
export const useObserver: UseObserver = (ref?: RefObject<HTMLDivElement>, options?: IntersectionObserverInit) => {
    const [intersect, setIntersect] = useState<boolean>(false);

    useEffect(() => {
        function callback(entries: IntersectionObserverEntry[]) {
            entries.forEach(entry => {
                setIntersect(entry.isIntersecting);
            });
        }

    const options = {
        // root: null,
        rootMargin: '-10% 0% -30% 0%', // (top, right, bottom, left)
        threshold: 0.4
    }

        const observer = new IntersectionObserver(callback, options);

        if ((ref?.current === null) || (ref?.current === undefined)) {
            return;
        }

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
    timeout?: number | undefined;
}

type UseScrollFader = (props: Props, timeout:Props) => JSX.Element;
const useScrollFader: UseScrollFader = (props:Props)  => {

    const myRef = React.useRef<HTMLDivElement >(null)
    // myRefを監視
    const intersect = useObserver(myRef);

    // NOTE:デバッグ用
    // const callBacks = {
    //     onEnter: () => {
    //         console.log('enter')
    //         console.log(myRef.current?.children)
    //         console.log()
    //     },
    //     onEntered: () => {
    //         console.log('entered')
    //         console.log(myRef.current?.children)
    //     },
    //     onExit: () => {
    //         console.log('exit')
    //         console.log(myRef.current?.children)
    //     },
    //     onExited: () => {
    //         console.log('exited')
    //         console.log(myRef.current?.children)
    //     }
    // };

    return (
        <>
            <div ref={myRef}>
                {/* ダミーのデータ */}
                <CSSTransition
                    style={{
                        visibility: "hidden"
                    }}
                    in={intersect}
                    timeout={{enter: 100, exit: 100}}
                    unmountOnExit={false}
                    classNames="unvisible"
                >
                    {props.children}
                </CSSTransition>
                {/* 本命データ */}
                <CSSTransition
                    in={intersect}
                    timeout={{enter: 300, exit: 300}}
                    mountOnEnter={true}
                    classNames='fader'
                >
                    {props.children}
                </CSSTransition>
            </div>
        </>
    )
}

export default useScrollFader;