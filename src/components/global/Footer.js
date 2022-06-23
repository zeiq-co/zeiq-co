import Link from 'next/link';

const Footer = ({ contactData }) => (
  <>
    <footer className="section-sm pb-4 has-anim">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h4 className="h3 font-weight-light text-white">
                Have an idea, tell us about it!
                <Link href="/contact">
                  <a className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </Link>
              </h4>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 mb-4 mb-lg-0">
            <h4 className="font-weight-light mb-4">
              <a
                href={`mailto:${contactData.emailSales}`}
                className="line-link"
              >
                {contactData.emailSales}
              </a>
            </h4>

            <p>Phone: {contactData.telephoneUk}</p>
            <p>{contactData.locationUk}</p>
            <p>{contactData.locationIndia}</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4 col-6 ml-auto">
            <ul className="footer-link list-unstyled">
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <a>Recent Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Our Products</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4 col-6">
            <ul className="footer-link list-unstyled">
              <li>
                <Link href="/services">
                  <a href="">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a href="">News & Updates</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <ul className="footer-link list-unstyled">
              <li>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <a>Customer Support</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <ul className="footer-link list-unstyled list-inline mt-4 mt-md-5">
              <li className="list-inline-item">
                <a href={contactData.twitter} target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href={contactData.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="list-inline-item">
                <a href={contactData.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a href={contactData.linkedin} target="_blank" rel="noreferrer">
                  Linkedin
                </a>
              </li>
              <li className="list-inline-item">
                <a href={contactData.github} target="_blank" rel="noreferrer">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <section className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mb-5 pb-4">
            <p className="h6 font-weight-light mb-2">
              Copyright &copy; {new Date().getFullYear()} |{' '}
              <a href="/" className="line-link text-white font-weight-light">
                Zeiq.co
              </a>
            </p>
            <p className="h6 font-weight-light">
              When you visit or interact with our sites, services or tools, we
              or our authorised service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Footer;
