import React from 'react';
import { useEffect, useState } from "react";

/**
 * [機能説明]
 * スクロールの位置を取得するコンポーネント
 */

const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const PositionUp = () => {
            setScrollPosition(window.pageYOffset);
        }

        window.addEventListener("scroll", PositionUp);
        PositionUp();

        return () => window.removeEventListener("scroll", PositionUp);
    }, []);

    return scrollPosition;
};

export default useScroll;