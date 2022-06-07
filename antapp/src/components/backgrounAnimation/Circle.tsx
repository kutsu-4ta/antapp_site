import React, {useState, ReactNode} from 'react'
import {CSSTransition} from 'react-transition-group';
import './style.css';

interface Props {
    children: ReactNode;
}
type UseStyleCircles = (props: Props) => JSX.Element;
const useStyledCircle: UseStyleCircles = (props: Props) => {
    //マウントの状態を管理
    const [mount, setMount] = useState(false);

    return (
        <div>
            <button onClick={() => setMount(!mount)} className='btn-primary'>click me !!!!</button>
            <div className='title-main'> {props.children}</div>
            <CSSTransition
                in={mount}
                timeout={{
                    enter: 0,
                    exit: 500
                }}
                // unmountOnExit
                classNames='ball-one'
            >
                <p></p>
            </CSSTransition>
        </div>
    )
}
export default useStyledCircle;