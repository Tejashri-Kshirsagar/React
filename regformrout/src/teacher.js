import React, { Component } from "react";

class Teacher extends Component{
    render(){
        return(
            <div className="box">
                <h1>Teacher Registration Form</h1>
                Enter Teacher Name:
                <input type="text"></input><br></br><br></br>
                Enter School Name:
                <input type="text"></input><br></br><br></br>
                Enter Teacher Branch:
                <input type="text"></input><br></br><br></br>
                Enter Mobile Number:
                <input type="text"></input><br></br><br></br>
                <button className="submit">Submit</button>
            </div>
        );
    }
}

export default Teacher;