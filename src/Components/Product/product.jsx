import React from "react";
import "./product.css";

const Product = (props) => {
	const { id, img, name, price, seller, quantity, ratting } = props.product;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product-info">
				<h6 className="product-name">{name}</h6>
				<p>Price:${price}</p>
				<p>Manufacture:{seller}</p>
				<p>Ratting:{ratting} star</p>
			</div>
            <button className="btn-cart">Add To Cart</button>
		</div>
	);
};

export default Product;
