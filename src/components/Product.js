import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import './components.css';
class Product extends Component{
 render(){
    const { id,title,img,price,info}=this.props.product;
    var description=info
       description=description.slice(0,120);
       console.log(description)
       console.log(info)
    return(
        <ProductConsumer>
        {value=>(                                  
            <div className="col-lg-3 col-md-6 card card-cascade card-ecommerce" style={{margin:"10px",justifyContent:"center"}}> 




<div className="view view-cascade overlay">

  <img className="card-img-top" src={img} alt="product" onClick={()=>value.handledetail(id)}
    alt="" />
 
</div>

<div className="card-body card-body-cascade text-center">
<Link to ="/details" style={{textDecoration:"none",font:"black !important"}}>
  <h4 className="card-title"><strong>{title}</strong></h4>

  <p className="card-text">{description} </p>
  </Link>
  <div className="card-footer">
    <span className="float-left">{price}$ </span>
    <button onClick={(event)=>value.addcart(id,event)} className="btn btn-primary">Add to cart</button>

  </div>

</div>



         

            </div>
          
          )}
            </ProductConsumer>
        );

        
    }
}

export default Product;