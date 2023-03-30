import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);
    let totalPrice=0;
    let totalShiping=0;
    for (const product of cart) {
        totalPrice=totalPrice+product.price;
    }
    for (const product of cart) {
        totalShiping=totalShiping+product.shipping;
    }
    const tax=totalPrice*7/100  ;
    const grandTotal=totalPrice+totalShiping+tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
                <p>Selected Items:{cart.length}</p>
                <p>Total Price:{totalPrice}</p>
                <p>Total Shipping:{totalShiping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;