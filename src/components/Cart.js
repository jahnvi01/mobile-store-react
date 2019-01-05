import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import CartProduct from './cartProduct';
import '../App.css';
class Cart extends Component{
state={
    arrs:[]
}


    render(){
        return(
                   
            <div className="container">
                 <div className="row">
                <h3 className="shoppinggcart">Shopping Cart</h3>
                 </div>
            <div className="row">
            <div className="d-flex flex-column col-md-12">
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
                           </div>

    );
            }
}
      

export default Cart;