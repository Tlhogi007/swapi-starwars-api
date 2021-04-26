import React, { Component, Fragment, useEffect, useState } from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import { MainSection, Wrapper, Heading, Container } from "./styles";
import PeopleCard from "./PeopleCard/PeopleCard";
import Loader from "../Loader/Loader";

const PEOPLE_QUERY = gql`
  query PeopleQuery {
    people {
      name
      gender
      mass
      height
      homeworld
      url
    }
  }
`;

export class People extends Component {
  render() {
    return (
      <>
        <MainSection>
          <Wrapper>
            <Heading>Star Wars Characters</Heading>
            <Container>
              <Fragment>
                <Query query={PEOPLE_QUERY}>
                  {(result: any) => {
                    const { loading, error, data } = result;

                    if (loading) return <Loader />;
                    if (error)
                      return <p>Error!!! The force didn't find anything</p>;
                    console.log(data);

                    return (
                      <Fragment>
                        {data.people.map((person) => (
                          <PeopleCard key={person.url} person={person} />
                        ))}
                      </Fragment>
                    );
                  }}
                </Query>
              </Fragment>
            </Container>
          </Wrapper>
        </MainSection>
      </>
    );
  }
}

export default People;
