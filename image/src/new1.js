import React, { Component } from "react";
import Dhoni from "./Dhoni.jpg"

class New1 extends Component
{
    render()
    {
        return(
            <div>
                <img src={Dhoni} alt="This is Dhoni" height="100px" width="100px"></img>
            </div>
        );
    }
}

export default New1;