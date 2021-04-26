import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./App.css";
/*import Navbar from "./components/Navbar/Navbar";*/

import { Navbar, People, PeopleBio } from "./components";
import fetchPeople from "./hooks/characters/fetchPeople";
/*import Home from "./pages/home/Home";*/
import Landing from "./pages/Landing/Landing";
import Details from "./pages/Details/Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import PersonBio from "./components/People/PersonBio/PersonBio";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/details/:id" component={PersonBio} />
          <Route path="/home" component={People} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
