import React from 'react';
import { filter } from 'lodash';

const WhatWeDo = ({ data, featuredData, category }) => {
  if (!featuredData) return null;
  const filteredData = filter(
    featuredData,
    (item) => item.category === category,
  );
  return (
    <section className="section pricing-plans bg-white">
      <div className="container">
        <div className="col-12 has-anim fade">
          <div className="section-title text-center">
            <h2 className="title text-dark">{data?.serviceTitle}</h2>
            <p className="font-weight-700">{data?.serviceSubTitle}</p>
          </div>
        </div>
        <div className="row no-gutters justify-content-center align-items-center">
          {filteredData &&
            filteredData.map((item, i) => (
              <div
                className="col-lg-4 col-md-6 mt-4 pt-2 mt-md-0 pt-md-0 has-anim fade anim-delay-1"
                key={item.id || i}
              >
                <div
                  className={`block border  ${item.isDark ? 'bg-dark' : ''}`}
                >
                  <div className="price-wrapper">
                    <h3
                      className={`font-weight-100 font ${
                        item.isDark ? 'text-white' : 'text-dark'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className={`content  ${
                      item.isDark
                        ? 'text-light content-dark'
                        : 'text-dark content-light'
                    }`}
                  >
                    <ul className="pl-0">
                      {item &&
                        item.list &&
                        item.list.map((el) => (
                          <li key={el.title}>{el.title}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
