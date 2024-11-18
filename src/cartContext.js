import React, { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=> {
    const [cartItems, setCartItems] = useState(()=>{
        const saveToLocalStorage = localStorage.getItem("cartItems");
        return saveToLocalStorage ? JSON.parse(saveToLocalStorage):[]; // retrieve saved items if any from the local storage on initial load and keeps empty array if no items found.
    });
    console.log(cartItems)
    
    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]); // updates teh storage when the state changes.
    const addToCart=(product) => {
        setCartItems((prevItems)=> {
            const existingItem = prevItems.find(item=> item.id === product.id);
            if (existingItem){
             return prevItems.map(item=> item.id===product.id ? {...item, quantity: item.quantity+1}:item
            );
            }else{
                return [...prevItems, {...product, quantity:1}];
            }
        });
    };

    const increment=(productId)=>{
        setCartItems((prevItems)=>
            prevItems.map(item=>item.id === productId? {...item, quantity: item.quantity+1}:item
        ))
    
    };

    const decrement=(productId)=>{
        setCartItems((prevItems)=>
            prevItems.map(item=>item.id === productId? {...item, quantity: item.quantity-1}:item
        ).filter(item=>item.quantity > 0));
    };

    const removeItem=(productId)=>{
        setCartItems((prevItems)=>prevItems.filter(item=>item.id !== productId));
    };

return (
 <CartContext.Provider value={{cartItems, addToCart, increment, decrement, removeItem}}>
    {children}
 </CartContext.Provider>
)}
export default CartContext;
