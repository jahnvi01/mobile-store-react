import React, { Component } from 'react';
import {storeProducts,detailProduct, cartpros} from './data';
const ProductContext=React.createContext();
class ProductProvider extends Component{
state={
    products:storeProducts,
    detailProducts:detailProduct,
    arrayId:[],
    finalList:cartpros
}
additem=(id)=>{
const product=this.state.products.find(item=>item.id===id)
return product;

};
handledetail=(id)=>{
    const product=this.additem(id );
    this.setState(()=>{
       return {detailProducts:product};
    });
};
addcart=(id)=>{
    var temp=this.state.arrayId;
    temp.push(id);
    alert("product added");
    this.setState(()=>{
        return {arrayId:temp};
    }

);
    console.log(temp);

};
handlecart=()=>{
    var pro1;
   var items= this.state.arrayId;
  //  console.log("handle");
    var pros=this.state.finalList;
   items.forEach(
        item=>{
      
         //   console.log("inin");
            pro1=this.additem(item);
            pros.push(pro1);

});
// this.setState(()=>{
//     return {finalList:pros}
// });
                       console.log(pros);
//                        console.log("in handle cart");
// console.log(this.state.finalList);
//     console.log("out handle cart");
return pros;
};

    render(){
        return(
           <ProductContext.Provider value={
               {...this.state,handledetail:this.handledetail,addcart:this.addcart,additem:this.additem,handlecart:this.handlecart}
           }>
            {this.props.children}
           </ProductContext.Provider>
        );

        
    }
}
const ProductConsumer=ProductContext.Consumer;
export {ProductConsumer,ProductProvider};