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

<div className="col-lg-3 col-md-6 card card-cascade card-ecommerce" style={{margin:"10px",justifyContent:"center"}}> 




<div className="view view-cascade overlay">

  <img className="card-img-top" src={img} width="150" alt="product" onClick={()=>value.handledetail(id)}
    alt="" />
 
</div>

<div className="card-body card-body-cascade text-center">
<Link to ="/details" style={{textDecoration:"none",font:"black !important"}}>
  <h4 className="card-title"><strong>{title}</strong></h4>

  </Link>
  <div className="card-footer d-flex" style={{justifyContent:"space-around"}}>
    <span className="float-left">{price}$ </span>
   
  <div className="d-flex float-right">  Qty:  <input type="number" onChange={(event)=>value.subtotal(price,event)} id="qty" size="1" />             
  </div>  
  </div>
   <p className="subtotal" >  </p>   <p>$: Subtotal </p> </div>
  
    <Link to ="/cart"  style={{justifyContent:"center"}} >  <img src={Del} alt="del" onClick={()=>value.delete(id)} width="25"/></Link>



            </div>
    //         <div className="col-lg-4 col-md-6 card-cont"> 
    //         <div className="card">
           
    //         <div className="card-img">
   
    //             <Link to ="/details">
    //             <img src={img} alt="product" onClick={()=>value.handledetail(id)} width="150"/>
    //             </Link>                                                      
    //             <Link to ="/cart">  <img src={Del} alt="del" onClick={()=>value.delete(id)} width="25"/>
    //             </Link>
    //             <p>Product:{title}</p>
    //         <p> price: {price}</p>   
    //         </div>        
    //       <div className="d-flex">  Qty:  <input type="number" onChange={(event)=>value.subtotal(price,event)} id="qty" size="1" />             
    //    <p className="subtotal">  </p>   <p>$: Subtotal </p> </div>
    //         </div>

    //         </div>
        )}
            </ProductConsumer>
        );

        
    }
}

export default cartProduct;