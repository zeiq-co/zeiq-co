import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <header id="top" className="navbar">
    <div className="container">
      <div className="inner">
        <div className="site-title">
          <h1>
            <Link to="/">
              <img
                src="tmp/logo.svg"
                alt="Sault"
                style={{width: 144, height: 33}}
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
