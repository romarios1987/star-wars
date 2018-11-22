import classes from "./RandomPlanet.sass";
import React from "react";

const PlanetView = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <>
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
        </>
    )
};
export default PlanetView;