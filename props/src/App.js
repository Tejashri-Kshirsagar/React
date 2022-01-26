import React, {Component} from "react";

class App extends Component{
    render()
    {
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default App;