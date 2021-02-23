import React from 'react';
import { Link } from 'gatsby';
import ServiceItem from '../elements/ServiceItem';

const Services = ({ services }) => {
  const title = 'Services';
  const description =
    'Zeiq builds and promotes product development to strengthen your business or services. Digital transformation is key for any brand to deliver the best possible results. We provide strategy, planning, and design for businesses to create an eternal online reputation. Our team, our skillset and your ambition together the impossible is possible.';

  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
            <h2 className="title">{title}</h2>
            <p>{description}</p>
            <div className="service-btn">
              <Link className="btn-transparent rn-btn-dark" to="/contact">
                <span className="text">Request a quote</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12 mt_md--50">
          <div className="row service-one-wrapper">
            {services.map(({ node: service }) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
