import styled, {keyframes} from "styled-components";
import {ReactNode} from "react";
import Grid from "@mui/material/Grid";

interface Props {
    children: ReactNode;
    scale: number;
}
type InfinateUpDownType = (props:Props) => JSX.Element;
const InfinateUpDown: InfinateUpDownType = (props) => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <InfinateUpDownStyle scale={props.scale}>
                    {props.children}
                </InfinateUpDownStyle>
            </Grid>
        </Grid>
    );
}

const UpDown = () => {
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
const InfinateUpDownStyle = styled.div<Pick<Props, 'scale'>>`
  position: relative;
  animation: ${ UpDown}  2s ease infinite;
`

export default InfinateUpDown;