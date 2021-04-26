import styled, { keyframes } from "styled-components";

const rippleEffect = keyframes`
 0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }

`;

export const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10em;
`;

export const Text = styled.p`
  text-align: center;
  width: 100%;
`;

export const Circle = styled.div`
  position: absolute;
  border: 4px solid gold;
  opacity: 1;
  border-radius: 50%;
  animation: ${rippleEffect} 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  &:nth-child(2) {
    animation-delay: -0.5s;
  }
`;
