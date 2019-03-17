import React from 'react';
import {PlanetList} from "../sw-components/ItemLists";
import {withRouter} from 'react-router-dom';

const PlanetsPage = ({history}) => {
  return (
        <PlanetList
              onItemSelected={(id) => history.push(id)}/>
  );
};
export default withRouter(PlanetsPage);