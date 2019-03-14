import React, {Component} from 'react';
import Row from "./common/Row";
import {StarshipList} from "./sw-components/ItemLists";
import {StarshipDetails} from "./sw-components/Details";


class StarshipsPage extends Component {
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
                  left={<StarshipList onItemSelected={this.onItemSelected}/>}
                  right={<StarshipDetails itemId={selectedItem}/>}
            />
          </div>
    );
  }
}

export default StarshipsPage;