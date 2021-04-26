import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Card,
  CardBody,
  CharacterName,
  CardFooter,
  CardDetailsLink,
} from "./styles";

import PersonBio from "../PersonBio/PersonBio";

const PeopleCard = ({
  person: { name, url, mass, height, gender, homeworld },
}) => {
  //Get Single Person by URL and Pass as props to PersonBio component.
  const [personInfo, setPersonInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPersonInfo(data);
        /* console.log(`Person : ${getId(url)}`, data);*/
        console.log("Person info", data);
      });
  }, []);

  //Get ID from URL so to identify each person
  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  //loop through each person
  function getPerson() {}
  return (
    <div>
      <Card>
        <CardBody>
          <CharacterName>{name}</CharacterName>
        </CardBody>
        <CardFooter>
          <CardDetailsLink className="link" to={`/details/${getId(url)}`}>
            Details
          </CardDetailsLink>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PeopleCard;
