import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import RivewItem from "../RivewItem/RivewItem";

const Orders = () => {
 const cart=useLoaderData()


	return (
		<div className="shop-container">
			<div className="product-container" >
				{
                   cart.map(product=><RivewItem product={product} key={product.id}/>) 
                }
			</div>
            <div className="cart-container">
                <Cart cart={cart}/>

            </div>
		</div>
	);
};

export default Orders;
