import React, {Component } from 'react';

class App extends Component{
   constructor(){
       super()
       this.state={
           data:[{id:1, name:"Sachin",age:23},
            {id:2,name:"Virat",age:28}]
       }
   }
   render(){
       return(
           <div>
               {
                   this.state.data.map((a)=>
                   <div>
                       <li>{a.id}</li>
                       <li>{a.name}</li>
                       <li>{a.age}</li><ln/>
                   </div>
                   )
               }
           </div>
       );
   }
}

export default App;