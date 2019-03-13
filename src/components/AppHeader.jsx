import React from 'react';
import {Link, NavLink} from "react-router-dom";

const AppHeader = () => {
  return (
        <div className="bs-component">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

              <Link className="navbar-brand" to="/">Star Wars</Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                      aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">{}</span>
              </button>

              <div className="collapse navbar-collapse" id="navbarColor03">

                <ul className="navbar-nav mr-auto">
                  <NavLink className="nav-item nav-link" to="/people">People</NavLink>
                  <NavLink className="nav-item nav-link" to="/planets">Planets</NavLink>
                  <NavLink className="nav-item nav-link" to="/starships">Starships</NavLink>
                </ul>
              </div>
            </div>
          </nav>

        </div>
  )
};
export default AppHeader;