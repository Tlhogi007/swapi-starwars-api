import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const borders = keyframes`
    0% {
      border-left: 1px solid gold;
      transition: 0.7s;
      border-right: 1px solid gold;
      border-top: 1px solid black;
    }
  
    100% {
      border-left: 1px solid black;
      transition: 0.5s;
      border-right: 1px solid black;
  
      border-top: 1px solid gold;
    }
  `;

export const MainSection = styled.section`
  height: 86vh;
  position: relative;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Heading = styled.h2`
  text-align: center;
  padding: 30px;
  color: white;
  font-weight: 300;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 80vw;
  position: absolute;
  justify-content: center;
  margin: 0 auto;
  right: 0;
  left: 0;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  height: 200px;
  width: 200px;
  margin: 20px;
  padding: 20px;
  position: relative;
  cursor: pointer;
`;

export const CardBody = styled.div`
  color: white;
  position: absolute;
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  font-size: 0.7rem;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: ${borders} 2s 1s infinite ease-in-out;
`;

export const CharacterName = styled.h2``;

export const CardFooter = styled.div`
  color: gold;
  border: 1px solid gold;
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  justify-content: center;
  transition: 0.5s;

  &:hover {
    background-color: ghostwhite;
    transition: 0.5s;
  }

  &:hover > .link {
    color: black;
  }
`;

export const CardDetailsLink = styled(Link)`
  text-decoration: none;
  color: gold;
`;
