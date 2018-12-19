import React, {Component} from 'react';
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorCheck from "../ErrorCheck";
import SwapiService from "../../services/SwapiService";

export default class PeoplePage extends Component {


    swapiService = new SwapiService();

    state = {
        selectedPerson: 1,
        hasError: false
    };


    componentDidCatch() {
        this.setState({hasError: true})
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    };

    render() {

        if (this.state.hasError) {
            return <ErrorCheck/>
        }
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="text-center mb-4">People Page</h3>
                </div>
                <ItemList
                    onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}
                    renderItem={({name, gender, birthYear})=>`${name}   (${gender} - ${birthYear})`}
                />
                <PersonDetails personId={this.state.selectedPerson}/>
            </div>
        )
    }
};
