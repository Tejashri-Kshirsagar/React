import { Component } from "react";

import New1 from './new1.js'

class App extends Component
  {
    constructor()
      {
        super()
        this.state={
          image:""
        }
      }

      hello()
      {
        this.setState({image:<New1/>})
      }

      render()
      {
        return(
          <div>
            <button onClick={()=>this.hello()}>Get Image</button>
            <h1>{this.state.image}</h1>
          </div>
        );
      }
  }

  export default App;
