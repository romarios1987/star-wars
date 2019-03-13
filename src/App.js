import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import './App.css';


import AppHeader from "./components/AppHeader";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import NotFound from "./components/NotFound";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";

class App extends Component {

  render() {
    return (
          <>
            <AppHeader/>
            <RandomPlanet/>
            <main className="content mt-5">
              <Switch>

                <Route path="/people" component={People}/>

                <Route path="/planets" component={Planets}/>

                <Route path="/starships" component={Starships}/>

                <Route path="/not-found" component={NotFound}/>

                <Redirect from="/" exact to="/people"/>

                <Redirect to="/not-found"/>
              </Switch>
            </main>
          </>
    );
  }
}

export default App;
