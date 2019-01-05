import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';
const ProductContext=React.createContext();
class ProductProvider extends Component{
state={
    products:storeProducts,
    detailProducts:detailProduct,
    arrayId:[],
    finalList:[]
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
    var pros=[];
   items.forEach(
        item=>{
            pro1=this.additem(item);
            pros.push(pro1);

});
// this.setState(()=>{
//     return {finalList:pros}
// });
                     //  console.log(pros);

return pros;
};
getitem=()=>{
var products=this.handlecart();

 var pros=products.forEach(product => {
     console.log(product.title);
    return <li>{product.title} </li>
});
return products;

}

    render(){
        return(
           <ProductContext.Provider value={
               {...this.state,handledetail:this.handledetail,addcart:this.addcart,additem:this.additem,getitem:this.getitem}
           }>
            {this.props.children}
           </ProductContext.Provider>
        );

        
    }
}
const ProductConsumer=ProductContext.Consumer;
export {ProductConsumer,ProductProvider};