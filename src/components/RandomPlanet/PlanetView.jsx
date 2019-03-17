import React from 'react';

const PlanetView = ({planet}) => {

  const {id, name, population, diameter, rotationPeriod} = planet;

  return (
        <React.Fragment>
          <div className="col-md-4 col-sm-6 mx-auto text-center">
            <img
                  className="img-fluid radius-img"
                  src={`/img/planets/${id}.jpg`}
                  width={220}
                  alt={name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/img/error-image.png"
                  }}
            />
          </div>
          <div className="col-md-8 mx-auto">
            <div className="random-planet-info">
              <h2 className="text-uppercase">{name}</h2>
              <ul className="list-info">
                <li>ID: <span>{id}</span></li>
                <li>Population: <span>{population}</span></li>
                <li>Rotation: <span>{rotationPeriod}</span></li>
                <li>Diameter: <span>{diameter}</span></li>
              </ul>
            </div>
          </div>
        </React.Fragment>
  )
};

export default PlanetView;