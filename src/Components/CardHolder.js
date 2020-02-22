
import React from 'react';
import Card from './Card';
import  molecular from '../images/molecular.jpeg';

const CardHolder = () => {
    return (
        <div id="Projects">
          <h2 className="text large center">Projects</h2>
          <div className="card-holder">
            <Card
                title="MoleculAR"
                subtext="Augement Reality app for Chemistry students"
                image={molecular}
                link="https://github.com/andrew-levy/MoleculAR"
            >
            </Card>
            <Card
                title="Image Compression"
                subtext="Java App that uses the Singular Value Decomposition algorithm to compress images"
                image={molecular}
                link="https://github.com/andrew-levy/ImageCompressionApp" 
            >
            </Card>
            <Card
                title="WeeTweet"
                subtext="React + Express App using the Twitter API"
                image={molecular}
                link="https://github.com/andrew-levy/Twitter-React-Express" 
            >
            </Card>
          </div>
      </div>
      
    );
  }

  export default CardHolder;