import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import Product from './Product';
import './components.css';
class Productlist extends Component{

    render(){
  
        return(
            <div className="row">

            <ProductConsumer>
                    {
                        value=>{
                        
                          return value.products.map(
                           product=>{   return <Product key={product.id} product={product}/>;
                           });
                        }
                    
                    }
                </ProductConsumer>
         
          
            </div>
        );

        
    }
}

export default Productlist;