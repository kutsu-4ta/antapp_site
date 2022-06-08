import React, {ReactNode} from 'react';
import './style.css'

interface Props {
    children: ReactNode;
}

type StyleHeading = (props: Props) => JSX.Element;
const styledHeading:StyleHeading = (props: Props) => {
    return(
        <>
            <h1 className={'title-main'}>
                {props.children}
            </h1>
        </>
    );
}

export default styledHeading;