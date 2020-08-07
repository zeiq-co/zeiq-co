import React from 'react';

const ServiceOne = ({ data }) => (
  <>
    <div className="row">
      {data.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <div className="service service__style--1">
            <div className="icon">
              <img
                src={`/assets/images/icons/icon-${val.icon}.png`}
                alt={val.title}
              />
            </div>
            <div className="content">
              <h4 className="title">{val.title}</h4>
              <p>{val.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default ServiceOne;
