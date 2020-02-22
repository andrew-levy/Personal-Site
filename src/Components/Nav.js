
import React from 'react';
import logo from '../images/logo.svg';

const Nav = props => {
    return (
      <ul className="nav-bar">
        <li><img src={logo} className="App-logo" alt="logo" /></li>
        {
          props.list.map( item => 
            <li key={item}> 
              <a id={item} href={`#${item}`} className={(item === props.activeTab) ? "active text medium" : "text medium"} > 
                {item} 
              </a>
            </li>
          )
        }
      </ul>
    );
  }

  export default Nav;