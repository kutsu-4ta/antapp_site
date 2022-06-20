import React, {useState, useEffect, ReactNode} from 'react'
import {CSSTransition} from 'react-transition-group';
import './style.css';

type UseLineAnimation = () => JSX.Element;
const useLineAnimation: UseLineAnimation = () => {
    //マウントの状態を管理
    const [mount, setMount] = useState(false);

    // コンポーネントのマウント時にだけ実行
    useEffect(() => {
        // Update the document title using the browser API
        setMount(true);
    });

    return (
        <div>
            <CSSTransition
                in={mount}
                timeout={{
                    enter: 0,
                    exit: 500
                }}
                mountOnEnter
                classNames="line-verical"
            >
            </CSSTransition>
        </div>
    )
};

export default useLineAnimation;