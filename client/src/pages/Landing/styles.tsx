import styled, { keyframes } from "styled-components";
import img from "./img/moon.jpg";
/*
export const MainSection = styled.section`
  height: 86vh;
  position: relative;
  background-color: red;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;
*/

const glitch = keyframes`
0%{
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
    -0.025em 0.05em 0 rgba(255, 0, 255, 0.75);
  

}

15%{
  text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
    -0.05em -0.05em 0 rgba(255, 0, 255, 0.75);
  

}

50%{
  text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
    0.05em 0 0 rgba(0, 255, 0, 0.75),
    0  -0.05em 0 rgba(255, 0, 255, 0.75);
  

}

100%{
  text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
    -0.025em -0.05em 0 rgba(255, 0, 255, 0.75);
  

}
`;
const tail = keyframes`
    0% {
        width: 0;
      }

      30% {
        width: 100px;
      }

      100% {
        width: 0;
      }
`;

const shining = keyframes`
    0%{
    width: 0;
  }

  50% {
    width: 30px;
  }

  100% {
    width: 0;
  }
`;

const shooting = keyframes`
  0%{
    transform: translateX(0)
  }

  100%{
    transform: translateX(200px)
 
  }
 `;
const blur = keyframes`
    0%{
      filter:blur(100px);
      filter:grayscale(100%);
    }

    50%{
      filter:blur(50px);
      filter:grayscale(50%);
    }

    100%{
      filter: blur(0);
      filter:grayscale(0)
    }
 `;
export const Background = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
  background: url(${img});
  background-size: cover;
  background-position: bottom;

  opacity: 0.5;
`;

export const Container = styled.div`
  height: 100%;
  background-color: red;
`;

export const Heading = styled.h1`
  color: gold;
  font-size: 3.5rem;
  /* bottom: 25rem;
  left: 39rem;*/
  left: 0;
  right: 0;
  top: 40%;
  text-align: center;
  margin: 0 auto;
  position: absolute;
  z-index: 1;
  font-family: "StarJedi";
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(255, 0, 255, 0.75);

  animation: ${glitch} 1000ms infinite;
`;

export const Text = styled.p`
  color: gold;
  font-family: "StarJedi";
  position: absolute;
  margin: 0 20%;

  z-index: 1;
  left: 0;
  top: 55%;
  right: 0;
  text-align: center;

  /* left: 42rem;
  bottom: 23rem;*/
`;
export const Night = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotateZ(45deg);
`;

export const ShootingStar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  border-radius: 999px;
  -webkit-filter: drop-shadow(0, 0, 6px, #699bff);
  filter: drop-shadow(0, 0, 6px, #699bff);
  animation: ${tail} 3000ms ease-in-out infinite,
    ${shooting} 3000ms ease-in-out infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 1px;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 255, 0),
      #5f91ff,
      rgba(0, 0, 255, 0)
    );
    -webkit-transform: translateX(50%) rotateZ(45deg);
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;

    -webkit-animation: ${shining} 3000ms ease-in-out infinite;
    animation: ${shining} 3000ms ease-in-out infinite;
  }

  &::after {
    transform: translateX(50%) rotateZ(-45deg);
  }

  &:nth-child(1) {
    top: calc(50% - 159px);
    left: calc(50% - 103px);
    animation-delay: 4796ms;
  }

  &:nth-child(1)::before,
  &:nth-child(1)::after {
    animation-delay: 4796ms;
  }

  &:nth-child(2) {
    top: calc(50% - 103px);
    left: calc(50% - 68px);
    animation-delay: 5944ms;
  }

  &:nth-child(2)::before,
  &:nth-child(2)::after {
    animation-delay: 5944ms;
  }

  &:nth-child(3) {
    top: calc(50% - 40px);
    left: calc(50% - 222px);
    animation-delay: 7556ms;
  }

  &:nth-child(3)::before,
  &:nth-child(3)::after {
    animation-delay: 7556ms;
  }

  &:nth-child(4) {
    top: calc(50% - 29px);
    left: calc(50% - 113px);
    animation-delay: 7123ms;
  }

  &:nth-child(4)::before,
  &:nth-child(4)::after {
    animation-delay: 7123ms;
  }

  &:nth-child(5) {
    top: calc(50% - 246px);
    left: calc(50% - 112px);
    animation-delay: 3629ms;
  }

  &:nth-child(5)::before,
  &:nth-child(5)::after {
    animation-delay: 3629ms;
  }

  &:nth-child(6) {
    top: calc(50% - 108px);
    left: calc(50% - 160px);
    animation-delay: 3895ms;
  }

  &:nth-child(6)::before,
  &:nth-child(6)::after {
    animation-delay: 3895ms;
  }

  &:nth-child(7) {
    top: calc(50% - 52px);
    left: calc(50% - 72px);
    animation-delay: 7326ms;
  }

  &:nth-child(7)::before,
  &:nth-child(7)::after {
    animation-delay: 7326ms;
  }

  &:nth-child(8) {
    top: calc(50% - 5px);
    left: calc(50% - 282px);
    animation-delay: 956ms;
  }

  &:nth-child(8)::before,
  &:nth-child(8)::after {
    animation-delay: 956ms;
  }

  &:nth-child(9) {
    top: calc(50% - 209px);
    left: calc(50% - 296px);
    animation-delay: 5030ms;
  }

  &:nth-child(9)::before,
  &:nth-child(9)::after {
    animation-delay: 5030ms;
  }

  &:nth-child(10) {
    top: calc(50% - 131px);
    left: calc(50% - 249px);
    animation-delay: 1150ms;
  }

  &:nth-child(10)::before,
  &:nth-child(10)::after {
    animation-delay: 1150ms;
  }

  &:nth-child(11) {
    top: calc(50% + 31px);
    left: calc(50% - 103px);
    animation-delay: 157ms;
  }

  &:nth-child(11)::before,
  &:nth-child(11)::after {
    animation-delay: 157ms;
  }

  &:nth-child(12) {
    top: calc(50% + 60px);
    left: calc(50% - 183px);
    animation-delay: 3364ms;
  }

  &:nth-child(12)::before,
  &:nth-child(12)::after {
    animation-delay: 3364ms;
  }

  &:nth-child(13) {
    top: calc(50% + 60px);
    left: calc(50% - 353px);
    animation-delay: 6822ms;
  }

  &:nth-child(13)::before,
  &:nth-child(13)::after {
    animation-delay: 6822ms;
  }
`;
