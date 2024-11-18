import React, { useContext, useState } from "react";
import CartContext from "./cartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
    const { cartItems, increment, decrement, removeItem } = useContext(CartContext);
    console.log(cartItems)
    const[discountPrice, setDiscountPrice] = useState(null);

    const calculateTotalPrice=()=> cartItems.reduce((total, item)=>total+item.price*item.quantity,0);

    const applyDiscountOnTotal =()=>{
        const total= calculateTotalPrice();
        setDiscountPrice(total*0.1);  // discount set at 10%
    }

    return (
        <div className="cartContainer">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <table className="cartTable">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Controls</th>
                            </tr>
                        </thead>
                    
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>${item.price*item.quantity}</td>

                                <td id="cartBtn">
                                    <button className="btn btn-secondary m-2" onClick={()=> decrement(item.id)}> - </button>
                                    <span>{item.quantity}</span>
                                    <button className="btn btn-primary ms-2"onClick={()=> increment(item.id)}> + </button>
                                    <button className="btn btn-danger m-3" onClick={()=> removeItem(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                
                  <div className="cartSummary">
                    <h3>Total : ${calculateTotalPrice()}</h3>
                    {discountPrice && <h3>Discounted Total:${(calculateTotalPrice() - discountPrice)} </h3>}
                    <button className="discountBtn" onClick={applyDiscountOnTotal}>Apply Discount: {discountPrice ? discountPrice.toFixed(2): "10%"}</button>
                  </div>
                </div>
            )}
        </div>
          
        );
}

export default Cart;
