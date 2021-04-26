import React, { useEffect, useState, Fragment } from "react";

import {
  Heading,
  Container,
  SubHeading,
  Button,
  Span,
  ImgBx,
  Img,
  Left,
  Right,
  Wrapper,
} from "./styles";
import { useParams, useHistory } from "react-router-dom";
import Typist from "react-typist";

const PersonBio = () => {
  const { id }: any = useParams();
  const history = useHistory();

  const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

  const [personInfo, setPersonInfo] = useState();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => setPersonInfo(data));
    /*  fetchData();*/
  }, []);
  /*
  const fetchData = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();
    setPersonInfo(data);
    <img src={`${imgURL + id}.jpg`} alt="" />
  };
*/
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Fragment>
        <Heading>
          PersonBio : <Span> {id} </Span>
        </Heading>
        <Wrapper>
          <Container>
            <Left>
              <ImgBx>
                <Img src={`${imgURL + id}.jpg`} alt="" />
              </ImgBx>
            </Left>
            <Right>
              <Typist>
                <SubHeading>
                  <Typist.Delay ms={500} /> Name : {/* {personInfo.name} */}
                </SubHeading>
              </Typist>

              <Typist>
                <SubHeading>
                  {" "}
                  <Typist.Delay ms={800} />
                  Gender : {/* {personInfo.gender}*/}
                </SubHeading>
              </Typist>

              <Typist>
                <SubHeading>
                  <Typist.Delay ms={900} /> Mass : {/*  {personInfo.mass} */}
                </SubHeading>
              </Typist>
              <Typist>
                <SubHeading>
                  <Typist.Delay ms={1000} /> Height :{" "}
                  {/*  {personInfo.height} */}
                </SubHeading>
              </Typist>

              <Typist>
                <SubHeading>
                  <Typist.Delay ms={1200} /> Homeworld :
                </SubHeading>
              </Typist>
            </Right>
          </Container>
          <Button onClick={goBack}> Back</Button>
        </Wrapper>
      </Fragment>
    </>
  );
};

export default PersonBio;
