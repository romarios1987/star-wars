import React from 'react';

const ErrorIndicator = () => {
  return (
        <div className="error-indicator">
          <img src="/img/error-image.png" width={85} alt="Error"/>
          <span className="boom">Boom!</span>
        </div>
  )
};

export default ErrorIndicator;