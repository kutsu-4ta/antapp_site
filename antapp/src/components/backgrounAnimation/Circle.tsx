import React, {useState, useEffect, ReactNode} from 'react'
import {CSSTransition} from 'react-transition-group';
import './style.css';

interface Props {
    children: ReactNode;
}

type UseStyleCitcles = (props: Props) => JSX.Element;
const useStyledCircle: UseStyleCitcles = (props: Props) => {
    //マウントの状態を管理
    const [mount, setMount] = useState(false);

    // コンポーネントのマウント時にだけ実行
    useEffect(() => {
        // Update the document title using the browser API
        setMount(true);
    });

    return (
        <>
            <span>{props.children}
            <CSSTransition
                in={mount}
                timeout={{
                    enter: 0,
                    exit: 500
                }}
                mountOnEnter
                classNames='ball-one'
            >
                <p></p>
            </CSSTransition>
            </span>
        </>
    )
};

export default useStyledCircle;