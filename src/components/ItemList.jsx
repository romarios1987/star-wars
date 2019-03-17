import React from 'react';

const ItemList = (props) => {

  const {data, onItemSelected} = props;

  const items = data.map(({id, name}) => {
    return (
          <li key={id}
              onClick={() => onItemSelected(id)}
              className="list-group-item list-group-item-action">
            {name}
          </li>
    )
  });

  return (
        <div className="item-list">
          <ul className="list-group">
            {items}
          </ul>
          <button type="button" className="btn btn-warning mt-3">More items</button>
        </div>
  );

};

export default ItemList;