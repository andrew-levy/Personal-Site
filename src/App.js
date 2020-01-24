import React, {useState, useEffect} from 'react';
import logo from './images/logo.svg';
import molecular from './images/molecular.jpeg';
import me from './images/me.jpg';
// import imageCompression from './images/imageCompression.jpg';
import './App.css';
import $ from 'jquery';


const Nav = props => {
  return (
    <ul className="nav-bar">
      <li><img src={logo} className="App-logo" alt="logo" /></li>
      {
        props.list.map( item => 
          <li key={item}> 
            <a id={item} href={"#" + item} className={(item === props.activeTab) ? "active text medium" : "text medium"} > 
              {item} 
            </a>
          </li>
        )
      }
    </ul>
  );
}

const Card = props => {
  return (
    <div className="card fade-in">
      <a href={props.link}>
        <img width="300px" src={props.image} alt="" />
        <div className="text-container code">
          <h2>{props.title}</h2>
          <p>{props.subtext}</p>
        </div>
      </a>
    </div>
    
  );
}

const Contact = props => {
  return (
    <div id="Contact" className="contact-container" id="Contact">
      <h2 className="text large">Contact Me</h2>

    </div>
  );
}

const About = props => {
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


const App = props =>  {
  // States
  const [activeTab, setActiveTab] = useState("Projects")

  // Helpers
  const handleChangeTabs = () => {
    $("#Projects").click(function() {
      setActiveTab("Projects")
    });
    $("#Skills").click(function() {
      setActiveTab("Skills")
    });
    $("#Contact").click(function() {
      setActiveTab("Contact")
    });
  }


  // Did Mount
  useEffect(
    () => {

      fetch("path/to/something")
        .then()
        
    },
    []
  );
  // Did update
  useEffect(
    () => {
      handleChangeTabs()
      
    }
  );



  return (
    
      <div className="App-header">
        <Nav activeTab={activeTab} list={["Projects", "Skills", "Contact"]}></Nav>
        <About></About>

        {/* Begin Project Cards */}
        <div id="Projects">
          <h2 className="text large center">Projects</h2>
          <div className="card-holder">
            <Card
            title="MoleculAR"
            subtext="Augement Reality app for Chemistry students"
            image={molecular}
            link="https://github.com/andrew-levy/MoleculAR" >
            </Card>
            <Card
            title="Image Compression"
            subtext="Java App that uses the Singular Value Decomposition algorithm to compress images"
            image={molecular}
            link="https://github.com/andrew-levy/ImageCompressionApp" >
            </Card>
            <Card
            title="WeeTweet"
            subtext="React + Express App using the Twitter API"
            image={molecular}
            link="https://github.com/andrew-levy/Twitter-React-Express" >
            </Card>
          </div>
      </div>
        {/* End Project Cards */}
        <Contact></Contact>
        <footer>
        <p className="code small">React App <img src={logo} className="App-logo" alt="logo" /> Andrew Levy</p>
        </footer>
      </div>

  );

}


export default App;
