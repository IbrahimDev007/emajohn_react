import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart ,handleclearCart,children}) => {

	let totalPrice = 0;
	let totalShiping = 0;
	let quantity = 0;
	for (const product of cart) {
        // product.quantity=product.quantity || 1;
		totalPrice = totalPrice + product.price * product.quantity;
		quantity = quantity + product.quantity;
		totalShiping = totalShiping + product.shipping;
	}

	const tax = (totalPrice * 7) / 100;
	const grandTotal = totalPrice + totalShiping + tax;
	return (
		<div className="cart">
			<h4>Order Summery</h4>
			<p>Selected Items:{quantity}</p>
			<p>Total Price:{totalPrice}</p>
			<p>Total Shipping:{totalShiping}</p>
			<p>Tax:{tax.toFixed(2)}</p>
			<h6>Grand Total:{grandTotal.toFixed(2)}</h6>
			<button className="btn-clearCart" onClick={handleclearCart}><span>Clear Cart</span><FontAwesomeIcon  icon={faTrashCan} /></button>
			{children}
		</div>
	);
};

export default Cart;
