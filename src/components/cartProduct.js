import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';

class cartProduct extends Component{
 render(){
    const { id,title,img,price}=this.props.product;
   
    return(
       
            <div className="col-lg-4 col-md-6 card-cont"> 
            <div className="card">
            <ProductConsumer>
            {value=>(
            <div className="card-img">
       
               
                <Link to ="/details">
                <img src={img} alt="product" onClick={()=>value.handledetail(id)} width="150"/>
                </Link>
             
                           
                            
            </div> )}
            </ProductConsumer>
            <p>{title}</p>
            <p>{price}</p>
          Qty:  <input type="number" value="1" size="1" />
            </div>

            </div>
          
        
        );

        
    }
}

export default cartProduct;