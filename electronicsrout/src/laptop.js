import React, {Component} from 'react';
import './App.css'

import Hp from './hp.jpeg'
import Dell from './dell.jpeg'
import Lenovo from './lenovo.jpeg'
import Asus from './asus.jpeg'
import Acer from './acer.jpeg'
import Hp15 from './hp15.jpeg'
import Asusi3 from './asusi3.jpeg'
import Apple from './apple.jpeg'
import Tuf from './tuf.jpeg'

class Laptop extends Component{
    render(){
        return(
            <div className="container">
                <div className="box3">
                    <img src={Hp} alt="This is a HP" height="300px"></img>
                    <p>HP HP Pavilion Ryzen 5 Hexa Core 4600H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650Ti/144 Hz) 15-ec1025AX Gaming Laptop  (15.6 inch, Shadow Black, 1.98 kg) Rs.56,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box3">
                    <img src={Dell} alt="This is a Dell" height="300px"></img>
                    <p>DELL Inspiron Ryzen 5 Quad Core 3450U - (8 GB/256 GB SSD/Windows 10) Inspiron 3505 Notebook  (15.6 Inch, Soft Mint, 1.83 KG, With MS Office) Rs.39,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box3">
                <img src={Lenovo} alt="This is a Lenovo" height="300px"></img>
                    <p>Lenovo IdeaPad 3 Core i3 10th Gen - (8 GB/256 GB SSD/Windows 10 Home) 15IML05 Thin and Light Laptop  (15.6 Inch, Platinum Grey, 1.7 kg, With MS Office) Rs.36,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box3">
                    <img src={Asus} alt="This is a Asus" height="300px"></img>
                    <p>ASUS Ryzen 3 Dual Core 3250U 3rd Gen - (8 GB/256 GB SSD/Windows 10 Home) M515DA-BQ322TS Thin and Light Laptop  (15.6 inch, Transparent Silver, 1.80 kg, With MS Office) Rs.34,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box3">
                    <img src={Acer} alt="This is a Acer" height="300px"></img>
                    <p>acer Aspire 7 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) A715-75G-50TA/ A715-75G-41G Gaming Laptop  (15.6 inch, Black, 2.15 Kg) Rs.49,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box3">
                    <img src={Hp15} alt="This is a Hp15" height="300px"></img>
                    <p>HP OMEN 15 Ryzen 7 Octa Core 5800H - (16 GB/1 TB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 3060/144 Hz) 15-en1036AX Gaming Laptop  (15.6 inch, Mica Silver, 2.37 Kg) Rs.1,19,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box3">
                    <img src={Asusi3} alt="This is a Asusi3" height="300px"></img>
                    <p>ASUS Core i3 10th Gen - (4 GB + 32 GB Optane/512 GB SSD/Windows 10 Home) X515JA-EJ372TS Thin and Light Laptop  (15.6 inch, Transparent Silver, 1.80 Kg, With MS Office) Rs.35,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box3">
                    <img src={Apple} alt="This is a Apple" height="300px"></img>
                    <p>APPLE MacBook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg) Rs.83,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
                <div className="box3">
                    <img src={Tuf} alt="This is a Tuf" height="300px"></img>
                    <p>ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 Ti/144 Hz) FX506LI-HN271TS Gaming Laptop  (15.6 Inch, Black Plastic, 2.3 KG, With MS Office) Rs.57,990</p>
                    <button className="btn">Buy</button>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default Laptop;