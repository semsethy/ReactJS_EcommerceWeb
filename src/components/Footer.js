import React from "react";
import img from '../images/logo1.png';
import './Footer.css';
const Footer = () => {
  return (
    <>
      {/* footer start */}
      <footer className="bgA">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="full">
                <div className="logo_footer">
                  <a href="#">
                    <img width="210" src={img} alt="Company Logo" />
                  </a>
                </div>
                <div className="information_f">
                  <p><strong>ADDRESS:</strong> 28 White tower, Street 1907 Phnom Penh City, Cambodia</p>
                  <p><strong>TELEPHONE:</strong> +855 10383493</p>
                  <p><strong>EMAIL:</strong> sethyrisk@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Services</a></li>
                          <li><a href="#">Testimonial</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                          <li><a href="#">Account</a></li>
                          <li><a href="#">Checkout</a></li>
                          <li><a href="#">Login</a></li>
                          <li><a href="#">Register</a></li>
                          <li><a href="#">Shopping</a></li>
                          <li><a href="#">Widget</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="widget_menu">
                    <h3>Newsletter</h3>
                    <div className="information_f">
                      <p>Subscribe to our newsletter and stay updated.</p>
                    </div>
                    <div className="form_sub">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <fieldset>
                          <div className="field">
                            <input type="email" placeholder="Enter Your Mail" name="email" required />
                            <input type="submit" value="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};

export default Footer;
