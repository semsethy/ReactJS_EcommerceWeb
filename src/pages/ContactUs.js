import React from 'react';
import Arrival from '../components/Arrival';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  return <div>
            
            <section class="why_section layout_padding">
                <div className="heading_container heading_center">
                    <h2>
                        Contact <span>Us Here</span>
                    </h2>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="full">
                            <form action="index.html">
                                <fieldset>
                                <input type="text" placeholder="Enter your full name" name="name" required />
                                <input type="email" placeholder="Enter your email address" name="email" required />
                                <input type="text" placeholder="Enter subject" name="subject" required />
                                <textarea placeholder="Enter your message" required></textarea>
                                <input type="submit" value="Submit" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Arrival/>
            {/* Contact Information Section */}
      <section className="contact-section">
        <div className="container">
            <div className="heading_container heading_center pb-5">
                <h2>
                    Our Contact <span>Information</span>
                </h2>
            </div>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <p className="contact-text">+855 010 383 493</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <p className="contact-text">sethyrisk@gmail.com</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <p className="contact-text">1907 Street, Phnom Penh They, Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
            <div className="heading_container heading_center pb-5">
                <h2>
                    Our <span>Location</span>
                </h2>
            </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6948.511539848882!2d104.89392724979605!3d11.570446236927355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2z4Z6f4Z624Z6A4Z6b4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6b4Z-Q4Z6Z4Z6X4Z684Z6Y4Z634Z6T4Z-S4Z6R4Z6X4Z-S4Z6T4Z-G4Z6W4Z-B4Z6J!5e0!3m2!1skm!2skh!4v1731381333734!5m2!1skm!2skh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
        </div>;
};

export default ContactUs;
