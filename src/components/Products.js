import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const { products } = useContext(ProductContext); // Get products from ProductContext
  const { addToCart } = useContext(CartContext); // Get addToCart function from CartContext
  const { category } = useParams(); // Get category from URL (e.g., /products/men's clothing)
  const [selectedCategory, setSelectedCategory] = useState(category || ''); // Default to category in URL or empty string
  const navigate = useNavigate();

  // Filter products by category (only display those that match the selected category)
  const filteredProducts = products.filter(item => {
    if (!selectedCategory) return true; // If no category is selected, show all products
    return item.category === selectedCategory;
  });

  // Function to handle category change (dropdown)
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    // Navigate to the URL with the selected category
    navigate(`/products/${newCategory}`);
  };

  useEffect(() => {
    // If the URL category changes, update the state
    setSelectedCategory(category || '');
  }, [category]);

  return (
    <>
      {/* Product Section */}
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>

          {/* Category Filter Dropdown */}
          <div className="category-filter">
            <label htmlFor="category">Filter by Category:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="jewelery">Jewelry</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>

          <div className="row">
            {filteredProducts.map((product) => {
              // Destructure the product properties
              const { id, image, category, title, price } = product;

              return (
                <div key={id} className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                    <div className="option_container">
                      <div className="options">
                        {/* Add to Cart */}
                        <Link 
                          onClick={() => addToCart(product)} 
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
              );
            })}
          </div>

          <div className="btn-box">
            <Link to="/product">View All products</Link>
          </div>
        </div>
      </section>
      {/* End Product Section */}
    </>
  );
};

export default Products;

