import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import '../App.css';

class Details extends Component{

    render(){
        return(
        <ProductConsumer>
            { 
        
                value=>{
                    const {id,title,img,price,company,info}=value.detailProducts;
         
                 
                    return(
                        <div className="container">
                         
                            <div className="row" style={{margin:"2%"}}>
                                <div className="col-md-5">
                                <img src={img} alt="product"/>                                     
                                </div>
                                <div className="col-md-7">
                                <h2 id="detail-title" style={{marginBottom:"2%"}} >{title}</h2>
                                     <h4>Price: {price}</h4>
                                     <h4>Company: {company}</h4>
                                     <p>{info} </p>     
                                     <Link to="/"><button className="btn btn-primary" style={{margin:"1%"}}>Continue shopping</button></Link>
                                    <button id="cartBtn" className="btn btn-primary" onClick={(event)=>{value.addcart(id,event)}}>Add to cart</button>      
                                </div>
                            </div>
                        </div>
                 
                 );
              
                    
                }
            }
            </ProductConsumer>
        );

        
    }
}

export default Details;