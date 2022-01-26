import { Component } from "react";

import './App.css'

import New1 from './new1.js';
import New2 from './new2.js';
import New3 from './new3.js';
import New4 from './new4.js';
import New5 from './new5.js';

class App extends Component
  {
    constructor()
      {
        super()
        this.state={
          image:""
        }
     }

      hello1()
      {
        this.setState({image:<New1/>})
      }

      hello2()
      {
        this.setState({image:<New2/>})
      }

      hello3()
      {
        this.setState({image:<New3/>})
      }

      hello4()
      {
        this.setState({image:<New4/>})
      }

      hello5()
      {
        this.setState({image:<New5/>})
      }

      render()
      {
        return(
          <div className="fort">
            <h1>{this.state.image}</h1>
            <button className="btn" onClick={()=>this.hello1()}>Rajgad</button>
            <button className="btn" onClick={()=>this.hello2()}>Shivneri</button>
            <button className="btn" onClick={()=>this.hello3()}>Sinhgad</button>
            <button className="btn" onClick={()=>this.hello4()}>Pratapgad</button>
            <button className="btn" onClick={()=>this.hello5()}>Panhala</button>
            
          </div>
        );
      }
  }

  export default App;