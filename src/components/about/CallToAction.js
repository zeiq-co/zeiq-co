import Image from 'next/image';
import Link from 'next/link';

const CallToAction = () => (
  <section className="section bg-white">
    <div className="container">
      <div className="row justify-content-start justify-content-lg-around align-items-center">
        <div className="col-xl-6 col-lg-5 col-md-8 has-anim">
          <figure>
            <Image
              loading="lazy"
              className="img-fluid"
              src="/images/about-us.jpg"
              alt="Call to action"
              layout="intrinsic"
              height={1574}
              width={2400}
              objectFit="contain"
            />
          </figure>
        </div>
        <div className="col-xl-5 col-lg-6 mt-5 mt-lg-0">
          <p className="lead text-dark mb-3 has-anim fade">
            Inspired to build your idea?
          </p>

          <p className="has-anim fade anim-delay-1">
            Tell us what you are up to. Together, we can turn your idea into a
            powerful tool for your business.
          </p>

          <Link href="/contact">
            <a
              className="btn btn-black mt-5 has-anim fade anim-delay-2"
              data-text="Contact Us"
            >
              <span>Talk To Us</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
