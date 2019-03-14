import React, {Component} from 'react';
import Row from "./common/Row";
import {PersonList} from "./sw-components/ItemLists";
import {PersonDetails} from "./sw-components/Details";


class PeoplePage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem})
  };


  render() {
    const {selectedItem} = this.state;
    return (
          <div className="container">
            <Row
                  left={<PersonList onItemSelected={this.onItemSelected}/>}
                  right={<PersonDetails itemId={selectedItem}/>}
            />
          </div>
    );
  }
}

export default PeoplePage;