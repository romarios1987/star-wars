import React from 'react';
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";


import {SwapiServiceConsumer} from "../SwapiServiceContext";

const PersonDetails = ({itemId}) => {
  return (
        <SwapiServiceConsumer>
          {
            ({getPerson}) => {
              return (
                    <ItemDetails
                          itemId={itemId}
                          getData={getPerson}
                          imageFolder="characters"
                    >
                      <Record field="gender" label="Gender"/>
                      <Record field="eyeColor" label="Eye Color"/>

                    </ItemDetails>
              )
            }
          }
        </SwapiServiceConsumer>
  )
};

const PlanetDetails = ({itemId}) => {
  return (
        <SwapiServiceConsumer>
          {
            ({getPlanet}) => {
              return (
                    <ItemDetails
                          itemId={itemId}
                          getData={getPlanet}
                          imageFolder="planets"
                    >
                      <Record field="name" label="Name"/>
                      <Record field="population" label="Population"/>
                      <Record field="rotationPeriod" label="RotationPeriod"/>
                      <Record field="diameter" label="Diameter"/>
                    </ItemDetails>
              )
            }
          }
        </SwapiServiceConsumer>
  )
};

const StarshipDetails = ({itemId}) => {
  return (
        <SwapiServiceConsumer>
          {
            ({getStarship}) => {
              return (
                    <ItemDetails
                          itemId={itemId}
                          getData={getStarship}
                          imageFolder="starships"
                    >
                      <Record field="name" label="Name"/>
                      <Record field="model" label="Model"/>
                      <Record field="costInCredits" label="Cost In Credits"/>
                    </ItemDetails>
              )
            }
          }
        </SwapiServiceConsumer>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}