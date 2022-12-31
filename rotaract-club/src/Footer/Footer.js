import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Rotaract Club of SVIT<br />
              Sai Vidya Institute of Technology<br />
              Rajanukunte, Bengaluru-560064</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-media-icons">
              <a href="https://facebook.com/rotaract.svit" target="_blank" title='Facebook'><BsFacebook/></a>
              <a href="https://facebook.com/rotaract.svit" target="_blank" title='Twitter'><BsTwitter/></a>
              <a href="https://instagram.com/rotaract.svit" target="_blank" title='Instagram'><BsInstagram/></a>
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
          Copyright &copy; 2023 Rotaract Club of SVIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
