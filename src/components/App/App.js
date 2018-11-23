import React, {Component} from 'react';
import classes from './App.sass'
import AppHeader from "../AppHeader";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";


export default class App extends Component {

    state = {
        selectedPerson: 5
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        return (
            <div className={classes.App}>
                <div className="container">
                    <AppHeader/>
                    <RandomPlanet/>
                    <div className={classes.content}>
                        <div className="row">
                            <ItemList onItemSelected={this.onPersonSelected}/>
                            <PersonDetails personId={this.state.selectedPerson}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}