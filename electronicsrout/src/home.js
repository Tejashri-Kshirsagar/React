import React, {Component} from 'react';
import './App.css'

import Electronics from './electronics.png'
class Home extends Component{
    render(){
        return(
            <div className="home">
                <h1>Welcome to Electronics Mall</h1>
                <img src={Electronics} alt="this is elctronics" height="300px"></img>
            </div>
        );
    }
}

export default Home;