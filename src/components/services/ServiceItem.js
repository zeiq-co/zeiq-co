const ServiceImage = () => (
  <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 pb-2 pb-lg-0">
    <div className="pr-0 pr-lg-3">
      <img
        loading="lazy"
        className="img-fluid"
        src="assets/images/services/design.jpg"
        alt="service image"
      />
    </div>
  </div>
);

const ServiceItem = ({ imageLeft }) => (
  <div className="row justify-content-center align-items-center  mt-5 pt-5 has-anim fade">
    {imageLeft && <ServiceImage />}
    <div className="col-lg-5 col-md-10 position-relative">
      <div className="service-icon-lg">
        <svg
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

      <h3 className="text-dark font-weight-600 mb-4">Design &amp; Branding</h3>
      <p className="mt-2">
        We build simple, beautiful and differentiated digital products what
        users want. Cupiditate laborum facilis repellat explicabo a temporib.
      </p>
      <p className="mt-2">
        Reprehenderit temporibus doloremque cupiditate rem magnam vitae, est
        qui!
      </p>

      <ul className="service-info-list text-dark mt-4">
        <li>Brand Positioning</li>
        <li>Naming</li>
        <li>Logo Design</li>
        <li>Motion Design</li>
        <li>Identity Systems</li>
        <li>Art Direction</li>
        <li>And more...</li>
      </ul>

      <span className="my-2 d-inline-block" style={{ letterSpacing: '-3px' }}>
        ━━
      </span>
      <p>145 projects done</p>
    </div>
    {!imageLeft && <ServiceImage />}
  </div>
);

export default ServiceItem;
