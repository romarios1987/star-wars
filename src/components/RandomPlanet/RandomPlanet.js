import React from 'react';
import classes from './RandomPlanet.sass'

const RandomPlanet = () => {
    return (
        <div className='row'>
            <div className="col-12">
                <div className={classes.RandomPlanet}>
                    <div className={classes["planet-image"]}>
                        <img src="https://vignette.wikia.nocookie.net/uncyclopedia/images/3/3c/Naboo.png/revision/latest?cb=20081113082340" alt="NAme Planet"/>
                    </div>
                    <div className={classes["planet-info"]}>
                        <h2>Naboo</h2>

                        <ul>
                            <li>PopulationPopulationPopulation</li>
                            <li>Rotation</li>
                            <li>Diameter</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default RandomPlanet;