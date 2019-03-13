import React, {Component} from 'react';
import Row from "./common/Row";
import ItemList from "./ItemList";
import Details from "./Details";

class People extends Component {
  render() {
    return (
          <div className="container">
            <Row left={<ItemList/>} right={<Details/>}/>
          </div>
    );
  }
}

export default People;