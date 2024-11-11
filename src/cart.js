import React, { useContext } from "react";
import CartContext from "./cartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
    const { cartItems, increment, decrement, removeItem } = useContext(CartContext);
    console.log("cart items:", cartItems);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <div>
                                {item.id} - {item.name} -{item.description}- ${item.price*item.quantity}
                            </div>
                            <div className="cartBtn">
                                <button className="btn btn-primary" onClick={()=> increment(item.id)}> + </button>
                                <span>{item.quantity}</span>
                                <button className="btn btn-secondary"onClick={()=> decrement(item.id)}> - </button>
                                <button className="btn btn-danger" onClick={()=> removeItem(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
