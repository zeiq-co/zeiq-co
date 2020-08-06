import React from 'react';
import { FiCast, FiLayers, FiUsers, FiMonitor } from 'react-icons/fi';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Breadcrumb from '../components/elements/Breadcrumb';
import ServiceItem from '../components/elements/ServiceItem';

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
  {
    icon: <FiCast />,
    title: 'Website Development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FiMonitor />,
    title: 'Marketing & Reporting',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
];

const Work = () => {
  return (
    <Layout>
      <Seo title="News & Updates" />
      <Breadcrumb title="Services" />
      <div className="service-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h2>Digital Marketing</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, <br /> but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row service-one-wrapper">
            {ServiceList.map((val, i) => (
              <ServiceItem key={i} val={val} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
