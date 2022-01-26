import { Component } from "react";
import React from "react";
import New from './new';

class App extends Component{
    render(){
        return(
            <div>
                <h1>{<New/>}</h1>
            </div>
        )
    }
}

export default App;