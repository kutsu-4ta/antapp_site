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
  background: linear-gradient(54deg, #f6f5f5, #f5f3f3, #f7f8f7);
  background-size: 600% 600%;
  animation: ${() => GradientBackground()} 15s ease infinite;
`

export default InfinateGradation;