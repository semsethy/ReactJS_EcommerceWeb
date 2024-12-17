import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/style.scss';
import '../css/style.css.map';

const Subscribe = () => {
  return (
    <>
      {/* Subscribe Section */}
      <section className="subscribe_section">
        <div className="container-fluid">
          <div className="box">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="subscribe_form">
                  <div className="heading_container heading_center">
                    <h3>Subscribe To Get Discount Offers</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  <form action="#">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Subscribe Section */}

    </>
  );
};

export default Subscribe;
