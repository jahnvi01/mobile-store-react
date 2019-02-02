import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import './components.css';
class Product extends Component{
 render(){
    const { id,title,img,price}=this.props.product;
   
    return(
                                          
            <div className="col-lg-4 col-md-6 card-cont"> 
            <div className="card">
            <ProductConsumer>
            {value=>(
            <div className="card-img">
       
               
                <Link to ="/details">
                <img src={img} alt="product" onClick={()=>value.handledetail(id)} width="250"/>
                </Link>
                <button onClick={(event)=>value.addcart(id,event)} >Add to cart</button>
                <h4 className="message">product added to cart</h4>  
                            
            </div> )}
            </ProductConsumer>
            <p>{title}</p>
            <p>{price}</p>
           
            </div>

            </div>
          
        
        );

        
    }
}

export default Product;