import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/style.scss';
import '../css/style.css.map';

const Client = () => {
  return (
    <>

      {/* Client Section */}
      <section class="client_section layout_padding">
         <div class="container">
            <div class="heading_container heading_center">
               <h2>
                  Customer's Testimonial
               </h2>
            </div>
            <div id="carouselExample3Controls" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="box col-lg-10 mx-auto">
                        <div class="img_container">
                           <div class="img-box">
                              <div class="img_box-inner">
                                 <img src="IMG_2867.JPG" alt=""/>
                              </div>
                           </div>
                        </div>
                        <div class="detail-box">
                           <h5>
                           JoshipTy
                           </h5>
                           <h6>
                              Customer
                           </h6>
                           <p>
                              Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="box col-lg-10 mx-auto">
                        <div class="img_container">
                           <div class="img-box">
                              <div class="img_box-inner">
                                 <img src="1720163945799.571 2.jpg" alt=""/>
                              </div>
                           </div>
                        </div>
                        <div class="detail-box">
                           <h5>
                           Sem Sethy
                           </h5>
                           <h6>
                              Customer
                           </h6>
                           <p>
                              Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="box col-lg-10 mx-auto">
                        <div class="img_container">
                           <div class="img-box">
                              <div class="img_box-inner">
                                 <img src="IMG_0027.JPG" alt=""/>
                              </div>
                           </div>
                        </div>
                        <div class="detail-box">
                           <h5>
                              Cyan
                           </h5>
                           <h6>
                              Customer
                           </h6>
                           <p>
                              Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel_btn_box">
                  <a class="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
                     <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                     <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
                     <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                     <span class="sr-only">Next</span>
                  </a>
               </div>
            </div>
         </div>
      </section>
      {/* End Client Section */}
    </>
  );
};

export default Client;
