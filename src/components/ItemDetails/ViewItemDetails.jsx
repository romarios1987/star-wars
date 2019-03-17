import React from 'react';


const ViewItemDetails = ({item, imageFolder, children}) => {

  const {id, name} = item;
  return (
        <div className="d-flex">
          <div className="wrap-img">
            <img src={`/img/${imageFolder}/${id}.jpg`} className="radius-img" width={180} alt={name}/>
          </div>
          <div className="short-details-info ml-3">
            <h2 className="text-uppercase">{name}</h2>
            <ul className="list-info">

              {
                React.Children.map(children, (child) => {
                  return React.cloneElement(child, {item});
                })
              }
            </ul>
          </div>
        </div>
  )
};

export default ViewItemDetails;