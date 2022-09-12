import Link from 'next/link';
import Image from 'next/image';
import { filter } from 'lodash';

const HomeServices = ({ data, category, isServices }) => {
  if (!data) return null;
  const filteredData = filter(data, (item) => item.category === category);

  return (
    <section className="section">
      <div className="container">
        <div className="col-12 has-anim fade">
          {!isServices && (
            <div className="section-title text-center">
              <h2 className="title text-white">How We Work on it?</h2>
              <p className="mb-2">E-Commerce Development Process</p>
            </div>
          )}
        </div>
        <div className="row">
          {filteredData &&
            filteredData.map((item) => (
              <div className="col-lg-3 col-sm-6 has-anim fade" key={item.title}>
                <div className="service-item text-light">
                  {item.image && (
                    <div className="service-icon text-primary mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="shadow"
                        height={30}
                        width={30}
                      />
                    </div>
                  )}
                  <h4 className="font-weight-light text-white mb-3">
                    {item.title}
                  </h4>
                  <p>{item.subtitle}</p>
                  {item.linkTo && (
                    <span
                      className="my-2 d-inline-block"
                      style={{ letterSpacing: '-3px' }}
                    >
                      ━━
                    </span>
                  )}
                  {item.linkTo && (
                    <p>
                      <Link href={item.linkTo}>
                        <a>Learn more</a>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            ))}
          {isServices && (
            <div className="col-12">
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
