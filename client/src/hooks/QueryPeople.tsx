import gql from "graphql-tag";

export const PEOPLE_QUERY = gql`
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
