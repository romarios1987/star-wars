import React, {Component} from 'react';
import classes from './RandomPlanet.sass'
import SwapiService from "../../services/SwapiService";


export default class RandomPlanet extends Component {


    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };


    constructor(){
        super();
        this.updatePlanet();
    }


    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                });
            })
    }

    render() {
        const {id, name, population, rotationPeriod, diameter} = this.state;
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
