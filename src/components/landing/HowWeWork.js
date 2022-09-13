import React from 'react';
import Image from 'next/image';

const HowWeWork = ({ data, content }) => {
  if (!data) return null;
  return (
    <div className="section bg-white">
      <div className="container">
        {content && (
          <div className="col-12 has-anim fade">
            <div className="section-title text-center">
              <h2 className="title text-dark">{content.title}</h2>
              <p className="font-weight-700">{content.subtitle}</p>
            </div>
          </div>
        )}
        {data &&
          data.map((item, i) => (
            <div key={item.title || i}>
              <section className="py-4" key={item.title || i}>
                <div className="">
                  <div
                    className={`row justify-content-center align-items-center has-anim fade ${
                      i % 2 === 0 ? '' : 'flex-row-reverse'
                    }`}
                  >
                    {item.image && (
                      <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 pb-2 pb-lg-0">
                        <div
                          className={`pr-0  ${
                            i % 2 === 0 ? 'pr-lg-3' : 'pl-lg-3'
                          }`}
                        >
                          <Image
                            layout="responsive"
                            width={1200}
                            height={900}
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
                        {item.list &&
                          item.list.map((el) => <li>{el?.name}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HowWeWork;
