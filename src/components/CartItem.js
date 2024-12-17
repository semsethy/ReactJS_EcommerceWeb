import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';
import './CartItem.css'; // Import the CSS file for CartItem styles

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  
  // Destructure item properties
  const { id, title, image, price, amount } = item;

  return (
    <div className='cart-item'>
      <div className='cart-item-container'>
        {/* Product Image */}
        <Link to={`/product/${id}`} className='cart-item-image'>
          <img src={image} alt={title} />
        </Link>
        
        <div className='cart-item-details'>
          <div className='cart-item-header'>
            {/* Product Title */}
            <Link to={`/product/${id}`} className='cart-item-title'>{title}</Link>
            {/* Remove Icon */}
            <div onClick={() => removeFromCart(id)} className='cart-item-remove'>
              <IoMdClose />
            </div>
          </div>

          <div className='cart-item-actions'>
            {/* Quantity Controls */}
            <div className='cart-item-quantity'>
              <div onClick={() => decreaseAmount(id)} className='cart-item-quantity-btn'>
                <IoMdRemove />
              </div>
              <div className='cart-item-quantity-value'>{amount}</div>
              <div onClick={() => increaseAmount(id)} className='cart-item-quantity-btn'>
                <IoMdAdd />
              </div>
            </div>

            {/* Price per Item */}
            <div className='cart-item-price'>
              $ {price}
            </div>

            {/* Total Price */}
            <div className='cart-item-total'>
              $ {parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
