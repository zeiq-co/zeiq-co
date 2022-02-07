const Header = () => (
  <>
    <div className="adjust-navigation-height" />
    <header className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3 py-lg-4">
              <a
                className="navbar-brand font-weight-bold mb-0"
                href="index.html"
                title="Zeiq"
              >
                <img src="assets/images/logo.png" alt="Zeiq" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="navbar-menu"
              >
                <svg viewBox="0 0 341.333 341.333">
                  {' '}
                  <g>
                    {' '}
                    <g>
                      {' '}
                      <rect y="277.333" width="341.333" height="42.667" />{' '}
                    </g>{' '}
                  </g>{' '}
                  <g>
                    {' '}
                    <g>
                      {' '}
                      <rect y="149.333" width="341.333" height="42.667" />{' '}
                    </g>{' '}
                  </g>{' '}
                  <g>
                    {' '}
                    <g>
                      {' '}
                      <rect y="21.333" width="341.333" height="42.667" />{' '}
                    </g>{' '}
                  </g>{' '}
                  <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{' '}
                  <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{' '}
                  <g> </g>{' '}
                </svg>
              </button>

              <div className="sidenav-overlay" />

              <div className="navbar-collapse" id="navbar-menu">
                <ul className="navbar-nav mx-auto">
                  <li data-toggle="navbar-menu-close">
                    <i className="las la-times mr-1" />
                    Close
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Work
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="about-me.html">
                          Recent Projects
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="about-us.html">
                          Our Products
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="portfolio.html">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-floating.html"
                        >
                          Portfolio Floating
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-broken.html"
                        >
                          Portfolio Broken
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-grid-3-col.html"
                        >
                          Grid 3 Column
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-grid-4-col.html"
                        >
                          Grid 4 Column
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-single.html"
                        >
                          Portfolio Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="navbar-actions">
                  <a
                    href="https://ui8.net/flexplate/products"
                    className="btn btn-white"
                    data-text="Buy Now"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <span>Support</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
