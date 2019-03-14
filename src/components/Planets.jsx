import React, {Component} from 'react';
import Row from "./common/Row";
import {PlanetList} from "./sw-components/ItemLists";

import SwapiService from "./services/SwapiService";



class People extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPlanet: 3
  };


  onPlanetSelected = (id) => {
    this.setState({selectedPlanet: id})
  };


  render() {


    // const planetDetails = (
    //       <ItemDetails>
    //         itemId={this.state.selectedPlanet}
    //         getData={this.swapiService.getPlanet}
    //         <Record field="name" label="Name"/>
    //         <Record field="population" label="Population"/>
    //       </ItemDetails>
    // );


    return (
          <div className="container">
            <Row
                  left={
                    <PlanetList
                          onItemSelected={this.onPersonSelected}
                          getData={this.swapiService.getAllPeople}
                    />}
                  right={"hello"}
            />
          </div>
    );
  }
}

export default People;