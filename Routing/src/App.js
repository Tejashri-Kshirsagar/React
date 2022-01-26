import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import Car from './car'
import Bike from './bike'
import Cycle from './cycle'

class App extends Component{
  render() {
    return(
    <div>
      <Router>
        <Link to="/car"><button>Car</button></Link>
        <Link to="/bike"><button>Bike</button></Link>
        <Link to="/cycle"><button>Cycle</button></Link>

        <Route path="/car" component={Car}/>
        <Route path="/bike" component={Bike}/>
        <Route path="/cycle" component={Cycle}/>
      </Router>
    </div>
    );
  }
}

export default App;