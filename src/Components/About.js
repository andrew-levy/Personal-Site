import React from 'react';
import me from '../images/me.jpg';

const About = () => {
    return (
      <div id="About" className="about-container" id="About">
        <img className="me" src={me} alt="" width="200px" />
        <div className="text-area">
          <h2 className="text large collapse-bottom">Andrew Levy</h2>
          <p className="text medium"> Mathematician/Software Developer</p>
          <p className="text small"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>
        </div>
      </div>
    );
  }

  export default About;