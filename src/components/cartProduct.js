import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import './components.css';
import Del from './download.png';

class cartProduct extends Component{
 render(){
    const { id,title,img,price}=this.props.product;
   
    return(
        <ProductConsumer>
            {value=>(
            <div className="col-lg-4 col-md-6 card-cont"> 
            <div className="card">
           
            <div className="card-img">
   
                <Link to ="/details">
                <img src={img} alt="product" onClick={()=>value.handledetail(id)} width="150"/>
                </Link>                                                      
                <Link to ="/cart">  <img src={Del} alt="del" onClick={()=>value.delete(id)} width="25"/>
                </Link>
                <p>Product:{title}</p>
            <p> price: {price}</p>   
            </div>        
          <div className="d-flex">  Qty:  <input type="number" onChange={(event)=>value.subtotal(price,event)} id="qty" size="1" />             
       <p className="subtotal">  </p>   <p>$: Subtotal </p> </div>
            </div>

            </div>
        )}
            </ProductConsumer>
        );

        
    }
}

export default cartProduct;