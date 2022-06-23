const AboutInfo = () => (
  <section className="section bg-white">
    <div className="container">
      <div className="row justify-content-start justify-content-lg-around align-items-center">
        <div className="col-xl-5 col-lg-5 col-md-8 has-anim">
          <img
            loading="lazy"
            className="img-fluid"
            src="assets/images/about-image.jpg"
            alt=""
          />
        </div>
        <div className="col-xl-5 col-lg-6 mt-5 mt-lg-0">
          <p className="lead text-dark mb-3 has-anim fade">
            As a full-service digital agency 👋, we work closely with our
            clients to define, design and develop transformative user
            experiences across all platforms and brand’s touchpoints.
          </p>

          <p className="has-anim fade anim-delay-1">
            We build thoughtful digital experiences for the modern world. We
            have created an environment to encourage warm exchanges around
            brands. In a permanent adaptation, the ideas are concretized by the
            bonds which we weave between our customers and our talents.
          </p>

          <a
            href="contact.html"
            className="btn btn-black mt-5 has-anim fade anim-delay-2"
            data-text="Contact Us"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutInfo;