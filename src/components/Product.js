import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
class Product extends Component{
 render(){
    const { id,title,img,price,inCart }=this.props.product;
   
    return(
       
            <div className="col-lg-4 col-md-6 card-cont"> 
            <div className="card">
            <ProductConsumer>
            {value=>(
            <div className="card-img">
       
               
                <Link to ="/details">
                <img src={img} alt="product" onClick={()=>value.handledetail(id)} width="250"/>
                </Link>
                <button onClick={()=>value.addcart(id)}>Add to cart</button>
                           
                            
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