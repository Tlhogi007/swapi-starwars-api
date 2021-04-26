const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const axios = require("axios");
const BASE_URL = "https://swapi.dev/api/";
const fetch = require("node-fetch");

function getPeopleByURL() {
  return fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => data.results);
}

function getPlantByURL() {
  getPeopleByURL();
}
/*
async function getPages() {
  let page = 1;

  let people = [];

  let lastResults = [];

  do {
    try {
      const response = await fetch(
        `https://swapi.co/api/people/?format=json&page=${page}`
      );
      const data = await response.json();
      lastResults = data;

      data.results.map((person) => {
        const { name, height, mass, gender, homeworld } = person;
        people.push({ name, height, mass, gender, homeworld });
      });

      page++;
    } catch (err) {}
  } while (lastResults.next !== null);
}*/
const PeopleType = new GraphQLObjectType({
  name: "People",
  fields: () => ({
    url: { type: GraphQLString },
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    height: { type: GraphQLInt },
    mass: { type: GraphQLInt },
    homeworld: {
      type: GraphQLString,
      resolve(root, args) {
        return getPlantByURL();
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //all people
    people: {
      type: new GraphQLList(PeopleType),
      resolve(root, args) {
        return getPeopleByURL();
      },
    },

    //single person by ID
    person: {
      type: PeopleType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return fetch(`{$BASE_URL}/people`);
      },
    },

    search: {
      type: PeopleType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get("https://swapi.dev/api/people/?search=" + args.name)
          .then((res) => res.data);
      },
    },
    /*
    paginate: {
      type: PeopleType,
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return getPages(args.page);
      },
    },*/
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
