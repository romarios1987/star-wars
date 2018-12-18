import React from 'react';
import classes from "./PersonDetails.sass";
import ErrorButton from "../ErrorButton/ErrorButton";

const PersonDetailsView = ({person}) => {
    const {id, name, height, mass, gender, birthYear, eyeColor} = person;
    return (
        <>
            <div className="col-md-12 col-lg-6">
                <div className={classes.PersonDetails}>
                    <div className={classes["planet-image"]}>
                        <img style={{width: '175px'}}
                             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                             alt={name}/>
                    </div>
                    <div className={classes["planet-info"]}>
                        <h2>{name}</h2>
                        <ul>
                            <li>Height: {height}</li>
                            <li>Mass: {mass}</li>
                            <li>Gender: {gender}</li>
                            <li>Birth Year: {birthYear}</li>
                            <li>Eye Color: {eyeColor}</li>
                        </ul>

                    </div>
                </div>
                <ErrorButton />
            </div>
        </>
    );
};

export default PersonDetailsView;