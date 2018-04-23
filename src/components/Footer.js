import React from 'react';

const Footer = ({ social }) => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="widget-area">
            <div className="widget widget_text">
              <p>
                <a href="index.html" className="mini-logo">
                  <img
                    src="tmp/zeiq-logo-1.svg"
                    width="144"
                    height="43"
                    style={{ width: 144, height: 43 }}
                    alt="Sault"
                  />
                </a>
              </p>
            </div>
            <div className="widget widget_nav_menu">
              <nav>
                <ul>
                  <li>
                    <a href={social.facebookId}>Facebook</a>
                  </li>
                  <li>
                    <a href={social.twitterId}>Twitter</a>
                  </li>
                  <li>
                    <a href={social.linkedInId}>LinkedIn</a>
                  </li>
                  <li>
                    <a href={social.instagramId}>Instagram</a>
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
