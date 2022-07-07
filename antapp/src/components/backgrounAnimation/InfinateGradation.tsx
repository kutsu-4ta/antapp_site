/**
 * [説明] 無限グラデーション
 * scaleのスパンでcolor1、color2, color3の順で色が変わる
 */

import styled, {keyframes} from "styled-components";

const GradientBackground = () => {
    return (
        keyframes`
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        `
    );
};

const InfinateGradation = styled.div<{scale:number, color1: string, color2:string, color3: string}>`
  background: linear-gradient(54deg, ${({color1})=>(color1 ? color1 : "#6e6d6d")}, ${({color2})=>(color2 ? color2 : "#212121")}, ${({color3})=>(color3 ? color3 : "#4f4d4d")} );

  border: solid;
  borderBottom: black;
  background-size: 600% 600%;
  animation: ${() => GradientBackground() }
  ${({scale}) => (scale ? scale : 10) }s ease infinite;
`

export default InfinateGradation;