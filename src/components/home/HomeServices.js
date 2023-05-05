import Link from 'next/link';
import Image from 'next/image';
import filter from 'lodash/filter';

const HomeServices = ({ data, category, isServices, whatWeDoData }) => {
  if (!whatWeDoData) return null;
  const filteredData = filter(
    whatWeDoData,
    (item) => item.category === category,
  );

  return (
    <section className="section">
      <div className="container">
        <div className="col-12">
          {!isServices && (
            <div className="section-title text-center">
              <h2 className="title text-white">{data.processTitle}</h2>
              <p className="mb-2">{data.processSubTitle}</p>
            </div>
          )}
        </div>
        <div className="row">
          {filteredData &&
            filteredData.map((item) => (
              <div className="col-lg-3 col-sm-6" key={item.title}>
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
                  <h1 className="is-size-4 font-weight-light text-white mb-3">
                    {item.title}
                  </h1>
                  <p>{item.subtitle}</p>
                  {item.linkTo && (
                    <span
                      className="my-2 d-inline-block"
                      style={{ letterSpacing: '-3px' }}
                    >
                      ━━
                    </span>
                  )}
                  <div>
                    {item.linkTo && (
                      <Link href={`${item.linkTo || '/'}`}>
                        <a>{item.buttonText || 'Learn more'}</a>
                      </Link>
                    )}
                  </div>
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
