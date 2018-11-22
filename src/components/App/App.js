import React, {Component} from 'react';
import classes from './App.sass'
import AppHeader from "../AppHeader";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";


export default class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <div className="container">
                    <AppHeader/>
                    <RandomPlanet/>
                    <div className={classes.content}>
                        <div className="row">
                            <ItemList/>
                            <PersonDetails/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}