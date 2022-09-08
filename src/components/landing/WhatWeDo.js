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

const data = [{ id: 1 }, { id: 2, isDark: true }, { id: 3 }];

const WhatWeDo = () => (
  <Wrapper>
    <section className="section pricing-plans bg-white">
      <div className="container">
        <div className="col-12 has-anim fade">
          <div className="section-title text-center">
            <h2 className="title text-dark">What We Do ?</h2>
            <p className='font-weight-700'>We understand how to deliver engaging and successful eCommerce experiences</p>
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
                  <div className="price-wrapper">
                    <h3
                      className={`font-weight-100 font ${item.isDark ? 'text-white' : 'text-dark'
                        }`}
                    >

                      Sell more online
                    </h3>
                  </div>
                  <div
                    className={`content  ${item.isDark
                      ? 'text-light content-dark'
                      : 'text-dark content-light'
                      }`}
                  >
                    <ul className="pl-0">
                      <li>Fully customizable online store</li>
                      <li>Enterprise-level security</li>
                      <li>50+ payment providers</li>
                      <li>Secure cart &amp; checkout</li>
                      <li>Gift cards &amp; product subscriptions</li>
                      <li>Point of sale solution (in-store &amp; online)</li>
                    </ul>
                    <a
                      href="contact.html"
                      className={`btn btn-block mt-3 ${item.isDark ? 'btn-white' : 'btn-black'
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
