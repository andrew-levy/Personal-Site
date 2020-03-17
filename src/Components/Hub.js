import React from 'react';
import logo from '../images/logo.svg';

const Hub = (props) => {
    return (
        <div className="interests-container">
          <div className="interest">
            <img src={logo} className="" alt="logo" />
            <p>$10,000</p>
          </div>
          <div className="interest">
            <img src={logo} className="" alt="logo" />
            <p>$10,000</p>
          </div>
        </div>
    );
  }

  export default Hub;