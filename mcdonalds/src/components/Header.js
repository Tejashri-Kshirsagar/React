import React from 'react';
import Cart from './add-to-cart-icon.jpg';




function Header(props) {
    //console.warn("props",props)
    console.warn('Header',props.data)
    return(
        <div>
             <div className='header'>
                 <span className='cart-count'>{props.data.length}</span>
                <img src={Cart} width="100px"></img>
            </div>
            
        </div>
    )
}
export default Header;