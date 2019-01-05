import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import Product from './Product';

class Cart extends Component{
state={
    arrs:[]
}


    render(){
        return(
     
            <ProductConsumer>
{
    value=>{
      var pro =  value.handlecart();
     const products=value.arrayId;
    return(
    
            <div className="container">
           <div className="row">
           <ul>
           <li >{products}</li>  
              
              <li>{pro[3].id}</li>
          </ul>
          
           </div>
            </div>

    );
            }
}
        </ProductConsumer>

        );
    
        
    }
}

export default Cart;