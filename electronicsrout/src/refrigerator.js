import React, {Component} from 'react';
import './App.css'

import Samsung198 from './samsung198.jpeg'
import Samsung192 from './samsung192.jpeg'
import Samsung253 from './samsung253.jpeg'
import Samsung192L from './samsung192L.jpeg'
import Lg190 from './lg190.jpeg'
import Hier256 from './hier256.jpeg'
import Samsung230 from './samsung230.jpeg'
import Whirlpool190 from './whirlpool190.jpeg'
import Lg260 from './lg260.jpeg'

class Refrigerator extends Component{
    render(){
        return(
            <div className="container">
                <div className="box4">
                    <img src={Samsung198} alt="This is a Samsung198" height="300px"></img>
                    <p>SAMSUNG 198 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer  (Camellia Blue, RR21T2H2WCU/HL) Rs.17,290</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box4">
                    <img src={Samsung192} alt="This is a Samsung 192" height="300px"></img>
                    <p>SAMSUNG 192 L Direct Cool Single Door 2 Star Refrigerator  (Gray Silver, RR19A241BGS/NL) Rs.12,390</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box4">
                <img src={Samsung253} alt="This is a Samsung 253" height="300px"></img>
                    <p>SAMSUNG 253 L Frost Free Double Door 3 Star Refrigerator  (Elegant Inox, RT28A3453S8/HL) Rs.23,490</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box4">
                    <img src={Samsung192L} alt="This is a Samsung 192 L" height="300px"></img>
                    <p>SAMSUNG 192 L Direct Cool Single Door 3 Star Refrigerator  (Saffron Red, RR20A1Y2YR8/HL) Rs.6,699</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box4">
                    <img src={Lg190} alt="This is a LG 190" height="300px"></img>
                    <p>LG 190 L Direct Cool Sin/gle Door 4 Star Refrigerator with Base Drawer  (Blue Plumeria, GL-D201ABPY) Rs.15,490</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box4">
                    <img src={Hier256} alt="This is a Hier 256" height="300px"></img>
                    <p>Haier 256 L Frost Free Double Door Bottom Mount 3 Star Convertible Refrigerator  (DAZZLE STEEL, HEB-25TDS) Rs.23,190</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box4">
                    <img src={Samsung230} alt="This is a Samsung 230" height="300px"></img>
                    <p>SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator  (Elegant Inox, RR24A2Y2YS8/NL) Rs.16,390</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box4">
                    <img src={Whirlpool190} alt="This is a Whirlpool190" height="300px"></img>
                    <p>Whirlpool 190 L Direct Cool Single Door 3 Star Refrigerator  (Solid Blue / Blue, WDE 205 CLS 3S BLUE) Rs.12,740</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box4">
                    <img src={Lg260} alt="This is a LG260" height="300px"></img>
                    <p>LG 260 L Frost Free Double Door Top Mount 3 Star Convertible Refrigerator  (Dazzle Steel, GL-S292RDSX) Rs.24,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default Refrigerator;