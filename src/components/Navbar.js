import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
class Navbar extends Component{

    render(){
        return(
            <div className="row navbar">
            <div className="col-md-5"> 
            <Link to="/">
            <img src={Logo} alt="logo" width="130" height="80" className="logo"/>
            </Link> 
            </div>
          
            <div className="col-md-7"><Link to="/cart"> <h5 id="shopping-cart">Shopping cart</h5></Link></div>
            </div>
        );

        
    }
}

export default Navbar;