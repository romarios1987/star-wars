import React, {Component} from 'react';
import SwapiService from "../services/SwapiService";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator";
import PlanetView from "./PlanetView";

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    setInterval(this.updatePlanet, 3000)
  }


  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  };


  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  };


  updatePlanet = () => {
    const id = Math.floor(Math.random() * 19 + 2);
    this.swapiService.getPlanet(id)
          .then(this.onPlanetLoaded)
          .catch(this.onError)
  };


  render() {

    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;

    const spinner = loading ? <Spinner/> : null;

    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
          <div className="container">
            <div className="wrap-random-planet bg-light mt-3 p-3">
              <div className="row">
                {errorMessage}
                {spinner}
                {content}
              </div>
            </div>
          </div>
    )
  }
}
export default RandomPlanet;


