import React, {Component} from 'react';
import classes from './ItemList.sass'
import Spinner from "../Spinner";

export default class ItemList extends Component {

    state = {
        itemList: []
    };


    componentDidMount() {

        const {getData} = this.props;

            getData()
            .then((itemList) => {
                this.setState({itemList})
            })
    }


    renderItems(data) {
        return data.map((item) => {

            const {id} = item;

            const label = this.props.children(item);

            return (
                <div key={id}
                     onClick={() => this.props.onItemSelected(id)}
                     className="list-group-item list-group-item-action">
                    {label}
                </div>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        const items = this.renderItems(this.state.itemList);

        if (!itemList) {
            return <Spinner/>
        }
        return (

                <div className={classes.ItemList}>
                    <div className={classes["list-group"] + ' list-group'}>
                        {items}
                    </div>
                </div>

        )
    }
};
