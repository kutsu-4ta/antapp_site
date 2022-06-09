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

// TODO:scaleをpropsで渡せるようにしたい
const InfinateGradation = styled.div<{ scale: number }>`
  background: linear-gradient(54deg, #cecccc, #d3cfb2, #bee3b2);
  background-size: 600% 600%;
  animation: ${() => GradientBackground()} 15s ease infinite;
`

export default InfinateGradation;