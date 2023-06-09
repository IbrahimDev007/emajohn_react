import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Inventory from "./Components/Inventory/Inventory";
import Home from "./Components/Layout/Home";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import "./index.css";
import CartLoder from "./Loder/CartLoder";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "/",
				element: <Shop />,
			},
			{
				path: "orders",
				element: <Orders />,
				loader: CartLoder,
			},
			{
				path: "inventory",
				element: <Inventory />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <SignUp />,
			},
		],
	},
	{
		path: "/checkout",
		element: <Checkout />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
