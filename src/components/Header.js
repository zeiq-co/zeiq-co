import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <header id="top" className="navbar">
    <div className="container">
      <div className="inner">
        <div className="site-title">
          <h1>
            <a href="index.html">
              <img
                src="tmp/logo.svg"
                alt="Sault"
                style={{ width: 144, height: 33 }}
              />
            </a>
          </h1>
          <a href="#site-menu" className="site-menu-toggle">
            <span className="sr-only">Toggle navigation</span>
          </a>
        </div>

        <div id="site-menu">
          <nav>
            <ul>
              <li className="current-menu-item">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="menu-item-has-children">
                <a href="work.html">Work</a>
                <a href="#" className="menu-expand" />
                {/* <ul>
                  <li>
                    <a href="work.html">classNameic Gallery</a>
                  </li>
                  <li>
                    <a href="work-categories.html">Category Based</a>
                  </li>
                  <li>
                    <a href="project.html">Single Project</a>
                  </li>
                </ul> */}
              </li>
              <li className="menu-item-has-children">
                <a href="blog.html">Blog</a>
                <a href="#" className="menu-expand" />
                {/* <ul>
                  <li>
                    <a href="blog.html"> Fullpage Blog</a>
                  </li>
                  <li>
                    <a href="blog-sidebar.html">Blog with Sidebar</a>
                  </li>
                  <li>
                    <a href="post.html">Single Blog Post</a>
                  </li>
                </ul> */}
              </li>
              <li className="menu-item-has-children">
                <a href="services.html">Services</a>
                <a href="#" className="menu-expand" />
              </li>
              <li className="">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
