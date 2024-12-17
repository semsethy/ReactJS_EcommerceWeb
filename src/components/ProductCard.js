import React from 'react';
import { Link } from 'react-router-dom';
// import './ProductCard.css';
import '../css/bootstrap.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { id, title, image, price, category } = product;

  return (
    <>
      {/* Product Section */}
      <div key={id} className="col-sm-6 col-md-4 col-lg-4 ">
        <div className="box">
          <div className="option_container">
            <div className="options">
              {/* Add to Cart */}
              <Link 
                onClick={onAddToCart} 
                className="option1"
              >
                Add To Cart
              </Link>
              {/* View Product Detail */}
              <Link to={`/product/${id}`} className="option2">
                View
              </Link>
            </div>
          </div>
          <div className="img-box">
            <img src={image} alt={title} />
          </div>
          <div className="detail-box">
            <h5>{title}</h5>
            <h6 style={{ color: 'gray' }}>{category}</h6>

            <h6 style={{ color: 'red' }}>${price}</h6>
          </div>
        </div>
      </div>
      {/* End Product Section */}
    </>
  );
};

export default ProductCard;
