import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header id="top" className="navbar">
    <div className="container">
      <div className="inner">
        <div className="site-title">
          <h1>
            <Link to="/">
              <img
                src="/img/zeiq-logo-offblack.png"
                alt="Zeiq"
                style={{ height: 43 }}
              />
            </Link>
          </h1>
          <a href="#site-menu" className="site-menu-toggle">
            <span className="sr-only">Toggle navigation</span>
          </a>
        </div>

        <div id="site-menu">
          <nav>
            <ul>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/open-source">Open Source</Link>
              </li>
              <li>
                <Link to="/our-products">Our Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
