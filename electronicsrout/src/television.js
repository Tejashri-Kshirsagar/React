import React, {Component} from 'react';
import './App.css'

import Hisense from './hisense.jpeg'
import Iffalcon from './iffalcon.jpeg'
import Lg139 from './lg139.jpeg'
import Mi4X from './mi4X.jpeg'
import Mi5X from './mi5X.jpeg'
import OnePlus from './oneplus.jpeg'
import Toshiba from './toshiba.jpeg'
import Vupremium from './vupremium.jpeg'
import Tcl from './tcl.jpeg'

class Television extends Component{
    render(){
        return(
            <div className="container">
                <div className="box2">
                    <img src={Hisense} alt="This is a Hisense"></img>
                    <p>Hisense U6G Series 139 cm (55 inch) QLED Ultra HD (4K) Smart Android TV  (55U6G) Rs.59,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box2">
                    <img src={Iffalcon} alt="This is a Iffalcon"></img>
                    <p>iFFALCON by TCL 126 cm (50 inch) Ultra HD (4K) LED Smart Android TV  (50K61) Rs.28,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box2">
                <img src={Lg139} alt="This is a Lg139"></img>
                    <p>LG 139 cm (55 inch) Ultra HD (4K) LED Smart TV  (55UP7500PTZ) Rs.52,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box2">
                    <img src={Mi4X} alt="This is a Mi4X"></img>
                    <p>Mi 4X 138.8 cm (55 inch) Ultra HD (4K) LED Smart TV Rs.42,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box2">
                    <img src={Mi5X} alt="This is a Mi5X"></img>
                    <p>Mi 5X 138.8 cm (55 inch) Ultra HD (4K) LED Smart Android TV with Dolby Atmos and Dolby Vision Rs.45,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box2">
                    <img src={OnePlus} alt="This is a OnePlus"></img>
                    <p>OnePlus U1S 126 cm (50 inch) Ultra HD (4K) LED Smart Android TV  (50UC1A00) Rs.43,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box2">
                    <img src={Toshiba} alt="This is a Toshiba"></img>
                    <p>TOSHIBA U50 Series 139 cm (55 inch) Ultra HD (4K) LED Smart TV with Dolby Vision and ATMOS  (55U5050) Rs.34,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box2">
                    <img src={Vupremium} alt="This is a Vupremium"></img>
                    <p>Vu Premium 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV  (55PM) Rs.38,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box2">
                    <img src={Tcl} alt="This is a Tcl"></img>
                    <p>TCL P615 126 cm (50 inch) Ultra HD (4K) LED Smart TV with Dolby Audio  (50P615) Rs.33,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default Television;