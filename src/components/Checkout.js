import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import PayPalButton from '../components/PayPalButton'; // Import the PayPalButton component
import './Checkout.css';  // Importing the custom CSS file
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/style.scss';
import '../css/style.css.map';

const Checkout = () => {
  const { cart, total, itemAmount, clearCart } = useContext(CartContext);

  return (
    <div className="checkout-container2">
      <h1 className="checkout-title2">
        <span>Checkout</span></h1>

      {/* Cart Items */}
      <div className="cart-items2 ">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item2">
              <div>
                {item.title} 
                <span style={{ color: 'brown'  }}> x </span>
                <span style={{ color: 'brown' }}>{item.amount}</span>
              </div>
              <div className="cart-item-total">${(item.price * item.amount).toFixed(2)}</div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary2 ">
        <div className="cart-summary-total2">Total: ${parseFloat(total).toFixed(2)}</div>
      </div>

      {/* Checkout Form */}
      <div className="checkout-form2 ">
        <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
        <form className="flex flex-col gap-y-4 ">
          

          {/* PayPal Button */}
          <PayPalButton total={total} />

        </form>
      </div>

      {/* Action Buttons */}
      <div className="checkout-action-buttons2">
        <Link 
          to="/view-cart" 
          className="back-to-cart-button2"
        >
          Back to Cart
        </Link>
        <button 
          onClick={clearCart} 
          className="box3"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Checkout;

