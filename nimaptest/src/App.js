import './App.css';
// import React,{useState, useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
// import Login from './Login';
import User from './User';
import Task from './Task';
import Nav from './Nav';
function App() {
 return (
    <div className="App">
       <Nav />
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Task" element={<Task />}/>
            <Route path="/" exact={true}  element={<User />}/>
          </Routes>
    </div>
  );
}
export default App;