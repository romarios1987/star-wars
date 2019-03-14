import React, {Component} from 'react';
import Row from "./common/Row";
import {PlanetList} from "./sw-components/ItemLists";
import {PlanetDetails} from "./sw-components/Details";


class PlanetsPage extends Component {
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
                  left={<PlanetList onItemSelected={this.onItemSelected}/>}
                  right={<PlanetDetails itemId={selectedItem}/>}
            />
          </div>
    );
  }
}

export default PlanetsPage;