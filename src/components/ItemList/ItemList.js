import React from 'react';
import classes from './ItemList.sass'

const ItemList = () => {
    return (
            <div className="col-sm-12 col-md-6">
                <div className={classes.ItemList}>
                    <div className={classes["list-group"]+' list-group'}>
                        <a href="#" className="list-group-item list-group-item-action active">Cras justo odio</a>
                        <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                    </div>
                </div>
            </div>
    )
};
export default ItemList;