import React, {Component} from 'react';
import classes from './RandomPlanet.sass'
import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";
import PlanetView from "./PlanetView";
import ErrorCheck from "../ErrorCheck";


export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };


    updatePlanet = () => {
        const id = Math.floor(Math.random() * 58) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };

    render() {
        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorCheck/> : null;

        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className='row'>
                <div className="col-12">
                    <div className={classes.RandomPlanet}>
                        {errorMessage}
                        {spinner}
                        {content}
                    </div>
                </div>
            </div>
        )
    }
};


