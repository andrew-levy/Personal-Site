import React from 'react';

const Footer = (props) => {
    return (
        <footer>
          <p className="code small">
            React App <img src={props.image} className="App-logo" alt="logo" /> Andrew Levy
          </p>
        </footer>
    );
  }

  export default Footer;