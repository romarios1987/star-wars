import React, {Component} from 'react';

class Details extends Component {
  render() {
    return (
          <div className="short-details bg-light p-3">
            <div className="d-flex">
              <div className="wrap-img">
                <img src="img/characters/15.jpg" className="radius-img" width={180} alt="name"/>
              </div>
              <div className="short-details-info ml-3">
                <h2 className="text-uppercase">Name</h2>
                <ul className="list-info">
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-warning mt-3">More Info</button>
          </div>
    );
  }
}

export default Details;