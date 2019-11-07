import React from 'react'
import Navmsg from './navmsg'

function Nav(props) {
    return (
      <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
          </li>
          <Navmsg score={props.score} topScore={props.topScore} />
          <li>
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>
    );
  }
  export default Nav;
  
  
  
  
  
