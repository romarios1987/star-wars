import React, {Component} from 'react';
import classes from './ItemList.sass'
import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: []
    };



    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }


    renderItems(data) {
        return data.map(({id, name}) => {
            return (
                <a key={id}
                   onClick={() => this.props.onItemSelected(id)}
                   className="list-group-item list-group-item-action">{name}</a>
            )
        })
    }


    render() {

        const {peopleList} = this.state;

        const items = this.renderItems(this.state.peopleList);

        if (!peopleList) {
            return <Spinner/>
        }
        return (
            <div className="col-sm-12 col-md-6">
                <div className={classes.ItemList}>
                    <div className={classes["list-group"] + ' list-group'}>
                        {items}
                    </div>
                </div>
            </div>
        )
    }
};
