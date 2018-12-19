import React, {Component} from 'react';
import classes from './App.sass'
import AppHeader from "../AppHeader";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import SwapiService from "../../services/SwapiService";

export default class App extends Component {
    state = {
        selectedPerson: 5,
    };

    swapiService = new SwapiService();

    render() {
        return (
            <div className={classes.App}>
                <div className="container">
                    <AppHeader/>
                    <RandomPlanet/>
                    <PeoplePage/>


                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="text-center mb-4">People Page</h3>
                        </div>
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={(item)=>item.name}
                        />
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>


                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="text-center mb-4">People Page</h3>
                        </div>
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item)=>item.name}
                        />
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
}