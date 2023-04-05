import React from "react";
import "./Heder.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
const Heder = () => {
	return (
		<div className="header">
			<img src={logo} alt="" />
			<nav>
            <Link to="/">Shop</Link>
			<Link to="/Orders">Orders</Link>
			<Link to="/Login">Login</Link>
			<Link to="/Inventory">Inventory</Link>
            </nav>
		</div>
	);
};

export default Heder;
