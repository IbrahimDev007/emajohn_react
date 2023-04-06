import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../../public/utilities/fakedb";
import Cart from "../Cart/Cart";
import RivewItem from "../RivewItem/RivewItem";
import "./Orders.css";

const Orders = () => {
	const savedCart = useLoaderData();
	const [cart, setcart] = useState(savedCart);
	const handaleRemoveCart = (id) => {
		const remaining = cart.filter((product) => product.id !== id);
		setcart(remaining);
		removeFromDb(id);
	};
 const handleclearCart=()=>{
    setcart([]);
    deleteShoppingCart()
 }

	return (
		<div className="shop-container">
			<div className="review-container">
				{cart.map((product) => (
					<RivewItem
						product={product}
						key={product.id}
						handaleRemoveCart={handaleRemoveCart}
					/>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}
                handleclearCart={handleclearCart}
                > <Link to="/checkout"><button>Procced Checkout</button>
                </Link></Cart>
			</div>
		</div>
	);
};

export default Orders;
