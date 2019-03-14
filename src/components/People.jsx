import React, {Component} from 'react';
import Row from "./common/Row";
import {PersonList} from "./sw-components/ItemLists";
import {PersonDetails} from "./sw-components/Details";
import ItemDetails, {Record} from "./ItemDetails";
import SwapiService from "./services/SwapiService";


class People extends Component {

  swapiService = new SwapiService();


  state = {
    selectedPerson: 5
  };


  onPersonSelected = (id) => {
    this.setState({selectedPerson: id})
  };


  render() {
    // const personDetails = (
    //       <ItemDetails
    //             itemId={this.state.selectedPerson}
    //             getData={this.swapiService.getPerson}>
    //
    //         <Record field="gender" label="Gender"/>
    //         <Record field="eyeColor" label="Eye Color"/>
    //
    //       </ItemDetails>
    // );

    return (
          <div className="container">
            <Row
                  left={
                    <PersonList
                          onItemSelected={this.onPersonSelected}
                        //getData={this.swapiService.getAllPeople}
                    />}

                  right={
                    <PersonDetails
                          itemId={this.state.selectedPerson}
                          //getData={this.swapiService.getPerson}
                    />
                  }
            />
          </div>
    );
  }
}

export default People;