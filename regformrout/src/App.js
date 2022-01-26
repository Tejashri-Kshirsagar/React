import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from "./home";
import Student from "./student";
import Teacher from "./teacher";
import Employee from "./employee";
import Kisan from "./kisan";
import './app.css';

class App extends Component{
  render(){
    return(
      <div className="buttons">
        <Router>
          <Link to="/home"><button className="btn">Home</button></Link>
          <Link to="/student"><button className="btn">Student</button></Link>
          <Link to="/teacher"><button className="btn">Teacher</button></Link>
          <Link to="/employee"><button className="btn">Employee</button></Link>
          <Link to="/kisan"><button className="btn">Kisan</button></Link>

          <Route path="/home" component={Home}/>
          <Route path="/student" component={Student}/>
          <Route path="/teacher" component={Teacher}/>
          <Route path="/employee" component={Employee}/>
          <Route path="/kisan" component={Kisan}/>
        </Router>
      </div>
    );

  }
}

export default App;