import React, {Component} from 'react';
import Row from "./common/Row";
import ItemList from "./ItemList";
import DetailsItem from "./DetailsItem/DetailsItem";

class People extends Component {

  state = {
    selectedPerson: 5
  };


  onPersonSelected = (id) => {
    this.setState({selectedPerson: id})
  };


  render() {
    return (
          <div className="container">
            <Row
                  left={<ItemList onItemSelected={this.onPersonSelected}/>}
                  right={<DetailsItem personId={this.state.selectedPerson}/>}
            />
          </div>
    );
  }
}

export default People;