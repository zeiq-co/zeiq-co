/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
import { Link } from 'gatsby';
import { FiX, FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    if (typeof window !== 'undefined' && window) {
      window.addEventListener('load', function () {
        console.log('All assets are loaded');
      });
    }
  }

  menuTrigger() {
    if (typeof document !== 'undefined' && document) {
      document.querySelector('.header-wrapper').classList.toggle('menu-open');
    }
  }

  CLoseMenuTrigger() {
    if (typeof document !== 'undefined' && document) {
      document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
  }

  render() {
    let elements;
    if (typeof document !== 'undefined' && document) {
      elements = document.querySelectorAll('.has-droupdown > a');
    }

    for (const i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector('.submenu')
            .classList.toggle('active');
          this.classList.toggle('open');
        };
      }
    }

    const { logo, services, color = 'default-color' } = this.props;
    let logoUrl;
    if (logo === 'light') {
      logoUrl = (
        <Logo src="/assets/images/logo/logo-light.png" alt="Digital Agency" />
      );
    } else if (logo === 'dark') {
      logoUrl = (
        <Logo src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />
      );
    } else if (logo === 'symbol-dark') {
      logoUrl = (
        <Logo
          src="/assets/images/logo/logo-symbol-dark.png"
          alt="Digital Agency"
        />
      );
    } else if (logo === 'symbol-light') {
      logoUrl = (
        <Logo
          src="/assets/images/logo/logo-symbol-light.png"
          alt="Digital Agency"
        />
      );
    } else {
      logoUrl = (
        <Logo src="/assets/images/logo/logo.png" alt="Digital Agency" />
      );
    }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <Link to="/">{logoUrl}</Link>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li className="has-droupdown">
                  <Link to="/services">Services</Link>
                  <ul className="submenu">
                    {services.map(({ node: o }) => (
                      <li key={o.id}>
                        <Link to={o.fields.slug}>{o.frontmatter.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <Link className="rn-btn" to="/contact">
                <span>Contact Us</span>
              </Link>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
