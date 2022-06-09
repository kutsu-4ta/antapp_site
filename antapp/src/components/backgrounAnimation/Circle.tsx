import React, {useState, ReactNode} from 'react'
import {CSSTransition} from 'react-transition-group';
import './style.css';

type UseStyleCircles = () => JSX.Element;
const useStyledCircle: UseStyleCircles = () => {
    //マウントの状態を管理
    const [mount, setMount] = useState(false);

    return (
        <div>
            <CSSTransition
                in={true}
                timeout={{
                    enter: 0,
                    exit: 500
                }}
                // mountOnEnter
                unmountOnExit
                classNames='ball-one'
            >
                <p></p>
            </CSSTransition>
        </div>
    )
}
export default useStyledCircle;