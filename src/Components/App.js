import React, {useState, useEffect} from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import $ from 'jquery';

import Nav from './Nav';
import Hub from './Hub';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import CardHolder from './CardHolder';

require('dotenv').config()


const App = () =>  {

  const [activeTab, setActiveTab] = useState("Projects");
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const navList = ["Projects", "Skills", "Contact"];

  const handleChangeTabs = () => {
    navList.map( item => {
      $(`#${item}`).click( () => {
        setActiveTab(item)
      });
    })
  }
  

  const handleRefresh = () => {
    let url = window.location.href;
    if ((url.indexOf("#") !== -1) && (activeTab !== url.split("#")[1])) {
      window.location.href = `${url.split("#")[0]}`
    }
  }
  const fetchCryptoPrices = () => {
    let endpoint = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.API_KEY}`;
    fetch(endpoint, 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => data.json())
      .then(json => parseCryptoJSON(json))
  }


  const parseCryptoJSON = (json) => {
    json.data.map( crypto => {
      console.log(crypto.name)
    })
  }



  // Did Mount
  useEffect(
    () => {
      handleRefresh()
      fetchCryptoPrices()
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
        <Hub></Hub>
        <CardHolder></CardHolder>
        <Contact></Contact>
        <Footer image={logo}></Footer>
      </div>

  );

}


export default App;
