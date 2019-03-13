import React, {Component} from 'react';

class ItemList extends Component {
  render() {
    return (
          <div className="item-list">

            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search..."/>
            </div>

            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action active">
                Cras justo odio
              </a>
              <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in
              </a>
              <a href="#" className="list-group-item list-group-item-action disabled">Morbi leo risus
              </a>
            </div>

            <button type="button" className="btn btn-warning mt-3">More items</button>
          </div>
    );
  }
}

export default ItemList;