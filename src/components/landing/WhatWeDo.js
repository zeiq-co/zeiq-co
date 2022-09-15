import React from 'react';

const data = [
  {
    id: 1,
    title: 'Sell more online',
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
    title: 'Manage your store',
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
    title: 'Grow your business',
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
  // <Wrapper>
  <section className="section pricing-plans bg-white">
    <div className="container">
      <div className="col-12 has-anim fade">
        <div className="section-title text-center">
          <h2 className="title text-dark">How can we help?</h2>
          <p className="font-weight-700">
            We understand how to deliver engaging and successful eCommerce
            experiences
          </p>
        </div>
      </div>
      <div className="row no-gutters justify-content-center align-items-center">
        {data &&
          data.map((item, i) => (
            <div
              className="col-lg-4 col-md-6 mt-4 pt-2 mt-md-0 pt-md-0 has-anim fade anim-delay-1"
              key={item.id || i}
            >
              <div className={`block border  ${item.isDark ? 'bg-dark' : ''}`}>
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
                      item.list.map((el) => <li key={el.title}>{el.title}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </section>
  // </Wrapper>
);

export default WhatWeDo;
