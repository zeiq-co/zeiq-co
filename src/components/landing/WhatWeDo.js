import React from 'react';
import styled from 'styled-components';
// import Link from 'next/link';

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
    // type: 'Sell more online',
    title: 'Sell more online',
    // subtitle:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet suscipit non.',
    // body: 'Lorem ipsum dolor ',
    list: [
      { title: 'Fully customizable online store' },
      { title: '50+ payment providers' },
      { title: 'Secure cart & checkout' },
      { title: 'Enterprise-level security' },
      { title: 'Dropshipping & print on demand' },
      { title: 'Gift cards & product subscriptions' },
      { title: 'Point of sale solution (in-store & online)' },
    ],
  },
  {
    id: 2,
    // type: 'Standard subscription',
    title: 'Manage your store',
    // subtitle:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet suscipit non.',
    // body: 'Lorem ipsum dolor ',

    list: [
      { title: 'Efficient inventory management' },
      { title: 'Easy tracking of orders & fulfillment' },
      { title: 'Multiple shipping & delivery options' },
      { title: 'Mobile management app' },
      { title: 'Automated sales tax' },
      { title: 'Custom business reports & analytics' },
      { title: '24/7 customer care' },
    ],
    isDark: true,
  },
  {
    id: 3,
    // type: 'Standard subscription',
    title: 'Grow your business',
    // subtitle:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet suscipit non.',
    // body: 'Lorem ipsum dolor ',
    list: [
      { title: 'Multiple sales channels (e.g., Facebook & Amazon)' },
      { title: 'Run campaigns and ads on Facebook and Instagram' },
      { title: 'Advanced SEO tools' },
      { title: 'Email marketing' },
      { title: 'Live chat with customers' },
      { title: 'CRM & automations' },
      { title: 'Branded mobile app' },
    ],
  },
];

const WhatWeDo = () => (
  <Wrapper>
    <section className="section pricing-plans bg-white">
      <div className="container">
        <div className="col-12 has-anim fade">
          <div className="section-title text-center">
            <h2 className="title text-dark">What We Do ?</h2>
            <p className="font-weight-700">
              We understand how to deliver engaging and successful eCommerce
              experiences
            </p>
          </div>
        </div>
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
                  {/* <h5
                    className={`font-weight-500 ${item.isDark ? 'bg-dark' : ''
                      }`}
                  >
                    {item.type}
                  </h5> */}
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
                    {/* <p>{item.subtitle}</p>
                    <h6>{item.body}</h6> */}
                    <ul className="pl-0">
                      {item &&
                        item.list &&
                        item.list.map((el) => <li>{el.title}</li>)}
                    </ul>
                    {/* <Link href="/contact">
                      <a
                        className={`btn btn-block mt-3 ${item.isDark ? 'btn-white' : 'btn-black'
                          }`}
                        data-text="Get In Touch"
                      >
                        <span>Get In Touch</span>
                      </a>
                    </Link> */}
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
