import React, {Component} from "react";

class Kisan extends Component{
    render(){
        return(
            <div className="box">
                <h1>Kisan Registration Form</h1>
                Enter Kisan Name:
                <input type="text" id="txt"></input><br></br><br></br>
                Enter Kisan State:
                <input type="text" id="txt"></input><br></br><br></br>
                Enter Adhar Number:
                <input type="text" id="txt"></input><br></br><br></br>
                Enter Mobile Number:
                <input type="text" id="txt"></input><br></br><br></br>
                <button className="submit">Submit</button>
            </div>
        );
    }
}

export default Kisan;