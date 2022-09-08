import Link from 'next/link';

const HomeServices = () => (
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 has-anim fade">
          <div className="section-title text-center">
            <h2 className="title text-white">How We Work on it?</h2>
            <p className='font-weight-700 text-light'>E-Commerce Development Process</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 has-anim fade">
          <div className="service-item text-light">
            <div className="service-icon text-primary mb-4">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="#8bc34a"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                />
              </svg>
            </div>

            <h4 className="font-weight-light text-white mb-3">
              Gathering requirement
            </h4>
            <p>
              This is the time to make the right path to your e-commerce success. By learning about your e-commerce goal, business objective, customers as well as your competitors, we collect your complete information about the main objective of your website and how we could meet your requirements.
            </p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 has-anim fade anim-delay-1">
          <div className="service-item text-light">
            <div className="service-icon text-primary mb-4">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="#ecb612"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z" />
                <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z" />
              </svg>
            </div>

            <h4 className="font-weight-light text-white mb-3">
              Planning and Discovery
            </h4>
            <p>
              Designing mock-ups for clients to show a great and eye-catching user experience. It involves theme selection, menus, and icons placement. The client can suggest themes to their websites that are visible to the end users. The theme includes logos, color schemes, borders, layouts, images, etc.
            </p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 has-anim fade anim-delay-2">
          <div className="service-item text-light">
            <div className="service-icon text-primary mb-4">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z"
                />
              </svg>
            </div>

            <h4 className="font-weight-light text-white mb-3">
              Approval
            </h4>
            <p>
              After design approval from the client, our designers and shopping cart experts customize and develop the website’s back-end functionalities. Our Designers and developers craft your e-commerce website to give a great user experience keeping the search engine in mind.
            </p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
            <p>
              <Link href="/services/development">
                <a>Learn more</a>
              </Link>
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 has-anim fade anim-delay-3">
          <div className="service-item text-light">
            <div className="service-icon text-primary mb-4">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="#8bc34a"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                />
              </svg>
            </div>

            <h4 className="font-weight-light text-white mb-3">
              Design and development
            </h4>
            <p>We have experienced web designing experts and e-commerce growth hacking specialists who will work on your dream project. We believe Perfect design and clean coding bring success to the project. Our dedicated team can handle open source e-commerce platforms like Magento, woo commerce, open cart, cakeshop, etc.</p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 has-anim fade anim-delay-3">
          <div className="service-item text-light">
            <div className="service-icon text-primary mb-4">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="#ecb612"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z" />
                <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z" />
              </svg>
            </div>

            <h4 className="font-weight-light text-white mb-3">
              Testing
            </h4>
            <p>
              We test everything. From website speed, user experience, meta-tags, keywords, responsiveness, and conversion for the entire website. Bugs and difficulties can be fixed immediately after the finding from our tester. Our digital marketing specialists test the user experiences and search engine ranking factors of the website before launching.</p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 has-anim fade anim-delay-3">
          <div className="service-item text-light">
            <div className="service-icon text-primary mb-4">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z"
                />
              </svg>
            </div>

            <h4 className="font-weight-light text-white mb-3">
              Publishing
            </h4>
            <p>After the final approval, your website will be ready for the start stage. Our design strategies and marketing guidance work for your e-commerce success. After the successful launching of your website; we support and maintain e-commerce admin training, e-commerce SEO, etc.</p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
          </div>   
        </div>

        {/* <div className="col-12">
          <Link href="/services">
            <a className="line-link">
              All Services{' '}
              <svg
                className="arrow-up-right"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
        </div> */}
      </div>
    </div>
  </section >
);

export default HomeServices;
