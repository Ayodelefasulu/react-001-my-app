// Importing dependencies
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/all.css';
import 'assets/css/owl.carousel.min.css';
import 'assets/css/jquery.fancybox.min.css';
import 'assets/css/style.css';

export const TopBar = () => (
  <div className="top-bar">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="social-media">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-details">
            <ul>
              <li><i className="fas fa-phone fa-rotate-90"></i> +234 812 345 6789</li>
              <li><i className="fas fa-map-marker-alt"></i> FCT, Abuja, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-light top-nav">
    <div className="container">
      <a className="navbar-brand" href="/">
        <h1 style={{ fontFamily: 'cursive', color: '#007bff' }}>Peulz</h1>
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fas fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">Services</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pages
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pagesDropdown">
              <a className="dropdown-item" href="/faq">FAQ</a>
              <a className="dropdown-item" href="/pricing">Pricing Table</a>
            </div>
          </li>      
        </ul>
        <div className=''>
          <a className="link-success link-offset-2 link-underline-opacity-100-hover m-4" href="/register">Sign Up</a>
          <a className="link-primary link-offset-2 link-underline-opacity-100-hover m-4" href="/login">Login</a>
        </div>
      </div>
    </div>
  </nav>
);

export const Footer = () => (
  <footer className="footer">
    <div className="container bottom_border">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <h5 className="col_white_amrc pt2">About Us</h5>
          <p className="mb10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <ul className="footer-social">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <h5 className="col_white_amrc pt2">Quick Links</h5>
          <ul className="footer_ul_amrc">
            <li><a href="#">Default Version</a></li>
            <li><a href="#">Boxed Version</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container">
      <p className="text-center">
        All Rights Reserved. &copy; 2024 Peulz
      </p>
    </div>
  </footer>
);


//export default Skeleton;
