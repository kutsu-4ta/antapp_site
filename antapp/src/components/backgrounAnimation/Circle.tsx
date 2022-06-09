import React, {useState, useEffect, ReactNode} from 'react'
import {CSSTransition} from 'react-transition-group';
import './style.css';
import Button from '@mui/material/Button'

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
            <h1>{props.children}</h1>
            <CSSTransition
                in={mount}
                timeout={{
                    enter: 0,
                    exit: 500
                }}
                unmountOnExit
                classNames='ball-one'
            >
                <p></p>
            </CSSTransition>
        </>
    )
};

export default useStyledCircle;