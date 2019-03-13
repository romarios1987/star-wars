import React, {Component} from 'react';
import SwapiService from "./services/SwapiService";
import Spinner from "./Spinner/Spinner";

class ItemList extends Component {

  state = {
    peopleList: []
  };


  swapiService = new SwapiService();

  componentDidMount() {
    this.swapiService.getAllPeople()
          .then((peopleList) => {
            this.setState({peopleList})
          })
  }


  renderItems(peopleList) {
    return peopleList.map((person) => {
      return (
            <li key={person.id}
                onClick={() => this.props.onItemSelected(person.id)}
                className="list-group-item list-group-item-action">
              {person.name}
            </li>
      )
    })
  }


  render() {

    const {peopleList} = this.state;
//console.log(peopleList);
    const items = this.renderItems(peopleList);


    if (!peopleList) {
      return <Spinner/>
    }


    return (
          <div className="item-list">

            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search..."/>
            </div>

            <ul className="list-group">
              {items}
            </ul>

            <button type="button" className="btn btn-warning mt-3">More items</button>
          </div>
    );
  }
}

export default ItemList;