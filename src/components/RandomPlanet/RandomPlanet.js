import React, {Component} from 'react';
import classes from './RandomPlanet.sass'
import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";
import PlanetView from "./PlanetView";


export default class RandomPlanet extends Component {


    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };


    constructor() {
        super();
        this.updatePlanet();
    }


    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    };


    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {
        const {planet, loading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <PlanetView planet={planet}/> : null;


        return (
            <div className='row'>
                <div className="col-12">
                    <div className={classes.RandomPlanet}>
                        {spinner}
                        {content}
                    </div>
                </div>
            </div>
        )
    }
};


