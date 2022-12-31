import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Rotaract Club of SVIT<br />
              College Campus<br />
              Anytown, USA 12345</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-media-icons">
              <a href="#"><img src="facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="twitter.png" alt="Twitter" /></a>
              <a href="#"><img src="instagram.png" alt="Instagram" /></a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          Copyright &copy; 2021 Rotaract Club of SVIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
