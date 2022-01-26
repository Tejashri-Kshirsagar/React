import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import Dhoni from './Dhoni.jpg'


class App extends Component{
  render() {
    return(
        <div>
          <Avatar src={Dhoni}></Avatar>

          <Avatar>R</Avatar>
        </div>
    );
  }
}

export default App;
