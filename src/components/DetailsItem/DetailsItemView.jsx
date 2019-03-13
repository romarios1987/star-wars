import React from 'react';

const DetailsItemView = ({person}) => {
  const {id, name, height, mass, gender, birthYear, eyeColor} = person;
  return (
        <React.Fragment>
          <div className="d-flex">
            <div className="wrap-img">
              <img src={`img/characters/${id}.jpg`} className="radius-img" width={180} alt={name}/>
            </div>
            <div className="short-details-info ml-3">
              <h2 className="text-uppercase">{name} (#{id})</h2>
              <ul className="list-info">
                <li>Height: {height}</li>
                <li>Mass: {mass}</li>
                <li>Gender: {gender}</li>
                <li>Birth Year: {birthYear}</li>
                <li>Eye Color: {eyeColor}</li>
              </ul>
            </div>
          </div>
          <button type="button" className="btn btn-warning mt-3">More Info</button>
        </React.Fragment>
  );
};

export default DetailsItemView;