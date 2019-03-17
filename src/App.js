import React, {Component} from 'react';


import AppHeader from "./components/AppHeader";

import './App.css';


import NotFound from "./components/NotFound";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import {SwapiServiceProvider} from "./components/SwapiServiceContext";

import {Switch, Route, Redirect} from 'react-router-dom';


import PeoplePage from './components/pages/PeoplePage';
import PlanetsPage from './components/pages/PlanetsPage';
import StarshipsPage from './components/pages/StarshipsPage';

import SwapiService from "./components/services/SwapiService";


import {PlanetDetails, StarshipDetails} from "./components/sw-components/Details";

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

            <div className="container content mt-5">

              <Switch>
                <Route path="/"
                       render={() => <h2>Welcome to StarDB</h2>}
                       exact/>
                <Route path="/people/:id?" component={PeoplePage}/>

                <Route path="/starships" exact component={StarshipsPage}/>
                <Route path="/starships/:id"
                       render={({match}) => {
                         const {id} = match.params;
                         return <StarshipDetails itemId={id}/>
                       }}/>

                <Route path="/planets" exact component={PlanetsPage}/>
                <Route path="/planets/:id"
                       render={({match}) => {
                         const {id} = match.params;
                         return <PlanetDetails itemId={id}/>
                       }}/>

                <Route path="/not-found" component={NotFound}/>
                <Redirect to="/not-found"/>
              </Switch>


            </div>

          </SwapiServiceProvider>

    );
  }
}

export default App;
