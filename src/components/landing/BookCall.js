import AnimatedButton from '../elements/AnimatedButton';

const BookCall = ({ title, subTitle }) => (
  <section className="page-header bg-white">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="my-0 my-lg-5">
            <p className="mb-3 font-weight-500 text-dark text-center">
              {title}
            </p>
            <h2 className="banner-title text-white font-weight-500 text-dark mb-3 text-center">
              {subTitle}
              <span className="text-primary">.</span>
            </h2>
            <div className="text-center">
              <a href="https://calendly.com/perminder-klair/15min">
                <AnimatedButton>Book a call</AnimatedButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BookCall;
