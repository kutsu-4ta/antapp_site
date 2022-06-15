import styled, {keyframes} from "styled-components";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    scale: number;
}
type ArrowUpDown = (props:Props) => JSX.Element;
const arrowUpDown: ArrowUpDown = (props) => {
    return (
        <div>
            <InfinateArrownUpDown scale={2}>
                {props.children}
            </InfinateArrownUpDown>
        </div>
    );
}

const ArrowUpDown = () => {
    return (
        keyframes`
          0% {
            top: 0px;
          }
          50% {
            top: -7px;
          }
          100% {
            top: 0px;
          }
        `
    );
};

// TODO:scaleをpropsで渡せるようにしたい 2sのところ
const InfinateArrownUpDown = styled.span<Pick<Props, 'scale'>>`
  position: relative;
  animation: ${ArrowUpDown}  2s ease infinite;
`

export default arrowUpDown;