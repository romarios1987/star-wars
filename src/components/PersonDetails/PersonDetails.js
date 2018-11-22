import React from 'react';
import classes from './PersonDetails.sass'

const PersonDetails = () => {
    return (

            <div className="col-sm-12 col-md-6">
                <div className={classes.PersonDetails}>
                    <div className={classes["planet-image"]}>
                        <img
                            src="https://vignette.wikia.nocookie.net/uncyclopedia/images/3/3c/Naboo.png/revision/latest?cb=20081113082340"
                            alt="NAme Planet"/>
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

    )
};
export default PersonDetails;



