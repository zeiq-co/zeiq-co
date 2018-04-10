import React from 'react';

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="widget-area">
            <div className="widget widget_text">
              <p>
                <a href="index.html" className="mini-logo">
                  <img
                    src="tmp/logo.svg"
                    width="144"
                    height="33"
                    style={{width: 144, height: 33}}
                    alt="Sault"
                  />
                </a>
              </p>
            </div>
            <div className="widget widget_nav_menu">
              <nav>
                <ul>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#">Behance</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
