import React from 'react';
import classes from './AppHeader.sass'

const AppHeader = () => {
    return (
        <div className='row'>
                <div className="col-12">
                    <div className={classes.AppHeader}>
                        <nav className={classes["nav-header"]}>
                            <a className={classes["nav-brand"]} href="#">Star Wars</a>

                                <ul>
                                    <li className="nav-item">
                                        <a className={classes["active"]+' nav-link'} href="#">People</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Planets</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Starships</a>
                                    </li>
                                </ul>
                        </nav>
                    </div>
                </div>
        </div>
    )
};
export default AppHeader;