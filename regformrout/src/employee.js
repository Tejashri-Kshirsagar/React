import React, {Component} from "react";

class Employee extends Component{
    render(){
        return(
            <div className="box">
                <h1>Employee Registration Form</h1>
                Enter Employee Name:
                <input type="text" id="txt"></input><br></br><br></br>
                Enter Company Name:
                <input type="text" id="txt"></input><br></br><br></br>
                Enter Employee Branch:
                <input type="text" id="txt"></input><br></br><br></br>
                Enter Mobile Number:
                <input type="text" id="txt"></input><br></br><br></br>
                <button className="submit">Submit</button>
            </div>
        );
    }
}

export default Employee;