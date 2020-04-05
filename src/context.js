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
    var temp=this.state.arrayId;
    const product=this.additem(id );
    this.setState(()=>{
       return {detailProducts:product};
    });
  
    if(temp.includes(id)){

    }

};
changeBtn=(id)=>{
    console.log(id);
    var cart=document.getElementById("detail-title");
    console.log(cart);
}
addcart=(id,event)=>{
    var temp=this.state.arrayId;
    if(!temp.includes(id))
    {
var x = event.target;
    x.innerHTML="In Cart"
// var y = event.target.nextSibling;

// y.style.display = "block";


temp.push(id);
    this.setState(()=>{
        return {arrayId:temp};
    },


);
}  
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


return pros;
};
getitem=()=>{
var products=this.handlecart();
return products;

}
delete=(id)=>{
var i=this.state.arrayId.indexOf(id);
if (i > -1) {
    this.state.arrayId.splice(i, 1);
  }

}
subtotal=(price,event)=>{
  var p=price;
  var q=event.target;


var qty=p*q.value;
if(qty>=0){
   q.parentNode.parentNode.nextSibling.innerHTML=qty
//q.nextSibling.innerHTML=qty;


}
else{
   q.nextSibling.innerHTML="00";
}
}
    render(){
        return(
           <ProductContext.Provider value={
               {...this.state,
                handledetail:this.handledetail,
                addcart:this.addcart,
                additem:this.additem,
                delete:this.delete,
                getitem:this.getitem,
                changeBtn:this.changeBtn ,
                subtotal:this.subtotal   }
           }>
            {this.props.children}
           </ProductContext.Provider>
        );

        
    }
}
const ProductConsumer=ProductContext.Consumer;
export {ProductConsumer,ProductProvider};