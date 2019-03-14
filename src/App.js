import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";

import './App.css';


import AppHeader from "./components/AppHeader";

import PeoplePage from "./components/PeoplePage";
import Planets from "./components/PlanetsPage";
import StarshipsPage from "./components/StarshipsPage";

import NotFound from "./components/NotFound";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import {SwapiServiceProvider} from "./components/SwapiServiceContext";
import SwapiService from "./components/services/SwapiService";

class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (

          <SwapiServiceProvider value={this.state.swapiService}>
            <AppHeader/>
            {planet}
            <main className="content mt-5">
              <Switch>

                <Route path="/people" component={PeoplePage}/>

                <Route path="/planets" component={Planets}/>
                <Route path="/starships" component={StarshipsPage}/>
                <Route path="/not-found" component={NotFound}/>

                <Redirect from="/" exact to="/people"/>
                <Redirect to="/not-found"/>
              </Switch>
            </main>
          </SwapiServiceProvider>

    );
  }
}

export default App;
