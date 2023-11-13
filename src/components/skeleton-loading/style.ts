import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  border-radius: 10px;
  animation: ${pulseAnimation} 1.5s infinite;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;