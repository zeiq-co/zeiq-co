import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .pricing-plans .block {
    padding: 40px;
  }
  @media (max-width: 767px) {
    .pricing-plans .block {
      padding: 30px 30px;
    }
  }
  @media (max-width: 575px) {
    .pricing-plans .block {
      padding: 40px 20px;
    }
  }
  .pricing-plans .price-wrapper {
    margin: 25px 0;
  }
  .pricing-plans .price-wrapper .price {
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
  }
`;

const data = [
  {
    id: 1,
    type: 'Standard subscription',
    title: '1200',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet suscipit non.',
    body: 'Lorem ipsum dolor ',
    list: [
      { title: '10 User' },
      { title: 'Unlimited Bandwidth' },
      { title: 'Whitelabelling' },
      { title: 'Priority Support' },
      { title: 'File Uploader' },
    ],
  },
  {
    id: 2,
    type: 'Standard subscription',
    title: '1200',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet suscipit non.',
    body: 'Lorem ipsum dolor ',

    list: [
      { title: '10 User' },
      { title: 'Unlimited Bandwidth' },
      { title: 'Whitelabelling' },
      { title: 'Priority Support' },
      { title: 'File Uploader' },
    ],
    isDark: true,
  },
  {
    id: 3,
    type: 'Standard subscription',
    title: '1200',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet suscipit non.',
    body: 'Lorem ipsum dolor ',
    list: [
      { title: '10 User' },
      { title: 'Unlimited Bandwidth' },
      { title: 'Whitelabelling' },
      { title: 'Priority Support' },
      { title: 'File Uploader' },
    ],
  },
];

const WhatWeDo = () => (
  <Wrapper>
    <section className="section pricing-plans bg-white">
      <div className="container">
        <div className="row no-gutters justify-content-center align-items-center">
          {data &&
            data.map((item) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 mt-4 pt-2 mt-md-0 pt-md-0 has-anim fade anim-delay-1"
                key={item.id}
              >
                <div
                  className={`block border  ${item.isDark ? 'bg-dark' : ''}`}
                >
                  <h5
                    className={`font-weight-500 ${
                      item.isDark ? 'bg-dark' : ''
                    }`}
                  >
                    {item.type}
                  </h5>
                  <div className="price-wrapper">
                    <span
                      className={`price ${
                        item.isDark ? 'text-white' : 'text-dark'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div
                    className={`content  ${
                      item.isDark
                        ? 'text-light content-dark'
                        : 'text-dark content-light'
                    }`}
                  >
                    <p>{item.subtitle}</p>
                    <h6>{item.body}</h6>
                    <ul className="pl-0">
                      {item &&
                        item.list &&
                        item.list.map((el) => <li>{el.title}</li>)}
                    </ul>
                    <a
                      href="contact.html"
                      className={`btn btn-block mt-3 ${
                        item.isDark ? 'btn-white' : 'btn-black'
                      }`}
                      data-text="I Want This"
                    >
                      <span>I Want This</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  </Wrapper>
);

export default WhatWeDo;
