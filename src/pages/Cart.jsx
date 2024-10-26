import React from 'react'
import { Link } from 'react-router-dom';
const Cart = () => {
  return (
    <div className="empty-cart">
      <div className="cart-content">
        <h2>Your cart is empty</h2>
        <button className="btn btn-outline-primary btn-lg">Continue shopping</button>
        <div className="login-section">
          <p>Have an account?</p>
          <Link to="/login" className="login-link">Log in</Link> to check out faster.
        </div>
      </div>
    </div>
  )
}

export default Cart
