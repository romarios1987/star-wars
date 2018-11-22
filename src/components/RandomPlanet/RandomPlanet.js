import React, {Component} from 'react';
import classes from './RandomPlanet.sass'
import SwapiService from "../../services/SwapiService";


export default class RandomPlanet extends Component {


    swapiService = new SwapiService();

    state = {
        planet: {}
    };


    constructor() {
        super();
        this.updatePlanet();
    }


    onPlanetLoaded = (planet) => {
        this.setState({planet})
    };


    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {
        const {planet: {id, name, population, rotationPeriod, diameter}} = this.state;
        return (
            <div className='row'>
                <div className="col-12">
                    <div className={classes.RandomPlanet}>
                        <div className={classes["planet-image"]}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                alt={name}/>
                        </div>
                        <div className={classes["planet-info"]}>
                            <h2>{name}</h2>

                            <ul>
                                <li>Population: <span>{population}</span></li>
                                <li>Rotation: <span>{rotationPeriod}</span></li>
                                <li>Diameter: <span>{diameter}</span></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
