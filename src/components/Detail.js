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
                    const {id,title,img,price,company,info,inCart}=value.detailProducts;
                    return(
                        <div className="container">
                            <div className="row">
                                <h2 id="detail-title">{title}</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                <img src={img} alt="product"/>                                     
                                </div>
                                <div className="col-md-7">
                                     <h4>Price: {price}</h4>
                                     <h4>Company: {company}</h4>
                                     <p>{info} </p>     
                                     <Link to="/"><button>Continue shopping</button></Link>
                                     <Link to="/cart"><button onClick={()=>{value.addcart(id)}}>Add to cart</button>         </Link> 
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