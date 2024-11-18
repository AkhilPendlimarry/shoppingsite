import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from './cartContext'

export default function Header() {
  const {cartItems} = useContext(CartContext);
  const cartCount = cartItems.reduce((count, item)=> count + item.quantity, 0);
  return (
  <>
    <div className="heading">
      <h1>Shoppy</h1>
      <Link to="/AllProducts">Products</Link>
      <Link to="/cart">Cart: <span>{cartCount}</span> </Link>
    </div>

  </>
 )
}

