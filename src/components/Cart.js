import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import CartProduct from './cartProduct';
import '../App.css';
import './components.css';
class Cart extends Component{
state={
    arrs:[]
}


    render(){
        return(
                   
            <div className="container">
                 <div className="row">
                <div className="col-md-12">
                <h3 className="shoppingcart">Shopping Cart</h3>
                 </div>
                 </div>
            <div className="row">
           
            <ProductConsumer>
{
    value=>{
      var pros =  value.getitem();
      console.log(pros);
    return pros.map(
        pro=>{
            return <CartProduct key={pro.id} product={pro} />
        }
    );

                          
                        }
                    
                    }
                </ProductConsumer>
        
                </div>
                           </div>

    );
            }
}
      

export default Cart;