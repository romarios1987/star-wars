import React, {Component} from 'react';
import classes from './PeoplePage.sass'
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorCheck from "../ErrorCheck";

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3,
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
            <div className={classes.PeoplePage}>
                <div className={classes.content}>
                    <div className="row">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>

        )
    }
};
