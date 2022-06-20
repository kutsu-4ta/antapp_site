import styled, {keyframes} from "styled-components";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    scale: number;
}
type InfinateUpDown = (props:Props) => JSX.Element;
const infinateUpDown: InfinateUpDown = (props) => {
    return (
        <div>
            <InfinateArrownUpDown scale={props.scale}>
                {props.children}
            </InfinateArrownUpDown>
        </div>
    );
}

const InfinateUpDown = () => {
    return (
        keyframes`
          0% {
            top: 0px;
          }
          50% {
            top: -1rem;
          }
          100% {
            top: 0px;
          }
        `
    );
};

// FIXME:scaleをpropsで渡せるようにしたい 2sのところ
const InfinateArrownUpDown = styled.span<Pick<Props, 'scale'>>`
  position: relative;
  animation: ${InfinateUpDown}  2s ease infinite;
`

export default infinateUpDown;