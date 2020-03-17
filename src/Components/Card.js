import React from 'react';
import Tilt from 'react-tilt';

const Card = props => {
    const tiltOpts = 
        {
            reverse:        true,   // reverse the tilt direction
            max:            15,     // max tilt rotation (degrees)
            perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
            scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
            speed:          300,    // Speed of the enter/exit transition
            transition:     true,   // Set a transition on enter/exit.
            axis:           null,   // What axis should be disabled. Can be X or Y.
            reset:          true,   // If the tilt effect has to be reset on exit.
            easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        };
    return (
        <Tilt options={tiltOpts}>
            <div className="card fade-in">
                <a href={props.link}>
                <img width="250px" src={props.image} alt="" />
                <div className="text-container code">
                    <h2>{props.title}</h2>
                    <p>{props.subtext}</p>
                </div>
                </a>
            </div>
        </Tilt>
      
    );
  }

  export default Card;