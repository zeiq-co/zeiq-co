import Link from 'next/link';

const RelatedServices = ({ services }) => {
  if (services.length < 2) {
    return null;
  }

  return (
    <section
      id="open-positions"
      className="section"
      style={{ borderBottom: '1px solid #151829' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center has-anim fade">
              <p className="mb-2">You might be interested in</p>
              <h2 className="title text-white">More Info</h2>
            </div>

            <div className="row justify-content-center pt-3 mt-5 has-anim fade">
              <ul className="open-positions-list">
                {services.map((service) => (
                  <li key={service.slug}>
                    <h4>
                      <Link href={`/services/${service.slug}`}>
                        <a className="text-light font-weight-500 d-block mb-2">
                          {service.title}
                        </a>
                      </Link>
                    </h4>
                    <span>{service.info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
