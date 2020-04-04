import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import './components.css';
class Product extends Component{
 render(){
    const { id,title,img,price}=this.props.product;
   
    return(
                                          
            <div className="col-lg-4 col-md-6 card card-cascade card-ecommerce"> 
  <ProductConsumer>
  {value=>(
<Link to ="/details">


<div className="view view-cascade overlay">
  <img className="card-img-top" src={img} alt="product" onClick={()=>value.handledetail(id)}
    alt="" />
  <a>
    <div className="mask rgba-white-slight"></div>
  </a>
</div>

<div className="card-body card-body-cascade text-center">

  <h4 className="card-title"><strong>{title}</strong></h4>

  <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </p>

  <div className="card-footer">
    <span className="float-left">{price}$ </span>
    <button onClick={(event)=>value.addcart(id,event)} className="btn btn-primary">Add to cart</button>
    {/* <span className="float-right"><a className="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><i
          className="fas fa-heart"></i></a></span> */}
  </div>

</div>





            {/* <div className="card">
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
           
            </div> */}
            </Link>
  )}
            </ProductConsumer>
            </div>
          
        
        );

        
    }
}

export default Product;