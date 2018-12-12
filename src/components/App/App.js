import React, {Component} from 'react';
import classes from './App.sass'
import AppHeader from "../AppHeader";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";

export default class App extends Component {

    render() {
        return (
            <div className={classes.App}>
                <div className="container">
                    <AppHeader/>

                    <RandomPlanet/>
                    <PeoplePage/>
                </div>
            </div>
        );
    }
}