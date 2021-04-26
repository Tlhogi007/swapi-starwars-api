import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const colorToggle = keyframes`

0% {
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  100% {
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: gold;
  }
`;

export const NavigationBar = styled.nav`
  width: 100%;
  background-color: black;
  color: white;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1100px;
  height: 100px;
  padding: 0;
  margin: 0 auto;
  align-items: center;
`;

export const Navlogo = styled.div`
  width: 100px;
  text-align: center;
`;

export const NavBox = styled.div`
  width: 100px;
  text-align: center;
`;

export const NavLogoText = styled.h1`
  font-size: 1.5rem;

  font-weight: 100;
  animation: ${colorToggle} 1s 1s infinite ease-in-out;
  transition: 0.5s;
`;

export const NavBrand = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: gold;
    transform: scale(1.4);
    transition: 0.5s;
    border-bottom: 1px solid gold;
  }
`;

export const NavItems = styled.ul`
  font-size: 1.5rem;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 1px solid gold;
    transition: 0.5s;
    color: gold;
  }
`;
