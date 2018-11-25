import React, {Component} from 'react';
import classes from './PersonDetails.sass'
import SwapiService from "../../services/SwapiService";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true
    };

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person
                })
            })
    }




    render() {

        if (!this.state.person) {
            return <span>Select a person from list</span>
        }

        const {id, name, height, mass, gender, birthYear, eyeColor} = this.state.person;

        return (
            <div className="col-sm-12 col-md-6">
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
            </div>
        )
    }
};




