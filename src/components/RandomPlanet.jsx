import React, {Component} from 'react';

class RandomPlanet extends Component {


  render() {

    return (
          <div className="container">
            <div className="wrap-random-planet bg-light mt-3 p-3">
              <div className="row">
                <div className="col-md-4 col-sm-6 mx-auto text-center">
                  <img className="img-fluid radius-img" src='img/planets/10.jpg' width={220} alt='name'/>
                </div>
                <div className="col-md-8 mx-auto">
                  <div className="random-planet-info">
                    <h2 className="text-uppercase">Title</h2>
                    <ul className="list-info">
                      <li>ID: <span>44</span></li>
                      <li>Population: <span>435</span></li>
                      <li>Rotation: <span>4535</span></li>
                      <li>Diameter: <span>3543</span></li>
                      <li>Diameter: <span>3543</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default RandomPlanet;