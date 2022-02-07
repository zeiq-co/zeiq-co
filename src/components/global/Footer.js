const Footer = () => (
  <>
    <footer className="section-sm pb-4 has-anim">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h4 className="h3 font-weight-light text-white">
                Have an idea, tell us about it!
                <a href="contact.html" className="text-primary">
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
              </h4>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 mb-4 mb-lg-0">
            <h4 className="font-weight-light mb-4">
              <a href="mailto:contact@abildon.io" className="line-link">
                contact@abildon.io
              </a>
            </h4>

            <p>Phone: +072 223 2424</p>
            <p>75 E Santa Clara St, Ste 1425</p>
            <p>Alexandria, VA 22314, USA</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4 col-6 ml-auto">
            <ul className="footer-link list-unstyled">
              <li>
                <a href="about-us.html">About us</a>
              </li>
              <li>
                <a href="about-me.html">About me</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4 col-6">
            <ul className="footer-link list-unstyled">
              <li>
                <a href="blogs-1-col.html">Our blog</a>
              </li>
              <li>
                <a href="team.html">Our team</a>
              </li>
              <li>
                <a href="pricing.html">Pricing plans</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <ul className="footer-link list-unstyled">
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="privacy.html">Privacy &amp; policy</a>
              </li>
              <li>
                <a href="style-guide.html">Style Guide</a>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <ul className="footer-link list-unstyled list-inline mt-4 mt-md-5">
              <li className="list-inline-item">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="#!">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="#!">Instagram</a>
              </li>
              <li className="list-inline-item">
                <a href="#!">Linkedin</a>
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
              Copyright &copy; {new Date().getFullYear()}{' '}
              <a
                href="https://ui8.net/flexplate/products"
                className="line-link text-white font-weight-light"
              >
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
