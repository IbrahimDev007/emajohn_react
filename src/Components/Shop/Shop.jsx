import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../../public/utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/product";
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(() => {
      fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
     
    }, [])
    useEffect(() => {
    //   console.log('products',products);
    const storeCart=getShoppingCart();
  const  addSaveCart=[];
for (const id in storeCart) {
  const saveProduct= products.find((product)=>product.id===id)
    // console.log(saveProduct); 
    if(saveProduct){
    const quantity=storeCart[id];
    saveProduct.quantity=quantity;
  addSaveCart.push(saveProduct);
}

setCart(addSaveCart);

}

    }, [products])
    
    const handleAddToCart=(product)=>{
        // console.log(id);
        // const newCart=[...cart,product]
        let newCart=[];
        const exist=cart.find(pd=>pd.id==product.id)
        if(!exist){
             product.quantity=1
            newCart=[...cart,product] 
            console.log(newCart);
 
        }

        else{
 exist.quantity=exist.quantity+1
const remaining =cart.filter(pd=>pd.id!==product.id)
     newCart=[...remaining,exist]
        }
        setCart(newCart)
        addToDb(product.id)
     }

	return (
		<div className="shop-container">
			<div className="product-container">
				{products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>)}
			</div>
			<div className="cart-container">
				<Cart cart={cart} />
			</div>
		</div>
	);
};

export default Shop;
