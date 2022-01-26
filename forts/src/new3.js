import React, { Component } from "react";
import Sinhgad from "./sinhgad.jpg"

class New3 extends Component
{
    render()
    {
        return(
            <div>
                <img src={Sinhgad} alt="This is Sinhgad" height="300px" width="400px"></img>
                <p>Sinhagad is a hill fortress located at around 35 km southwest of the city of Pune, India. Some of the information available at this fort suggests that the fort could have been built 2000 years ago. The caves and the carvings in the Kaundinyeshwar temple stand as proofs for the same.
                   Previously known as Kondhana, the fort had been the site of many battles, most notably the Battle of Sinhagad in 1670.</p>
            </div>
        );
    }
}

export default New3;