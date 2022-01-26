import React, {Component} from 'react';
import './App.css'

import Iphone from './iphone12.jpeg'
import Moto60 from './moto60.jpeg'
import PocoX3 from './pocoX3.jpeg'
import RealmeC11 from './realmeC11.jpeg'
import RealmeC21Y from './realmeC21Y.jpeg'
import RealmeC25Y from './realmeC25Y.jpeg'
import RealmeNarzo from './realmenarzo.jpeg'
import RealmeNarzo50A from './realmenarzo50A.jpeg'
import SamsungF12 from './samsungF12.jpeg'

class Mobile extends Component{
    render(){
        return(
            <div className="container">
                <div className="box1">
                    <img src={Iphone} alt="This is a Iphone12" height="300px"></img>
                    <p>APPLE iPhone 12 Mini (White, 64 GB) Rs.42,099</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box1">
                    <img src={Moto60} alt="This is a MotoG60"></img>
                    <p>MOTOROLA G60 (Frosted Champagne, 128 GB)  (6 GB RAM) Rs.15,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box1">
                <img src={PocoX3} alt="This is a PocoX3"></img>
                    <p>POCO X3 Pro (Steel Blue, 128 GB)  (6 GB RAM) Rs.16,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box1">
                    <img src={RealmeC11} alt="This is a RealmeC11" height="300px"></img>
                    <p>realme C11 2021 (Cool Blue, 32 GB)  (2 GB RAM) Rs.6,699</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box1">
                    <img src={RealmeC21Y} alt="This is a RealmeC21Y"></img>
                    <p>realme C21Y (Cross Black, 32 GB)  (3 GB RAM) Rs.8,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box1">
                    <img src={RealmeC25Y} alt="This is a RealmeC25Y"></img>
                    <p>realme C25Y (Glacier Blue, 64 GB)  (4 GB RAM) Rs.9,999</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box1">
                    <img src={RealmeNarzo} alt="This is a RealmeNarzo"></img>
                    <p>realme Narzo 30 (Racing Silver, 64 GB)  (4 GB RAM) Rs.13,499</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box1">
                    <img src={RealmeNarzo50A} alt="This is a RealmeNarzo50A"></img>
                    <p>realme Narzo 50A (Oxygen Blue, 128 GB)  (4 GB RAM) Rs.12,499</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box1">
                    <img src={SamsungF12} alt="This is a SamsungF12"></img>
                    <p>SAMSUNG Galaxy F12 (Sea Green, 64 GB)  (4 GB RAM) Rs.9,499</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
               
            </div>
        );
    }
}

export default Mobile;