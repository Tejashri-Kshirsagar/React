import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

import Home from "./home";
import Mobile from "./mobile";
import Television from "./television";
import Laptop from "./laptop";
import Refrigerator from "./refrigerator";


class App extends Component{
  render(){
    return(
      <div>
        
        <Router>
          <div className="header">
          <Link to="/home"><button className="button">Home</button></Link>
          <Route path="/home" component={Home}/>
          <Link to="/mobile"><button className="button">Mobile</button></Link>
          <Route path="/mobile" component={Mobile}/>
          <Link to="/television"><button className="button">Television</button></Link>
          <Route path="/television" component={Television}/>
          <Link to="/laptop"><button className="button">Laptop</button></Link>
          <Route path="/laptop" component={Laptop}/>
          <Link to="/refrigerator"><button className="button">Refrigerator</button></Link>
          <Route path="/refrigerator" component={Refrigerator}/>
          </div>
        </Router>
      </div>
    );

  }
}


export default App;
