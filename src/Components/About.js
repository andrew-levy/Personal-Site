import React from 'react';
import me from '../images/me.jpg';

const About = () => {
    return (
      <div id="About" className="about-container" id="About">
        <img className="me" src={me} alt="" />
        <div className="text-area">
          <h2 className="text large collapse-bottom">Andrew Levy</h2>
          <p className="text medium"> Mathematician/Software Developer</p>
          <p className="text small"> 
            I recently graduated from James Madison University ('19) with a degree in Mathematics and Computer Science. I am currently a Software Developer - Consultant at CapTech Ventures, Inc. Some of my interests include pure mathematics, virtual reality, augmented reality, web and mobile development. 
          </p>
        </div>
      </div>
    );
  }

  export default About;