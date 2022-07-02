import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const LogoContainer = styled.a`
  display: flex;
`;

const services = [
  { id: 1, title: 'Development', slug: '/services/development' },
  { id: 2, title: 'Design Thinking', slug: '/services/design-thinking' },
  {
    id: 3,
    title: 'Software Development',
    slug: '/services/software-development',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    slug: '/services/marketing',
  },
];

const Header = () => (
  <>
    <div className="adjust-navigation-height" />
    <header className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3 py-lg-4">
              <Link href="/" prefetch={false}>
                <LogoContainer
                  className="navbar-brand font-weight-bold mb-0"
                  title="Zeiq"
                >
                  <Image
                    src="/logo-1024.png"
                    alt="Zeiq Logo"
                    width={48}
                    height={30}
                  />
                  <span>ZEIQ</span>
                </LogoContainer>
              </Link>

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
                        <Link href="/work">
                          <a className="dropdown-item">Recent Projects</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/products">
                          <a className="dropdown-item">Our Products</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link href="/services">
                      <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Services
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      {services.map((item) => (
                        <li key={item.slug}>
                          <Link href={item.slug}>
                            <a className="dropdown-item">{item.title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a className="nav-link">About</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>

                <div className="navbar-actions">
                  <Link href="/support">
                    <a
                      className="btn btn-white"
                      data-text="Clients"
                      target="_blank"
                      rel="nofollow noreferrer"
                    >
                      <span>Support</span>
                    </a>
                  </Link>
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
