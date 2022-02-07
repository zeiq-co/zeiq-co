const HomeServices = () => (
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6 has-anim fade">
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
              Design &amp; Branding
            </h4>
            <p>
              We build simple, beautiful and differentiated digital products
              what users want.
            </p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
            <p>145 projects done</p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 has-anim fade anim-delay-1">
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

            <h4 className="font-weight-light text-white mb-3">Marketing</h4>
            <p>
              Increase your sales thanks to our services tailor-made to your
              client’s need.
            </p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
            <p>89 projects done</p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 has-anim fade anim-delay-2">
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
              Web Application
            </h4>
            <p>
              Choose proven technologies, ensuring unlimited possibilities for
              your site.
            </p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
            <p>200+ projects done</p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 has-anim fade anim-delay-3">
          <div className="service-item text-light">
            <div className="service-icon text-primary mb-4">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="#40c39f"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z"
                />
              </svg>
            </div>

            <h4 className="font-weight-light text-white mb-3">
              Interactive Design
            </h4>
            <p>
              Dolores fuga saepe sunt cumque perferendis repudian daetab culpa
              ratione.
            </p>
            <span
              className="my-2 d-inline-block"
              style={{ letterSpacing: '-3px' }}
            >
              ━━
            </span>
            <p>93 projects done</p>
          </div>
        </div>

        <div className="col-12">
          <a href="services.html" className="line-link">
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
        </div>
      </div>
    </div>
  </section>
);

export default HomeServices;
