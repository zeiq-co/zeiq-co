import React from 'react';

const HowWeWork = ({ data }) => {
  if (!data) return null;
  return (
    <div>
      {data &&
        data.map((item, i) => (
          <div key={item.title || i}>
            <section className="section bg-white">
              <div className="container">
                <div className="row justify-content-center align-items-center has-anim fade">
                  {item.image && (
                    <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 pb-2 pb-lg-0">
                      <div className="pr-0 pr-lg-3">
                        <img
                          className="img-fluid"
                          src={item.image}
                          alt="service"
                        />
                      </div>
                    </div>
                  )}
                  <div className="col-lg-5 col-md-10 position-relative">
                    <div className="service-icon-lg">
                      <svg
                        viewBox="0 0 16 16"
                        fill="#8bc34a"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                        />
                      </svg>
                    </div>

                    {item.title && (
                      <h3 className="text-dark font-weight-600 mb-4">
                        {item.title}
                      </h3>
                    )}
                    {item.subtitle && <p className="mt-2">{item.subtitle}</p>}
                    <ul className="service-info-list text-dark mt-4">
                      {item.list && item.list.map((el) => <li>{el?.name}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
    </div>
  );
};

export default HowWeWork;
