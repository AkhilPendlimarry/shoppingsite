import React, { useContext } from "react";
import CartContext from "./cartContext";

function Cart() {
    const { cartItems } = useContext(CartContext);
    console.log('cart item logged')
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
