import React, { Component } from 'react';
import { FiCast, FiLayers, FiUsers, FiMonitor } from 'react-icons/fi';
import ServiceItem from './ServiceItem';

const ServiceList = [
  {
    icon: <FiCast />,
    title: 'Business Stratagy',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FiLayers />,
    title: 'Website Development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FiUsers />,
    title: 'Marketing & Reporting',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FiMonitor />,
    title: 'Mobile App Development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
];

class ServiceTwo extends Component {
  render() {
    const title = 'Services';
    const description =
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.';

    return (
      <>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
              <div className="service-btn">
                <a className="btn-transparent rn-btn-dark" href="/service">
                  <span className="text">Request Custom Service</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <ServiceItem key={i} val={val} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ServiceTwo;
