import React from 'react';
//import Cart from './add-to-cart-icon.jpg';
import Pizza from './pizza.jpg';
import Burger from './burger.jpg';
import Roll from './roll.jpg';

function Home(props) {
    //console.warn("props",props)
    console.warn('Home',props.data)
    return(
        <div>
             <div className='cart-wrapper'>
                <div className='img-wrapper'>
                    <img src={Pizza} width="200px" height="100px"></img>
                </div>
                <div className='text-wrapper'>
                    <p>
                        Ovenstory Pizza
                    </p>
                    <p>
                        Price: Rs.150
                    </p>
                </div>
                <div>
                    <button className='btn'
                    onClick={()=>props.addToCartHandler({price:150, name:'Ovenstory Pizza'})
                    }>Add to cart</button> 

                    <button className='btn'
                    onClick={()=>props.removeToCartHandler()
                    }>Remove to cart</button> 
                </div>

            </div>

            <div className='cart-wrapper'>
                <div className='img-wrapper'>
                    <img src={Burger} width="200px" height="100px"></img>
                </div>
                <div className='text-wrapper'>
                    <p>
                        Ovenstory Burger
                    </p>
                    <p>
                        Price: Rs.150
                    </p>
                </div>
                <div>
                    <button className='btn'
                    onClick={()=>props.addToCartHandler({price:150, name:'Ovenstory BURGER'})
                    }>Add to cart</button> 

                    <button className='btn'
                    onClick={()=>props.removeToCartHandler()
                    }>Remove to cart</button> 
                </div>

            </div>

            <div className='cart-wrapper'>
                <div className='img-wrapper'>
                    <img src={Roll} width="200px" height="100px"></img>
                </div>
                <div className='text-wrapper'>
                    <p>
                        Ovenstory Roll
                    </p>
                    <p>
                        Price: Rs.150
                    </p>
                </div>
                <div>
                    <button className='btn'
                    onClick={()=>props.addToCartHandler({price:150, name:'Ovenstory Roll'})
                    }>Add to cart</button> 

                    <button className='btn'
                    onClick={()=>props.removeToCartHandler()
                    }>Remove to cart</button> 
                </div>

            </div>
        </div>
    )
}
export default Home;