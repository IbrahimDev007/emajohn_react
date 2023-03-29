import React from "react";
import "./Heder.css";
import logo from "../../images/Logo.svg";
const Heder = () => {
	return (
		<div className="header">
			<img src={logo} alt="" />
			<nav>
            <a href="/Shop">Shop</a>
			<a href="/Order">Order</a>
			<a href="/Login">Login</a>
			<a href="/Inventory">Inventory</a>
            </nav>
		</div>
	);
};

export default Heder;
