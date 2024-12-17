import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';  // Assuming you have a ProductCard component
import './ProductDetails.css';  

const ProductDetails = () => {
  // Get the product id from the URL
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Find the product by id
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="product-details-section">
        <p className="text-xl text-gray-500">Loading...</p>
      </section>
    );
  }

  // Destructure the product
  const { title, price, description, image, category } = product;

  // Find related products (excluding the current product)
  const relatedProducts = products.filter(
    (item) => item.category === category && item.id !== product.id
  );

  return (
    <section className="product-details-section">
      <div className="product-container ">
        {/* Product Details */}
        <div className="product-details container ">
          <div className='row'>
            {/* Product Image */}
            <div className="product-image col-xl-4 col-sm-12 center">
              <img
                src={image}
                alt={title}
              />
            </div>

            {/* Product Description */}
            <div className="product-description center">
              <h1 className="product-title">
                {title}
              </h1>
              <div className="product-price">
                ${price.toFixed(2)}
              </div>
              <p className="product-description-text">{description}</p>

              {/* Buttons Section */}
              <div className="product-buttons">
                <Link
                  onClick={() => addToCart(product, product.id)}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </Link>
                <Link
                  to="/view-cart"  // Navigate to the Cart page
                  onClick={() => addToCart(product, product.id)}
                  className="view-cart-btn"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="product_section layout_padding">
            <div className='container'>
              <div className="heading_container heading_center">
                <h2>
                  Related <span>products</span>
                </h2>
              </div>
              <div className="row">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    onAddToCart={() => addToCart(relatedProduct, relatedProduct.id)}
                  />
                ))}
              </div>
              <div className="btn-box">
                <Link to="/product">View All products</Link>
            </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
