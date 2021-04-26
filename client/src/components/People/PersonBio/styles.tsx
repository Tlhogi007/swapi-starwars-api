import styled, { keyframes } from "styled-components";

const appear = keyframes`

0%{
  opacity:0;
  
}

100%{
  
  opacity:1;
}
`;

export const Heading = styled.h2`
  text-align: center;
  padding: 30px;
  color: white;
  font-weight: 300;
`;

export const Span = styled.span`
  text-align: center;
  padding: 30px;
  color: gold;
  font-weight: 300;
`;

export const Container = styled.div`
  width: 50vw;
  justify-content: center;
  height: 50vh;

  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  max-width: 1000px;

  @media (max-width: 870px) {
    flex-direction: column;
    border: 1px solid green;
  }
`;
export const Wrapper = styled.div`
  border-bottom: 1px solid gold;
  width: 50vw;
  margin: 0 auto;
  padding-bottom: 20px;
`;

export const ImgBx = styled.div`
  height: 100%;
  width: 100%;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Left = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
`;

export const Right = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  padding: 5%;
`;
export const SubHeading = styled.h3`
  color: gold;
  font-weight: 300;
  font-size: 1rem;
`;

export const Button = styled.button`
  height: 30px;
  width: 100px;
  border: none;
  outline: none;
  border-radius: 2px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.5s;
  animation: ${appear} 1s 1s ease-in-out normal;

  &:hover {
    color: black;
    background-color: gold;
    transition: 0.5s;
  }
`;
