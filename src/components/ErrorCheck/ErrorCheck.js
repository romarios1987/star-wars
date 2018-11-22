import React from 'react';
import classes from './ErrorCheck.sass';
import icon from './Death-Star-icon.png';

const ErrorCheck = () => {
    return (
        <div className={classes.ErrorCheck}>
            <img style={{width: '50px'}} src={icon} alt="Error"/>
            <span className={classes.boom}>Boom! </span>
            <span>Something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    )
};

export default ErrorCheck;