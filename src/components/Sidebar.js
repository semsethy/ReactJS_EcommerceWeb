import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import './Sidebar.css'; // Import the CSS file for the sidebar styles

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className='sidebar-header'>
        <div className='sidebar-item-count'>
          Items: ({itemAmount})
        </div>
        <div onClick={handleClose} className='sidebar-close-btn'>
          <IoMdArrowForward className='sidebar-close-icon' />
        </div>
      </div>

      {/* Cart Items Scroll */}
      <div className='cart-items'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      {/* Cart Summary & Actions */}
      <div className='cart-summary'>
        <div className='total'>
          <span>Total: </span>${parseFloat(total).toFixed(2)}
        </div>
        <div onClick={clearCart} className='clear-cart-btn'>
          <FiTrash2 />
        </div>

        {/* Link to View Cart */}
        <Link to='/view-cart' className='view-cart-btn'>
          View Cart
        </Link>

        {/* Link to Checkout */}
        <Link to='/checkout' className='checkout-btn'>
          Checkout
        </Link>
      </div>
      
    </div>
  );
};

export default Sidebar;
