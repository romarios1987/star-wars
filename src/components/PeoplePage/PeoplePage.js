import React, {Component} from 'react';
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorCheck from "../ErrorCheck";
import SwapiService from "../../services/SwapiService";
import ErrorBoundry from "../ErrorBoundry";
import Row from "../Row";


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1,
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    };

    render() {

        if (this.state.hasError) {
            return <ErrorCheck/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(i) => (`${i.name} (${i.birthYear})`)}

            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        )
    }
};
