import React, {Component} from 'react';
import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";
import PersonDetailsView from "./PersonDetailsView";


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
            this.setState({
                loading: true
            });
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
                    person,
                    loading: false
                })
            })
    }


    render() {
        const {person, loading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <PersonDetailsView person={person}/> : null;

        return (
            <>
                {spinner}
                {content}
            </>
        )
    }
};




