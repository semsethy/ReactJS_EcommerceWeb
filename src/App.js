import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Product from './components/Products';
import Aboutus from './pages/About';
import Testimonial from './pages/Testimonial';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Sidebar from './components/Sidebar';
import ProductDetails from './pages/ProductDetails';
import ViewCart from './components/ViewCart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:category" element={<Product />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/view-cart" element={<ViewCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

