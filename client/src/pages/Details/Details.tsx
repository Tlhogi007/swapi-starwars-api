import React from "react";
import { MainSection, Container } from "./styles";

import PersonBio from "../../components/People/PersonBio/PersonBio";

function Details() {
  return (
    <div>
      <MainSection>
        <Container>
          <PersonBio />
        </Container>
      </MainSection>
    </div>
  );
}

export default Details;
