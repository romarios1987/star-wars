import React from 'react';
import ItemDetails, {Record} from "../ItemDetails";
import SwapiService from "../services/SwapiService";


const {getPerson, getPlanet, getStarship} = new SwapiService();

const PersonDetails = ({itemId}) => {
  return (
        <ItemDetails
              itemId={itemId}
              getData={getPerson}>
          <Record field="gender" label="Gender"/>
          <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
  )
};

const PlanetDetails = ({itemId}) => {
  return (
        <ItemDetails
              itemId={itemId}
              getData={getPlanet}>
          <Record field="name" label="Name"/>
          <Record field="population" label="Population"/>
          <Record field="rotationPeriod" label="RotationPeriod"/>
          <Record field="diameter" label="Diameter"/>
        </ItemDetails>
  )
};

const StarshipDetails = ({itemId}) => {
  return (
        <ItemDetails
              itemId={itemId}
              getData={getStarship}>

          <Record field="name" label="Name"/>
          <Record field="model" label="Model"/>
          <Record field="costInCredits" label="Cost In Credits"/>

        </ItemDetails>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}