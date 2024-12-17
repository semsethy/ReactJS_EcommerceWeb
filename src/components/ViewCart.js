import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import { SidebarContext } from '../contexts/SidebarContext';
import './ViewCart.css';  // Importing the custom CSS file

const ViewCart = () => {
  const { cart, total, itemAmount, clearCart } = useContext(CartContext);
  const { handleClose } = useContext(SidebarContext);

  return (
    <div className="view-cart-container1">
      <h1 className="view-cart-title1">Your Cart ({itemAmount} Items)</h1>

      {/* Cart Items */}
      <div className="cart-items1">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary1">
        <div className="cart-summary-total1">Total: ${parseFloat(total).toFixed(2)}</div>
        <button 
          onClick={clearCart} 
          className="clear-cart-btn1"
        >
          Clear Cart
        </button>
      </div>

      {/* Actions */}
      <div className="cart-actions1">
        <Link 
          to="/product"
          className="continue-shopping-btn1"
        >
          Continue Shopping
        </Link>
        
        <Link 
          to="/checkout"
          className="checkout-btn1"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default ViewCart;
