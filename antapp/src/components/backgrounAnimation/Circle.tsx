import React, {useState, ReactNode} from 'react'
import {CSSTransition} from 'react-transition-group';
// import {TransitionGroup, CSSTransition} from 'react-transition-group';
// import {TransitionStatus, CSSTransition} from 'react-transition-group';
// import Styled from 'styled-components';
import './style.css';

interface Props {
    children: ReactNode;
}
//
// const Sample = (props:Props)=> {
//     return (
//         <CSSTransition
//             in={props.open}
//             timeout={500}
//             unmountOnExit
//         >
//             <>{props.children}</>
//             {/*{state => (*/}
//             {/*    <Inner state={state}>*/}
//             {/*        {props.children}*/}
//             {/*    </Inner>*/}
//             {/*)}*/}
//         </CSSTransition>
//     );
// };
// export default Sample;


// 前のやつ
// const containerStyle = {
//     position: 'relative',
//     widthL: '3rem',
//     height: '3rem'
// };

const useStyledCircle = (props: Props) => {
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