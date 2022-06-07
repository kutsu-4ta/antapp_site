/**
 * [機能説明]
 * フェードイン、フェードアウトするコンポーネント
 */

import React, {ReactNode} from "react";
import UseScroll from '../Utility/UseScroll';

interface Props {
    children: ReactNode;
    threshold?: number | undefined;
}


type ScrollFader = (props: Props) => JSX.Element;
const scrollFader: ScrollFader = (props: Props)  => {
    // スクロール位置取得
    const scrollPosition: number = UseScroll();
    console.log(scrollPosition);

    // TODO:スクロールの画面のyの閾値表示を定義
    let threshold: number | undefined = props.threshold;

    if (threshold === undefined) {
        threshold = 300;
    }

    console.log(window.innerHeight);
    console.log(props.threshold)

    return (
        <>
            {scrollPosition > threshold ? <div>{props.children}</div>: ''}
        </>
    )
}

export default scrollFader;

