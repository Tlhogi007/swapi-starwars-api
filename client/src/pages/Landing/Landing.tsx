import React from "react";
import Typist from "react-typist";
import { Background, Heading, Text, Night, ShootingStar } from "./styles";

const Landing = () => {
  return (
    <div>
      <Background>
        <Heading>StarWars</Heading>
        <Typist>
          <Text>
            The force <Typist.Delay ms={500} /> is <Typist.Delay ms={500} />{" "}
            with you.
          </Text>
        </Typist>
        <Night>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
          <ShootingStar></ShootingStar>
        </Night>
      </Background>
    </div>
  );
};

export default Landing;
