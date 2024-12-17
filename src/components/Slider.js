import React, { useEffect } from "react";
import img1 from '../images/bg2.jpg';
import S1 from '../images/S1.png';
import S2 from '../images/S2.png';
import S3 from '../images/S3.png';
import S4 from '../images/S4.png';
import 'font-awesome/css/font-awesome.min.css';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/style.scss';
import '../css/style.css.map';

import '../js/bootstrap.js';
import '../js/jquery-3.4.1.min.js';
import '../js/popper.min.js';
import logo from '../images/logo1.png';
import $ from 'jquery';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const Slider = () => {
  useEffect(() => {
    // Initialize the carousel
    $('#customCarousel1').carousel();
  }, []);  // Empty array means this will run once, after the first render
  return (
    <>
      <div className="hero_area">
        
        {/* slider section */}
        <section className="slider_section">
          <div className="slider_bg_box">
            <img src={img1} alt="Slider Background" />
          </div>
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Carousel Item 1 */}
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>
                          <span>Sale 70% Off</span>
                          <br />
                          Women's Clothing
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <Link to={`/products/${encodeURIComponent("women's clothing")}`} className="btn1">
                            Explore Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-lg-6 d-flex justify-content-center align-items-center" style={{ width: '300px' }}>
                        <img  src={S4} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Item 2 */}
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>
                          <span>Sale 80% Off</span>
                          <br />
                          Men's Clothing
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <Link to={`/products/${encodeURIComponent("men's clothing")}`} className="btn1">
                            Explore Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-lg-6 d-flex justify-content-center align-items-center " style={{ width: '300px' }}>
                        <img  src={S1} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Item 3 */}
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>
                          <span>Sale 90% Off</span>
                          <br />
                          Jewelery
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <Link to="/products/jewelery" className="btn1">
                            Explore Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-lg-6 d-flex justify-content-center align-items-center" style={{ width: '300px' }}>
                        <img src={S2} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Item 4 */}
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>
                          <span>Sale 100% Off</span>
                          <br />
                          Electronics
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <Link to="/products/electronics" className="btn1">
                            Explore Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-lg-6 d-flex justify-content-center align-items-center" style={{ width: '300px' }}>
                        <img  src={S3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="container">
              <ol className="carousel-indicators">
                <li
                  data-target="#customCarousel1"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
                <li data-target="#customCarousel1" data-slide-to="3"></li>
              </ol>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
    </>
  );
};

export default Slider;

