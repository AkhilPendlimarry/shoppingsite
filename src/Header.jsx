import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
  <>
    <div className="heading">
      <h1>Shopping Site</h1>
      <Link to="/AllProducts">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>

  </>
 )
}

