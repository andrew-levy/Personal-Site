import React, {useState, useEffect} from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import $ from 'jquery';

import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import CardHolder from './CardHolder';




const App = () =>  {

  const [activeTab, setActiveTab] = useState("Projects");
  const navList = ["Projects", "Skills", "Contact"];

  const handleChangeTabs = () => {
    navList.map( item => {
      $(`#${item}`).click( () => {
        setActiveTab(item)
      });
    })
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
    () => handleChangeTabs()
  );

  return (
      <div className="App-header">
        <Nav 
          activeTab={activeTab} 
          list={navList}
        >
        </Nav>
        <About></About>
        <CardHolder></CardHolder>
        <Contact></Contact>
        <footer>
          <p className="code small">
            React App <img src={logo} className="App-logo" alt="logo" /> Andrew Levy
          </p>
        </footer>
      </div>

  );

}


export default App;
