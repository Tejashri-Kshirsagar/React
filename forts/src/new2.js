import React,{Component} from "react";

import Shivneri from "./shivneri.jpg";

class New2 extends Component {

    render() {

        return(
               <div>
                    <img src={Shivneri} alt="This is a Shivneri" height="300px" width="400px"></img>
                    <p>Shivneri is known to be a place of Buddhist dominion from the 1st century AD. Its caves, rock-cut architecture and water system indicate the presence of habitation since 1st century AD. Shivneri got its name as it was under the possession of the Yadavas of Devagiri. This fort was mainly used to guard the old trading route from Desh to the port city of Kalyan.  </p>
               </div>
       
        );
    }

}
export default New2;