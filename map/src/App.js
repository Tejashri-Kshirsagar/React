import React, { Component } from 'react';

class App extends Component{
  render(){
    const a=[1,2,3,4,5];

    const b=a.map((c)=>{
      return<li>{c*4}</li>
    })
    
    return(
      <div>
        {b}
      </div>
    );
  }
}

export default App;
