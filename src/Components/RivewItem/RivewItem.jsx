import React from "react";
import "./RivewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons'
const RivewItem = ({ product ,handaleRemoveCart}) => {
	const { id, img, price, name, quantity } = product;
	return (
		<div className="reviewItem">
			<img src={img} alt="" />
			<div className="review-detail">
                <div>
				<p className="product-title">{name}</p>
				<p>
					Price:<span className="orange-text">${price}</span>
				</p>
				<p>
					Order Quentity:<span className="orange-text">${quantity}</span>
				</p></div>
			</div>
			<button className="btn-delete" onClick={()=>handaleRemoveCart(id)}><FontAwesomeIcon  color="white
            "icon={faTrashCan} /></button>
		</div>
	);
};

export default RivewItem;
