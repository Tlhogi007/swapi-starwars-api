import React from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

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

const fetchPeople = () => {
  return (
    <div>
      <Query query={PEOPLE_QUERY}>
        {(result: any) => {
          const { loading, error, data } = result;

          if (loading) return <p>The force is loading your page...</p>;
          if (error) return <p>Error!!! The force didn't find anything</p>;
          console.log(data);

          return data;
        }}
      </Query>
    </div>
  );
};

export default fetchPeople;
